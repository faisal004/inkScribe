import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../config";
import {
  AiOutlineHeart,
  AiFillSave,
  AiFillHeart,
  AiOutlineSave,
} from "react-icons/ai";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { fetchPostData, postIdState } from "../../Recoil/stateManagement";

const ArticlePage = () => {
  const [heartFilled, setHeartFilled] = useState("");
  const [saveFilled, setSaveFilled] = useState(false);
  const { PostId } = useParams();

  const [postId, setPostId] = useRecoilState(postIdState);
  useEffect(() => {
    setPostId(PostId);
  }, [PostId, setPostId]);
  const postDataLoadable = useRecoilValueLoadable(fetchPostData);
  const post =
    postDataLoadable.state === "hasValue" ? postDataLoadable.contents : null;
  console.log(post);
  console.log("sfdsd");

  if (!post) {
    return <div>Loading...</div>;
  }

  const handleHeartClick = async () => {
    setHeartFilled((prevState) => !prevState);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${BASE_URL}/PostBlog/${PostId}/UpdateLike`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            liked: !heartFilled,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };
  const handleSaveClick = async () => {
    setSaveFilled((prevState) => !prevState);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${BASE_URL}/PostBlog/${PostId}/UpdateSaves`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            saved: !saveFilled,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
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
        <Link to={`/Home/Profile/${post.creator.username}`}>
          {" "}
          <h2 className="text-xl font-medium p-2 hover:underline">
            {post.creator.username}
          </h2>{" "}
        </Link>
        <p className="text-slate-500 p-2">
          {Math.ceil(post.mainContent.split(" ").length / 200)} min read
        </p>
        <div className="flex flex-row space-x-2 p-2 border-t-2 border-b-2 border-black">
          <div onClick={handleHeartClick}>
            {heartFilled ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
          </div>
          <div onClick={handleSaveClick}>
            {saveFilled ? <AiFillSave color="black" /> : <AiOutlineSave />}
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
