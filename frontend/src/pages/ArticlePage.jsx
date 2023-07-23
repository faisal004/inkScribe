import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../config";
import {
  AiOutlineHeart,
  AiFillSave,
  AiFillHeart,
  AiOutlineSave,
} from "react-icons/ai";

const ArticlePage = () => {
  const [post, setPost] = useState(null);
  const [heartFilled, setHeartFilled] = useState(false);
  const [saveFilled, setSaveFilled] = useState(false);
  const { PostId } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        const response = await fetch(`${BASE_URL}/PostBlog/` + PostId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        setPost(data.post);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [PostId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const handleHeartClick = () => {
    setHeartFilled((prevState) => !prevState);
  };
  const handleSaveClick = () => {
    setSaveFilled((prevState) => !prevState);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Rest of the component JSX */}
      <header className="py-6 bg-slate-50 text-black text-center">
        <h1 className="text-4xl font-bold">{post.title}</h1>
      </header>

      <main className="py-10 flex flex-col items-center">
        <div className="w-80 h-48  overflow-hidden shadow-lg mb-4">
          <img
            className="object-cover w-full h-full"
            src={post.photos}
            alt="Profile"
          />
        </div>
        <h2 className="text-xl font-medium p-2">{post.creator.username}</h2>
        <p className="text-slate-500 p-2">
          {Math.ceil(post.mainContent.split(" ").length / 200)} min read
        </p>
        <div className="flex flex-row space-x-2 p-2 border-t-2 border-b-2 border-black">
          <div onClick={handleHeartClick}>
            {heartFilled ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
          </div>
          <div onClick={handleSaveClick}>
            {saveFilled?<AiFillSave color="black" />:<AiOutlineSave/>}
            
          </div>
        </div>
      </main>

      <section className="bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: post.mainContent }}
        />
      </section>
    </div>
  );
};

export default ArticlePage;
