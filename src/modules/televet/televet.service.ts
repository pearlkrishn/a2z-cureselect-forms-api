import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TelevetService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async updatePetDetails(token: string, id: number, data: any) {
    try {
      await firstValueFrom(
        this.httpService.patch(
          `${this.configService.get('televet_url')}/pets/${id}`,
          data,
          {
            headers: {
              Authorization: token,
            },
          },
        ),
      );
    } catch (error) {
      console.error(error?.response?.data || error?.data || error);
    }
  }
}
