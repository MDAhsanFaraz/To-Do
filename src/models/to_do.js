import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    task: { type: String, required: true },
  },
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const To_Do = mongoose.model("To_Do", todoSchema);
export default To_Do;
