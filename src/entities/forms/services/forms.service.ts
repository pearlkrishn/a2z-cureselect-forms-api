import { Injectable } from '@nestjs/common';
import { form } from 'src/files/form';
import { HelperService } from 'src/helpers.ts/model';

@Injectable()
export class FormsService {
  constructor(private helperService: HelperService) {}

  async findAll(schema, subform?) {
    return subform ? form[schema].value[subform] : form[schema].value;
  }

  async findOne(schema, subform?) {
    return subform ? form[schema].value[subform] : form[schema].value;
  }

  async find(schema, query, populate = null) {
    const model = await this.helperService.getSchemaModel(schema);
    const dataQuery = model.find({
      deleted_at: { $exists: false },
      ...query,
    });
    if (populate) {
      dataQuery.populate(populate);
    }
    return await dataQuery;
  }
}
