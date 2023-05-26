import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { MongoServerError } from 'mongodb';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: any, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();
    const exceptionResponse = {};

    if (exception instanceof MongoServerError) {
      const keys = Object.keys(exception.errors);
      switch (exception.code) {
        case 11000:
          exceptionResponse[Object.keys(exception.keyPattern)[0]] =
            'Value should be unique';
          break;
        default:
          keys.forEach((element) => {
            exceptionResponse[element] = exception.errors[element].message;
          });
      }
    } else {
      // exceptionResponse = exception?.getResponse()
      //   ? exception?.getResponse()
      //   : {};
    }

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const responseBody = {
      statusCode: httpStatus,
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
      // ...exceptionResponse,
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
