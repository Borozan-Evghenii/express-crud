import express from "express";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";

dotenv.config();

import type { Express } from "express";
import mongoose from "mongoose";
import router from "./router";

const PORT = 6000;
const app: Express = express();
app.use(express.json());
app.use(express.static("static")); // acces to static files from folder static
app.use(fileUpload({}));
app.use("/api", router);

// app.use("/user", userRouter);
// app.use("/projects", ProjectsRouter);

const appInit = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_DB_CONNECT_URL as string);
    app.listen(PORT, () => console.log("express app started at port " + PORT));
  } catch (error) {
    console.log(error);
  }
};

appInit();
