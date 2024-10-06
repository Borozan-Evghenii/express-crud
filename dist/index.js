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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
dotenv_1.default.config();
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = __importDefault(require("./router"));
const PORT = 6000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static("static")); // acces to static files from folder static
app.use((0, express_fileupload_1.default)({}));
app.use("/api", router_1.default);
// app.use("/user", userRouter);
// app.use("/projects", ProjectsRouter);
const appInit = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(process.env.MONGOOSE_DB_CONNECT_URL);
        app.listen(PORT, () => console.log("express app started at port " + PORT));
    }
    catch (error) {
        console.log(error);
    }
});
appInit();
