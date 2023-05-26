import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService) {}

  getBaseUrl(client): string {
    let url;
    switch (client) {
      case 'televet':
        url = `${process.env.TELEVET_USER_URL}`;
        break;
      default:
        url = `${process.env.TELEVET_USER_URL}`;
        break;
    }
    return url;
  }

  async getUser(id, url, token) {
    try {
      const user = await firstValueFrom(
        this.httpService.get(`${url}/${id}`, {
          headers: {
            Authorization: token,
          },
        }),
      );
      return user.data?.data;
    } catch (error) {
      console.error(error?.response?.data || error?.data || error);
    }
  }
}
