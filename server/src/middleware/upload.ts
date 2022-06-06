import multer from "multer";
import util from "util"

const maxSizeFileSize = 1024 * 1024 * 5;

let process = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: maxSizeFileSize }
}).single("file");

export const processFileMiddleware = util.promisify(process);