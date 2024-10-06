"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PostService_1 = __importDefault(require("./PostService"));
class PostController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const picture = (_a = req.files) === null || _a === void 0 ? void 0 : _a.picture;
                const reqPost = req.body;
                console.log(picture);
                const post = yield PostService_1.default.create(reqPost, picture);
                res.json(post);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield PostService_1.default.getAll();
                res.json(posts);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id) {
                    res.status(400).json({ message: "need id" });
                }
                const post = yield PostService_1.default.getOne(id);
                res.json(post);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = req.body;
                if (!post._id) {
                    res.status(400).json({ message: "need id" });
                }
                const updatedPost = yield PostService_1.default.update(post._id, post);
                res.json(updatedPost);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id) {
                    res.status(400).json({ message: "needed id" });
                }
                const deletedPost = yield PostService_1.default.delete(id);
                res.json(deletedPost);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
exports.default = new PostController();
