// Carga de documentos
import express, { Request, Response } from "express";
import {processFileMiddleware} from "../middleware/upload";
import { format } from "util";
import { Storage } from "@google-cloud/storage";

const GOOGLE_CLOUD_PROJECT = 'sanguine-medley-348013';
const GOOGLE_CLOUD_BUCKET = 'semillero-sas';

const storage = new Storage({
    projectId: GOOGLE_CLOUD_PROJECT,
    keyFilename: 'key.json'
});
const bucket = storage.bucket(GOOGLE_CLOUD_BUCKET);

export const upload = async (req: Request, res: Response) => {
  try {
    await processFileMiddleware(req, res);

    if (!req.file) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    const blob = bucket.file(req.file.originalname);
    const blobStream = blob.createWriteStream({
      resumable: false,
    });

    blobStream.on("error", (err) => {
      res.status(500).send({ message: err.message });
    });

    blobStream.on("finish", async (data: any) => {
      const publicUrl = format(
        `https://storage.googleapis.com/${bucket.name}/${blob.name}`
      );

      try {
        await bucket.file(req.file.originalname).makePublic();
      } catch {
        return res.status(500).send({
          message:
            `Uploaded the file successfully: ${req.file.originalname}, but public access is denied!`,
          url: publicUrl,
        });
      }
      return publicUrl
     /*  res.status(200).send({
        message: "Uploaded the file successfully: " + req.file.originalname,
        url: publicUrl,
      }); */
    });

    blobStream.end(req.file.buffer);
  } catch (err) {
    console.log(err);

    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size cannot be larger than 2MB!",
      });
    }

    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};

export const getListFiles = async (req: Request, res: Response) => {
  try {
    const [files] = await bucket.getFiles();
    let fileInfos: { name: string; url: any; }[] = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file.name,
        url: file.metadata.mediaLink,
      });
    });

    res.status(200).send(fileInfos);
  } catch (err) {
    console.log(err);

    res.status(500).send({
      message: "Unable to read list of files!",
    });
  }
};

export const download = async (req: Request, res: Response) => {
  try {
    const [metaData] = await bucket.file(req.params.name).getMetadata();
    res.redirect(metaData.mediaLink);
    
  } catch (err) {
    res.status(500).send({
      message: "Could not download the file. " + err,
    });
  }
};
