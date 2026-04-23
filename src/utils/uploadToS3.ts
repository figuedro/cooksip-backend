import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "../config/s3";
import { randomUUID } from "crypto";
import path from "path";

export const uploadToS3 = async (file: Express.Multer.File): Promise<string> => {
  const ext = path.extname(file.originalname);
  const key = `recipes/${randomUUID()}${ext}`;

  await s3.send(
    new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME!,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    })
  );

  return `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
};
