import Post from "./Post";
import type { Response, Request } from "express";
import PostService from "./PostService";
import { UploadedFile } from "express-fileupload";

class PostController {
  async create(req: Request, res: Response) {
    try {
      const picture = req.files?.picture as UploadedFile;
      const reqPost = req.body;
      console.log(picture);

      const post = await PostService.create(reqPost, picture);
      res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      const posts = await PostService.getAll();
      res.json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "need id" });
      }
      const post = await PostService.getOne(id);
      res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async update(req: Request, res: Response) {
    try {
      const post = req.body;

      if (!post._id) {
        res.status(400).json({ message: "need id" });
      }
      const updatedPost = await PostService.update(post._id, post);
      res.json(updatedPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "needed id" });
      }
      const deletedPost = await PostService.delete(id);
      res.json(deletedPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new PostController();
