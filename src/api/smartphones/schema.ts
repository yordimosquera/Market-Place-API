import { Schema } from "mongoose";
import { DEFAULT_HOTEL_IMAGE } from "../../constants";

export const SmartphoneSchema: Schema = new Schema({
  title: { type: String, required: true },
  price: {
    required: true,
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default: DEFAULT_HOTEL_IMAGE,
  },
  company: {
    type: String,
    required: true,
  },
  info: {
    type: String,
  },
  incart: {
    type: Boolean,
  },
});
