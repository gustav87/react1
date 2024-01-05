export type CloudFile = {
  name: string;
  size: number;
  lastModified: Date;
}

export type UploadFileRequest = {
  name: string;
  content: string;
}
