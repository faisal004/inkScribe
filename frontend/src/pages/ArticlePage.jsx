import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
  const [post, setPost] = useState(null);
  const { PostId } = useParams();
  console.log(PostId)

  useEffect(() => {
    const fetchPost = async () => {
      try {
       
        const token = localStorage.getItem("token");
        console.log(token)
        const response = await fetch('http://localhost:3000/PostBlog/'+PostId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          
        });

        const data = await response.json();
        console.log(data)
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
        <h2 className="text-xl font-medium">{post.creator.username}</h2>
        <p className="text-slate-500">{Math.ceil(post.mainContent.split(" ").length / 200)} min read</p>
      </main>

      <section className="bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto"
        dangerouslySetInnerHTML={{ __html: post.mainContent }}/>
         
      
      </section>
    </div>
  );
};

export default ArticlePage;
