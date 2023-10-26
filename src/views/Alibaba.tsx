import { CloudFile } from '@/models/cloudStorage';
import { useState, useEffect } from 'react';

const backend_url = import.meta.env.VITE_BACKEND_URL;

function Alibaba() {
  const [files, setFiles] = useState([] as CloudFile[]);
  const [fileToUpload, setFileToUpload] = useState<File | undefined>(undefined);

  useEffect(() => {
    listAlibabaFiles();
  }, [])

  return <>
    <div className="flex justify-around w-2/4">
    </div>
    <div className="mt-6 flex justify-around w-2/4">
      <div>
        <div>
          <input type="file" onChange={(e) => setFileToUpload(e.target.files?.[0])}/>
        </div>
        <button className="text-red-500 border p-2 mt-2" onClick={uploadToAlibaba}>Upload File</button>
      </div>
      <div>
        <div className="text-blue-500">The following files are available on OSS. Click to download.</div>
        <div>
          {files.map((file) => {
            return <div className="flex" key={file.name}>
              <div className="cursor-pointer mr-2" onClick={() => downloadFromAlibaba(file.name)}>{file.name}</div>
              <button className="fileNamesborder p-1" onClick={() => deleteFileOnAlibaba(file.name)}>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  </>

  async function listAlibabaFiles() {
    const url = `${backend_url}/api/alibaba`;
    try {
      const res = await fetch(url);
      const files: CloudFile[] = await res.json();
      console.log(files);
      setFiles(files)
    } catch (e: unknown) {
      console.error(e);
    }
  }

  async function uploadToAlibaba() {
    const url = `${backend_url}/api/alibaba/upload`;
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

  async function downloadFromAlibaba(fileName: string) {
    const url = `${backend_url}/api/alibaba/download/${fileName}`;
    try {
      window.open(url);
    } catch (e: unknown) {
      console.error(e);
    }
  }

  async function deleteFileOnAlibaba(fileName: string) {
    const url = `${backend_url}/api/alibaba/${fileName}`;
    try {
      await fetch(url, {
        method: 'DELETE',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    } catch (e: unknown) {
      console.error(e);
    } 
  }
}

export default Alibaba;
