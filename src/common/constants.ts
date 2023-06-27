import { Exclude, Type, Expose, Transform } from 'class-transformer';
import * as Joi from 'joi';

export const headersSchema = Joi.object({
  authorization: Joi.string().required().messages({
    'any.required': 'Authorization is required',
  }),
})
  .unknown(true)
  .required();

export const userSchema = Joi.object({
  id: Joi.object().required(),
}).required();

export const modifiedByUserSchema = Joi.object({
  id: Joi.object().required(),
}).required();

export class SearchEntity {
  @Exclude()
  limit;

  @Exclude()
  page;

  @Expose()
  @Transform((v) => {
    if (v.obj.from_date || v.obj.to_date) {
      if (v.obj.from_date && !v.obj.to_date) {
        return {
          $gte: new Date(v.obj.from_date),
        };
      }
      if (v.obj.to_date && !v.obj.from_date) {
        return {
          $lte: v.obj.to_date,
        };
      }
      if (v.obj.from_date && v.obj.to_date) {
        return {
          $gte: v.obj.from_date,
          $lte: v.obj.to_date,
        };
      }
    } else {
      return undefined;
    }
  })
  created_at;

  @Exclude()
  from_date;

  @Exclude()
  group_by;

  @Exclude()
  to_date;

  @Expose({ name: 'pet_id' })
  pet_id;

  @Expose({ name: 'owner_id' })
  owner_id;

  @Expose({ name: 'provider_id' })
  provider_id;
}

@Exclude()
export class UserEntity {
  @Expose({ name: '_id' })
  @Transform((v) => v.obj?._id?.toString())
  id;
}

class ModifiedUserEntity {
  @Expose({ name: 'id' })
  @Transform((v) => v.obj?.id?.toString())
  id;
}

export class CommonEntity {
  @Expose({ name: '_id' })
  @Transform((v) => v.obj?._id?.toString())
  id;

  @Expose({ name: 'attachments' })
  @Transform((v) =>
    v.obj?.attachments?.map((a) => {
      a._id = a._id.toString();
      return a;
    }),
  )
  attachments;

  @Expose()
  @Type(() => ModifiedUserEntity)
  created_by;

  @Expose()
  @Type(() => ModifiedUserEntity)
  updated_by;

  @Expose()
  @Type(() => ModifiedUserEntity)
  deleted_by;

  @Expose()
  created_at;

  @Expose()
  updated_at;

  @Expose()
  deleted_at;

  @Exclude()
  __v;
}

export class CommonListEntity {
  @Expose({ name: '_id' })
  @Transform((v) => {
    console.log(v.obj);
    if (!v.obj?._id?.grouped_by) {
      return v.obj?._id?.toString();
    }

    return undefined;
  })
  date;

  @Type(() => CommonEntity)
  @Transform(({ value }) => {
    return value;
  })
  data: [CommonEntity];
}

export class GroupedListEntity {
  @Expose({ name: '_id' })
  @Transform((v) => {
    console.log(v.obj);
    if (v.obj?._id?.grouped_by) {
      return v.obj?._id?.grouped_by;
    }

    return undefined;
  })
  grouped_by;

  @Type(() => CommonEntity)
  @Transform(({ value }) => {
    return value;
  })
  data: [CommonEntity];
}
