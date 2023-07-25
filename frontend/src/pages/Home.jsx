import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import Trending from "../components/Trending";
import { BASE_URL } from "../../config";
const Home = () => {
  const [articles, setArticles] = useState([]);
  const [trendingarticles, setTrendingArticles] = useState([]);
  const [loading, setisLoading] = useState(true);

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
        const response = await fetch(`${BASE_URL}/PostBlog`);

        const data = await response.json();
        setArticles(data.posts);
        setisLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    const fetchTrendingPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/PostBlog/Trending`);

        const data = await response.json();
        setTrendingArticles(data.topThreePosts);
        setisLoading(false);
        console.log(data.topThreePosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
    fetchTrendingPosts();
  }, []);

  return (
    <div className="pt-2 bg-slate-50 ">
      <div className="container mx-auto my-3 ">
        <div className="mx-24 font-bold  text-2xl mb-3">TRENDING</div>
        {!loading?(<div className="mx-24 grid  md:grid-cols-3 grid-cols-1 gap-4">
          {trendingarticles.map((ta) => (
            <Trending
            _id={ta._id}
              key={ta._id}
              photoSrc={ta.photos}
              text={ta.title}
              maintext={ta.mainContent}
            />
          ))}
        </div>):(  "Loading")}
        
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
    </div>
  );
};

export default Home;
