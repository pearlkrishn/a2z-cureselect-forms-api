import { Module } from '@nestjs/common';
import { TelevetService } from './televet.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
  ],
  providers: [TelevetService],
  exports: [TelevetService],
})
export class TelevetModule {}
