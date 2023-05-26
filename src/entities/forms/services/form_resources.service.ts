import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CommonEntity, SearchEntity } from 'src/common/constants';
import { form } from 'src/files/form';
import { HelperService } from 'src/helpers.ts/model';

@Injectable()
export class FormResourcesService {
  constructor(private helperService: HelperService) {}

  async create(schema, createFormDto: any, subform = null) {
    if (subform) {
      createFormDto.type = subform;
    }
    const model = await this.helperService.getSchemaModel(schema);
    return model.create(createFormDto);
  }

  async findAll(schema, query: any = {}, subform?, pagination?) {
    const model = await this.helperService.getSchemaModel(schema);
    const page = query.page ? query.page : 1;
    const limit = query.limit ? query.limit : 20;
    let filter: any = plainToInstance(SearchEntity, query);
    if (subform) {
      filter.type = subform;
    }
    filter = JSON.parse(JSON.stringify(filter)); //serialize
    const matchFilters = {
      deleted_at: { $exists: false },
      ...filter,
    };

    let data = [];

    if (pagination) {
      data = await model
        .aggregate(matchFilters)
        // .group({ _id: '$date', data: { $push: '$$ROOT' } })
        .sort({ createdAt: 1 })
        .skip((page - 1) * limit)
        .limit(limit);
      // .lean();
    } else {
      data = await model
        .aggregate(matchFilters)
        // .group({ _id: '$date', data: { $push: '$$ROOT' } })
        .sort({ createdAt: 1 });
    }

    return {
      data,
      pagination: await this.paginate(model, matchFilters, +page, +limit),
    };
  }

  async findOne(schema, query, populate = null) {
    const model = await this.helperService.getSchemaModel(schema);
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

  private async paginate(model, filter, page, limit) {
    const count = await model.find(filter).count();
    const pagination = {
      total: count,
      total_pages: Math.ceil(count / limit),
      current_page: count > 0 ? page : undefined,
      limit: limit,
      next: (page + 1) * limit >= count ? undefined : page + 1,
      prev: page == 1 ? undefined : page - 1,
    };

    return pagination;
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
          data: data.data.map((d) => plainToInstance(CommonEntity, d)),
        });
      }
    }

    return summary;
  }
}
