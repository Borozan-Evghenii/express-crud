import { UploadedFile } from "express-fileupload";
import FileService from "./FileService";
import Post from "./Post";
import type { PostType } from "./types";

class PostService {
  async create(post: PostType, picture: UploadedFile) {
    const fileName = FileService.save(picture);
    const createdPost = await Post.create({ ...post, picture: fileName });
    return createdPost;
  }
  async getAll() {
    const posts = await Post.find();
    return posts;
  }
  async getOne(id: string) {
    const post = await Post.findById(id);
    return post;
  }
  async update(id: string, post: PostType) {
    const updatedPost = await Post.findByIdAndUpdate(id, post, {
      new: true,
    });
    return updatedPost;
  }
  async delete(id: string) {
    const deletedPost = await Post.findByIdAndDelete(id);
    return deletedPost;
  }
}

export default new PostService();
