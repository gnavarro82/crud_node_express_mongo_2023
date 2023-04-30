import { Schema, model } from "mongoose";

const taskShema = new Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      require: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey:false
  }
);

export default model("Task", taskShema)