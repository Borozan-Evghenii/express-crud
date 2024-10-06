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
const FileService_1 = __importDefault(require("./FileService"));
const Post_1 = __importDefault(require("./Post"));
class PostService {
    create(post, picture) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileName = FileService_1.default.save(picture);
            const createdPost = yield Post_1.default.create(Object.assign(Object.assign({}, post), { picture: fileName }));
            return createdPost;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield Post_1.default.find();
            return posts;
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield Post_1.default.findById(id);
            return post;
        });
    }
    update(id, post) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedPost = yield Post_1.default.findByIdAndUpdate(id, post, {
                new: true,
            });
            return updatedPost;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedPost = yield Post_1.default.findByIdAndDelete(id);
            return deletedPost;
        });
    }
}
exports.default = new PostService();
