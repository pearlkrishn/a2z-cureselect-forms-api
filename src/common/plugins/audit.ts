import mongoose from 'mongoose';
import { ModifiedByUserSchema } from '../model';
import { Prop } from '@nestjs/mongoose';

export class AuditLog {
  @Prop({
    type: String,
  })
  collection_name;

  @Prop({
    type: String,
  })
  collection_id;

  @Prop({
    type: String,
  })
  method;

  @Prop({
    type: mongoose.Schema.Types.Mixed,
  })
  before;

  @Prop({
    type: mongoose.Schema.Types.Mixed,
  })
  after;

  @Prop({
    type: ModifiedByUserSchema,
  })
  user;
}
export function AuditLogPlugin(schema, options) {
  schema.pre(['save', 'updateOne', 'findOneAndUpdate'], async function (next) {
    let beforeData: any = {},
      afterData = {};
    const op = this?.op;
    if (op === 'updateOne' || op === 'findOneAndUpdate') {
      this.isNew = false;
      beforeData = await this.model.findOne(this.getQuery());
    } else {
      this.isNew = true;
      beforeData = {};
      afterData = this?.$isNew ? this?._doc : {};
    }

    let method = '';
    let user = {};
    if (this.isNew) {
      method = 'CREATE';
      user = this.created_by;
    } else if (
      (op === 'updateOne' || op === 'findOneAndUpdate') &&
      this?._update?.updated_by &&
      !this?._update?.deleted_at
    ) {
      user = this?._update?.updated_by;
      method = 'UPDATE';
    } else if (
      (op === 'updateOne' || op === 'findOneAndUpdate') &&
      this?._update?.$set?.updated_by &&
      !this?._update?.$set.deleted_at
    ) {
      user = this?._update?.$set?.updated_by;
      method = 'UPDATE';
    } else if (this?._update?.deleted_by) {
      user = this?._update?.deleted_by;
      method = 'SOFT_DELETE';
    } else if (this?._update?.$set?.deleted_by) {
      user = this?._update?.$set?.deleted_by;
      method = 'SOFT_DELETE';
    }

    this.$locals = {
      collection_id: this?.isNew ? this?._id : beforeData?._id,
      collection_name: schema.get('collection'),
      after: afterData,
      before: beforeData,
      method,
      user,
    };
    next();
  });
  schema.post(['save', 'updateOne', 'findOneAndUpdate'], async function (doc) {
    const data = this.$locals;
    if (this?.op === 'updateOne' || this?.op === 'findOneAndUpdate') {
      const afterData = await this.model
        .findOne({ _id: data?.collection_id })
        .lean();
      data['after'] = { ...afterData };
    }
    if (options.model) {
      await new options.model(data).save();
    }
  });
}
