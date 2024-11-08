import express, { Request, Response } from "express";
import { single, multiple } from "../middlewares/upload.middleware";
import { handleUpload } from "../utils/cloudinary";

const router = express.Router();

const generateFileUri = (file: Express.Multer.File): string => {
    const base64 = Buffer.from(file.buffer).toString("base64");
    const uri = `data:${file.mimetype};base64,${base64}`;
    return uri;
};

router.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "OK",
        data: null,
    });
});

router.get("/upload/single", single, async (req: Request, res: Response) => {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    try {
        const file = req.file!;
        const upload = await handleUpload(generateFileUri(file));

        res.status(200).json({
            message: "Upload file successfully",
            data: upload,
        });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/upload/multiple", multiple, async (req, res) => {
    if (!req.files) return res.status(400).json({ message: "No files uploaded" });

    try {
        const files = req.files! as Express.Multer.File[];
        const uploadedFiles: any[] = [];

        for (let index = 0; index < files.length; index++) {
            uploadedFiles.push(await handleUpload(generateFileUri(files[index])));
        }

        res.status(200).json({
            message: "Upload files successfully",
            data: uploadedFiles,
        });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
