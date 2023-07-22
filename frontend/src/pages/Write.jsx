import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

const TextEditor = ({ value, onChange }) => {
  return <ReactQuill value={value} onChange={onChange} />;
};

const Write = () => {
  const [editorValue, setEditorValue] = useState("");
  const [titleValue, setTitleValue] = useState("");

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  };

  const handlePublish = () => {
    // Handle the publish action here with the titleValue and editorValue
    console.log("Title:", titleValue);
    console.log("Content:", editorValue);
  };

  return (
    <div className="flex flex-col md:p-10 p-2 w-full space-y-3 bg-slate-50 h-screen">
      <div className="border-2 border-black">
        <input
          className="w-full p-2"
          type="text"
          placeholder="Enter title of your blog"
          value={titleValue}
          onChange={handleTitleChange}
        />
      </div>
      <div className="border-2 border-black">
        <input className="w-full p-2" type="file" placeholder="Upload cover photo" />
      </div>
      <div className="border-2 border-black">
        <TextEditor value={editorValue} onChange={handleEditorChange} />
      </div>
      <div>
        <button className="bg-black text-white rounded-lg px-3 py-1" onClick={handlePublish}>
          Publish
        </button>
      </div>
    </div>
  );
};

export default Write;
