import  { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";

const Home = () => {
  const [articles, setArticles] = useState([]);

 
  const timeAgo = (timestamp) => {
    const currentDate = new Date();
    const pastDate = new Date(timestamp);
    const seconds = Math.floor((currentDate - pastDate) / 1000);
    if (seconds < 60) return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    return `${days} days ago`;
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/PostBlog");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setArticles(data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="pt-2 bg-slate-50">
      <div className="grid  grid-cols-1  ">
        {articles.map((article) => (
          <ArticleCard
          _id={article._id}
            key={article._id}
            writerName={article.creator.username}
            articleTitle={article.title}
            articleImage={article.photos}
            articleContent={article.mainContent}
            readtime={Math.ceil(article.mainContent.split(" ").length / 200)}
            timestamp={timeAgo(article.updatedAt)}
           
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
