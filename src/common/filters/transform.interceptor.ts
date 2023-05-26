import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  statusCode: number;
  message: string;
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        const response: any = {
          statusCode:
            data?.statusCode || context.switchToHttp().getResponse().statusCode,
          message: data?.message,
          data: data?.data || data,
        };

        if (data?.statusCode) {
          delete response.data['statusCode'];
        }

        if (data?.message) {
          delete response.data['message'];
        }

        if (data?.docs) {
          response.data = {
            results: data.docs,
            pagination: {
              currentPage: data.page,
              lastPage: data.pages,
              perPage: data.limit,
              totalResults: data.total,
            },
          };

          Object.keys(data).forEach((key) => {
            if (!['docs', 'page', 'pages', 'limit', 'total'].includes(key)) {
              response.data[key] = data[key];
            }
          });
        }

        if (data.pagination) {
          response.pagination = data.pagination;
        }
        return response;
      }),
    );
  }
}
