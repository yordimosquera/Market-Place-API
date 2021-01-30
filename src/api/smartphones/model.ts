import { Document, Model, model } from "mongoose";
import { Interface } from "./interface";
import { SmartphoneSchema } from "./schema";

export interface SmartphoneModel extends Interface, Document {}

export const Smartphone: Model<SmartphoneModel> = model<SmartphoneModel>(
  "smartphones",
  SmartphoneSchema
);
