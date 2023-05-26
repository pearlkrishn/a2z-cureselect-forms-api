import { Inject, Injectable } from '@nestjs/common';
import { HelperService } from './helpers.ts/model';

@Injectable()
export class AppService {
  constructor(private helperService: HelperService) {}
  getHello(): string {
    return 'Hello World!';
  }
}
