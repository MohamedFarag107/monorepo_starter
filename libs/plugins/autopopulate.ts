import autopopulate from 'mongoose-autopopulate';
import { Schema } from 'mongoose';

export const autopopulatePlugin = (schema: Schema) => {
  schema.plugin(autopopulate);
};
