import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CommonEntity, SearchEntity } from 'src/common/constants';
import { form } from 'src/files/form';
import { HelperService } from 'src/helpers.ts/model';
import { Paginator } from 'src/helpers.ts/paginate';

@Injectable()
export class FormResourcesService {
  constructor(private helperService: HelperService) {}

  async create(schema, createFormDto: any, subform = null) {
    if (subform) {
      createFormDto.form_type = subform;
    }
    const model = await this.helperService.getSchemaModel(schema);
    return model.create(createFormDto);
  }

  async findAll(schema, query: any = {}, subform?, pagination?) {
    const model = await this.helperService.getSchemaModel(schema);
    let filter: any = plainToInstance(SearchEntity, query);
    if (subform) {
      filter.form_type = subform;
    }
    filter = JSON.parse(JSON.stringify(filter)); //serialize
    const matchFilters = {
      deleted_at: { $exists: false },
      ...filter,
    };
    let data;

    const classExist = await this.checkUpdateRequires(schema, matchFilters);

    if (pagination) {
      query.pipeline = [
        {
          $match: matchFilters,
        },
        {
          $group: {
            _id: {
              $dateToString: { format: '%Y-%m-%d', date: '$created_at' },
            },
            data: { $push: '$$ROOT' },
          },
        },
        {
          $sort: { _id: -1 },
        },
      ];

      data = await new Paginator(model).aggregate(query);
      return {
        data: data.data,
        pagination: data.pagination,
      };
    } else {
      data = await model
        .aggregate([
          {
            $match: matchFilters,
          },
        ])
        .group({
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$created_at' },
          },
          data: { $push: '$$ROOT' },
        })
        .sort({ createdAt: 1 });

      return {
        data,
      };
    }
  }

  async findOne(schema, query = {}, populate = null) {
    const model = await this.helperService.getSchemaModel(schema);
    const classExist = await this.checkUpdateRequires(schema, {
      deleted_at: { $exists: false },
      ...query,
    });
    const dataQuery = model.findOne({
      deleted_at: { $exists: false },
      ...query,
    });
    if (populate) {
      dataQuery.populate(populate);
    }
    return await dataQuery;
  }

  async update(schema, updateFormDto, query) {
    const model = await this.helperService.getSchemaModel(schema);
    if (query.id) {
      query._id = query.id;
      delete query.id;
    }
    return await model
      .findOneAndUpdate(
        {
          deleted_at: { $exists: false },
          ...query,
        },
        updateFormDto,
        {
          new: true,
        },
      )
      .lean();
  }

  async remove(schema, query, data: any = {}, hardDelete = false) {
    const model = await this.helperService.getSchemaModel(schema);
    if (query.id) {
      query._id = query.id;
      delete query.id;
    }
    if (hardDelete) {
      return await model.deleteOne(query);
    } else {
      data.deleted_at = Date.now();
      await model.updateOne(
        {
          deleted_at: { $exists: false },
          ...query,
        },
        data,
      );
      return {
        deleted: true,
      };
    }
  }

  async find(schema, query, populate = null) {
    const model = await this.helperService.getSchemaModel(schema);
    const dataQuery = model
      .find({
        deleted_at: { $exists: false },
        ...query,
      })
      .sort({ createdAt: 1 });
    if (populate) {
      dataQuery.populate(populate);
    }
    return await dataQuery;
  }

  async summary(client, query) {
    const summary = [];
    let file;
    if (client === 'televet') {
      file = form;
    }
    if (file) {
      for (const key in file) {
        const data = await this.findAll(key, query, null, null);
        summary.push({
          name: file[key].name,
          slug: key,
          data: data.data?.map((d) => plainToInstance(CommonEntity, d)),
        });
      }
    }

    return summary;
  }

  async checkUpdateRequires(schema, filters?) {
    switch (schema) {
      case 'medications':
        const model = await this.helperService.getSchemaModel(schema);
        const existingData = await model.find({
          ...filters,
          status: { $ne: 'expired' },
        });
        if (existingData?.length) {
          for await (const medication of existingData) {
            if (medication.status === 'expired' || !medication.no_of_days)
              continue;
            const setStatus =
              new Date(medication.date).getTime() +
                +medication.no_of_days * 24 * 60 * 60 * 1000 <
              Date.now()
                ? 'expired'
                : 'active';
            await model.updateOne(
              { _id: medication._id },
              {
                $set: {
                  status: setStatus,
                },
              },
            );
          }
        } else {
          return false;
        }
      default:
        return false;
    }
  }
}
