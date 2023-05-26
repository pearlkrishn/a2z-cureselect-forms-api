import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ _id: false })
export class ModifiedByUserModel {
  @Prop({ type: String })
  id;
}

export const ModifiedByUserSchema =
  SchemaFactory.createForClass(ModifiedByUserModel);

export class CommonModel {
  @Prop({ type: Date })
  deleted_at;

  @Prop({
    type: Boolean,
    default: true,
  })
  is_active;

  @Prop({ type: ModifiedByUserSchema })
  created_by;

  @Prop({ type: ModifiedByUserSchema })
  updated_by;

  @Prop({ type: ModifiedByUserSchema })
  deleted_by;
}
