"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PostController_1 = __importDefault(require("./PostController"));
const router = (0, express_1.default)();
router.post("/posts", PostController_1.default.create);
router.get("/posts", PostController_1.default.getAll);
router.get("/posts/:id", PostController_1.default.getOne);
router.put("/posts", PostController_1.default.update);
router.delete("/posts/:id", PostController_1.default.delete);
exports.default = router;
