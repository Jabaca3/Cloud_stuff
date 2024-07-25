import { Storage } from "@google-cloud/storage";
import fs from "fs";
import ffmpeg from "fluent-ffmpeg";

const storage = new Storage();

const rawVideoBucketName = "jb-v.1-raw-videos";
const processedVideoBucketName = "jb-v.1-processed-videos";

const localRawVideoPath = "./raw-videos";
const localProcessedVideoPath = "./procssed-videos";

export function setupDirectories() {}

export function convertVideo(rawVideoName: string, processedVideoName: string) {
  return new Promise<void>((resolve, reject) => {
    ffmpeg(`${localRawVideoPath}/${rawVideoName}`)
      .outputOptions("-vf", "scale=-1:360")
      .on("end", () => {
        console.log("Process completed successfully ");
        resolve();
      })
      .on("error", (err) => {
        console.log(`An error occured: ${err} `);
        reject(err);
      })
      .save(`${localProcessedVideoPath}/${processedVideoName}`);
  });
}

export async function downloadRawVideo(fileName: string) {
  storage
    .bucket(rawVideoBucketName)
    .file(fileName)
    .download({ destination: `${localRawVideoPath}/${fileName}` });
  console.log(
    `gs://${rawVideoBucketName}/${fileName} downloaded to ${localRawVideoPath}/${fileName}`
  );
}

export async function uploadProcessedVideo(fineName: string) {
  const bucket = storage.bucket(processedVideoBucketName);
}
