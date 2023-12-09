import { useRef, useState, useEffect } from "react";
import "./App.css";
import WaterFallImg from "./Img/WaterFall.jpg";
// import { uploadFile } from "./services/api.js";

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
        console.log(response);
      }
    }
    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  console.log(file); 

  return (
    <div className="container">
      <img src={WaterFallImg} alt="banner" />
      <div className="wrapper">
        <h1> File Sharing App </h1>
        <h3>Upload and share the Download link.</h3>
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <a href={result} target='_blank' > {result} </a>
      </div>
    </div>
  );
}

export default App;
