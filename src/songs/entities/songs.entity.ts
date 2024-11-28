import { ObjectId } from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Song {
  _id: ObjectId;

  @Prop({ required: true })
  name: string;
}

export const songsSchema = SchemaFactory.createForClass(Song);
