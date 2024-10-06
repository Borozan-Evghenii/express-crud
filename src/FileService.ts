import * as uuid from "uuid";
import * as path from "path";
import { UploadedFile } from "express-fileupload";

class FileService {
  save(file: UploadedFile) {
    try {
      const fileName = uuid.v4() + ".jpg";
      const filePath = path.resolve("./static", fileName);
      file.mv(filePath);
      return fileName;
    } catch (error) {}
  }
}

export default new FileService();
