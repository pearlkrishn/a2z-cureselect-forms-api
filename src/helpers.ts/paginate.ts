import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class QueryDto {
  @IsOptional()
  @Transform((v: any) => {
    return parseInt(v.value);
  })
  page = 1;

  @IsOptional()
  @Transform((v: any) => {
    return parseInt(v.value);
  })
  limit = 20;
}

type QueryExecutor<T> = {
  exec(): Promise<T>;
  lean(): QueryExecutor<T>;
  skip(offset: number): QueryExecutor<T>;
  limit(limit: number): QueryExecutor<T>;
  populate(data: any): QueryExecutor<T>;
  sort(data): QueryExecutor<T>;
};

type AggregateExecutor<T> = {
  exec(): Promise<T>;
  skip(offset: number): AggregateExecutor<T>;
  limit(limit: number): AggregateExecutor<T>;
  sort(data): AggregateExecutor<T>;
  group(data): AggregateExecutor<T>;
};

type Model = {
  countDocuments(query): QueryExecutor<number>;
  find<T>(query): QueryExecutor<T[]>;
  aggregate<T>(query?): AggregateExecutor<T[]>;
};

export interface Pagination {
  total: number;
  total_pages: number;
  current_page?: number;
  limit: number;
  next?: number;
  prev?: number;
}

export interface CollectionResponse<T> {
  readonly data: T[];
  readonly pagination: Pagination;
}

export class Paginator<T> {
  constructor(private model: Model) {}

  async find(query, populate?: any): Promise<CollectionResponse<T>> {
    const page = query.page ? query.page : 1;
    const limit = query.limit ? query.limit : 20;
    const sorter = query.sorter;
    const filter = query.filter ? query.filter : {};

    const q = this.model
      .find(filter)
      .lean()
      .skip((page - 1) * limit)
      .limit(limit);

    if (populate) {
      q.populate(populate);
    }

    if (sorter) q.sort(sorter);
    const data = (await q.exec()) as T[];
    return {
      data,
      pagination: await this.paginate(query),
    };
  }

  private async paginate(query) {
    const count = await this.model.countDocuments(query.filter).exec();
    const page = query.page ? query.page : 1;
    const limit = query.limit ? query.limit : 20;
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

  async aggregate(query): Promise<CollectionResponse<T>> {
    const page = query.page ? query.page : 1;
    const limit = query.limit ? query.limit : 20;
    const sorter = query.sorter;

    const q = this.model.aggregate(query.pipeline);

    if (sorter) q.sort(sorter);
    q.skip((page - 1) * limit).limit(limit);

    const data = (await q.exec()) as T[];
    return {
      data,
      pagination: await this.aggregatePaginate(query),
    };
  }

  private async aggregatePaginate(query) {
    const q = this.model.aggregate(query.pipeline);
    const qcount = (await q
      .group({
        _id: null,
        count: { $sum: 1 },
      })
      .exec()) as any;
    const count = qcount[0] ? qcount[0].count : 0;
    const page = query.page ? query.page : 1;
    const limit = query.limit ? query.limit : 20;
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
}
