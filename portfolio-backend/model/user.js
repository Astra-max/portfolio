// models/User.js
import mongoose from "mongoose";

const accessSchema = new mongoose.Schema(
  {
    accesskey: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Astra", accessSchema);
