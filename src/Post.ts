import mongoose from "mongoose";

const Post = new mongoose.Schema({
  authore: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  picture: { type: String, required: true },
});

export default mongoose.model("Post", Post);
