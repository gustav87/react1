import { CloudFile } from '@/models/cloudStorage';
import { useState, useEffect } from 'react';

const backend_url = import.meta.env.VITE_BACKEND_URL;

function S3() {
  const [files, setFiles] = useState([] as CloudFile[]);
  const [fileToUpload, setFileToUpload] = useState<File | undefined>(undefined);

  useEffect(() => {
    listS3Files();
  }, [])

  return <>
    <div className="flex justify-around w-2/4">
      <p className="cursor-pointer" onClick={sendTestS3}>Test S3</p>
      <p className="cursor-pointer" onClick={() => uploadToS3ViaFileName("2023-09-02_11-43.png")}>Upload to S3</p>
      <p className="cursor-pointer" onClick={() => downloadFromS3("2023-10-07_23-13.png")}>Download from S3</p>
    </div>
    <div className="mt-6 flex justify-around w-2/4">
      <div>
        <div>
          <input type="file" onChange={(e) => setFileToUpload(e.target.files?.[0])}/>
        </div>
        <button className="text-red-500 border p-2 mt-2" onClick={uploadToS3}>Upload File</button>
      </div>
      <div>
        <div className="text-blue-500">The following files are available on S3. Click to download.</div>
        <div>
          {files.map((file) => {
            return <div className="cursor-pointer" onClick={() => downloadFromS3(file.name)} key={file.name}>{file.name}</div>
          })}
        </div>
      </div>
    </div>
  </>

  async function sendTestS3() {
    const url = `${backend_url}/api/s3/test`;
    try {
      const res = await fetch(url);
      const json = await res.json();
      console.log(json);
    } catch (e: unknown) {
      console.error(e);
    }
  }

  async function listS3Files() {
    const url = `${backend_url}/api/s3`;
    try {
      const res = await fetch(url);
      const files: CloudFile[] = await res.json();
      console.log(files);
      setFiles(files)
    } catch (e: unknown) {
      console.error(e);
    }
  }

  async function uploadToS3ViaFileName(fileName: string) {
    const url = `${backend_url}/api/s3/upload/name`;
    const data = { filePath: `/home/guan/Downloads/${fileName}`}
    console.log(JSON.stringify(data));
    
    try {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      });
      console.log(res);
    } catch (e: unknown) {
      console.error(e);
    }
  }

  async function uploadToS3() {
    const url = `${backend_url}/api/s3/upload`;
    if (!fileToUpload) return;

    try {
      var reader = new FileReader();
      reader.readAsDataURL(fileToUpload);

      // here we tell the reader what to do when it's done reading
      reader.onload = async (readerEvent) => {
         var content = readerEvent?.target?.result as string;
         const base64content = content?.split("base64,")[1];
         const data = {name: fileToUpload.name, content: base64content};

         await fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
      }
    } catch (e: unknown) {
      console.error(e);
    }
  }

  async function downloadFromS3(fileName: string) {
    const url = `${backend_url}/api/s3/download/${fileName}`;
    try {
      window.open(url);
    } catch (e: unknown) {
      console.error(e);
    }
  }
}

export default S3;
