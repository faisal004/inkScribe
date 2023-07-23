import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { editorState } from "../../Recoil/stateManagement";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

// Function to compress base64 image
const compressBase64 = (base64String, maxWidth, maxHeight) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = base64String;

    image.onload = () => {
      const canvas = document.createElement("canvas");
      let width = image.width;
      let height = image.height;

      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, width, height);

      const compressedBase64 = canvas.toDataURL("image/jpeg", 0.7);
      resolve(compressedBase64);
    };

    image.onerror = (error) => {
      reject(error);
    };
  });
};

const TextEditor = () => {
  const editor = useRecoilValue(editorState);
  const setEditorState = useSetRecoilState(editorState);

  const handleEditorChange = (value) => {
    setEditorState((prevEditor) => ({ ...prevEditor, mainContent: value }));
  };

  return <ReactQuill value={editor.mainContent} onChange={handleEditorChange} />;
};

const Write = () => {
  const navigate=useNavigate();
  const editor = useRecoilValue(editorState);
  const setEditorState = useSetRecoilState(editorState);
  const [imagePreview, setImagePreview] = useState(null);

  const handleTitleChange = (e) => {
    setEditorState((prevEditor) => ({ ...prevEditor, title: e.target.value }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      return; // No file selected, do nothing
    }

    // Check if the file type is JPEG or SVG
    if (
      !file.type.includes("image/jpeg") &&
      !file.type.includes("image/svg+xml")
    ) {
      alert("Only JPEG and SVG files are allowed.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      try {
        const compressedBase64File = await compressBase64(
          reader.result,
          800, // Max width for compression
          800  // Max height for compression
        );

        setEditorState((prevEditor) => ({ ...prevEditor, photos: compressedBase64File }));
        setImagePreview(compressedBase64File); // Set the compressed image preview
      } catch (error) {
        console.error("Error compressing image:", error);
        alert("An error occurred while compressing the image.");
      }
    };
    reader.readAsDataURL(file);
  };

  const handlePublish = async () => {
    if (
      editor.title.trim() === "" ||
      editor.mainContent.trim() === "" ||
      !editor.photos
    ) {
      alert("Title, content, and file cannot be empty.");
      return;
    }

    try {
      const postData = {
        title: editor.title,
        mainContent: editor.mainContent,
        photos: editor.photos,
      };
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3000/user/PostBlog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });

      const data = await response.json();
      console.log("API response:", data);
     

      // Clear the editor state after successful post
      setEditorState((prevEditor) => ({
        ...prevEditor,
        title: "",
        mainContent: "",
        photos: null,
      }));
      setImagePreview(null);

      toast.success("Blog created successfully", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setTimeout(() => {
          navigate("/Home")
          
        }, 1000);
       
      
    } catch (error) {
      // Handle any errors from the API call
      console.error("Error publishing blog post:", error);
      alert("An error occurred while publishing the blog post.");
    }
  };

  return (
    <div className="flex flex-col md:p-10 p-2 w-full space-y-3 bg-white h-screen">
      <div className="border-2 border-black">
        <input
          id="title"
          className="w-full p-2"
          type="text"
          placeholder="Enter title of your blog"
          value={editor.title}
          onChange={handleTitleChange}
          required
        />
      </div>
      <div className="border-2 border-black">
        <input
          id="photo"
          className="w-full p-2"
          type="file"
          onChange={handleFileChange}
        />
      </div>
      {imagePreview && (
        <div className="">
          <img
            src={imagePreview}
            alt="Preview"
            style={{ maxWidth: "40%", maxHeight: "100%" }}
          />
        </div>
      )}
      <div className="border-2 border-black">
        <TextEditor />
      </div>
      <div>
        <button
          className="bg-black text-white rounded-lg px-3 py-1"
          onClick={handlePublish}
        >
          Publish
        </button>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Write;
