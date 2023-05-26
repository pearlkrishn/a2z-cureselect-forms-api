import { Catch, HttpStatus } from '@nestjs/common';
import { MongoServerError } from 'mongodb';

@Catch(MongoServerError, Error)
export class MongoExceptionFilter {
  catch(exception) {
    const errors = {};
    if (exception instanceof MongoServerError) {
      switch (exception.code) {
        case 11000:
          errors[Object.keys(exception.keyPattern)[0]] =
            'Value should be unique';
      }
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        errors: {
          body: { ...errors },
        },
      };
    } else if (exception.errors && Object.keys(exception.errors).length) {
      const keys = Object.keys(exception.errors);
      keys.forEach((element) => {
        errors[element] = exception.errors[element].message;
      });
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        errors: { body: { ...errors } },
      };
    }
  }
}
