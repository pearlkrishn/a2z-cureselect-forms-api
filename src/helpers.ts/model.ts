import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import mongoose, { Connection, Schema } from 'mongoose';
import { form } from 'src/files/form';

@Injectable()
export class HelperService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async getSchemaModel(schema) {
    const schemaFromJson = form[schema];
    const db = this.connection.useDb('forms');
    const schemas = new mongoose.Schema(schemaFromJson?.schema, {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
      autoIndex: true,
    });
    // schemas.plugin(paginate);
    const modelSchema = db.model(schema, schemas);
    return modelSchema;
  }
}
