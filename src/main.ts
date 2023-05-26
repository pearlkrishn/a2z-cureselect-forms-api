import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import {
  BadRequestException,
  HttpStatus,
  ValidationPipe,
} from '@nestjs/common';
import { TransformInterceptor } from './common/filters/transform.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationError, useContainer } from 'class-validator';
import { AllExceptionsFilter } from './common/filters/exception';
import { TimeoutInterceptor } from './common/filters/timeout.interceptor';
import { MongoExceptionFilter } from './common/filters/mongo';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  // const { httpAdapter } = app.get(HttpAdapterHost);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        const errorTransformer = (validationErrors) => {
          return validationErrors.reduce((errors, error) => {
            errors[error.property] = error.children?.length
              ? errorTransformer(error.children)
              : Object.values(error.constraints);

            return errors;
          }, {});
        };

        return new BadRequestException({
          statusCode: HttpStatus.BAD_REQUEST,
          errors: errorTransformer(validationErrors),
          message: 'Bad Request',
        });
      },
    }),
  );
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalInterceptors(new TimeoutInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter(app.get(HttpAdapterHost)));
  // app.useGlobalFilters(new MongoExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('Form Builder Api')
    .setDescription('Form Builder')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  await app.listen(configService.get('PORT'));
}
bootstrap();
