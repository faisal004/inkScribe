import ProfilePublishedCard from "../components/ProfilePublishedCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../config";

const Profile = () => {
  const { username } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchuser = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${BASE_URL}/user/${username}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        console.log(data);
        setDetail(data);
        setLoading(false);
        console.log(detail);
      } catch (error) {
        console.error("error");
      }
    };
    fetchuser();
  }, [username]);

  return (
    <div className="bg-slate-50 min-h-screen pb-8">
      {!loading ? (
        <div className="container mx-auto">
          <div className="bg-slate-50 flex space-x-3  p-4 text-left">
            <div className="pt-1">
            <div className=" inline-flex items-center justify-center w-14 h-14 overflow-hidden bg-orange-500 rounded-full">
                <span className="font-medium text-3xl text-white ">
                {detail.username[0]}
                </span>
              </div>
            </div>

            <h1 className="text-6xl font-bold text-gray-800">
              {detail.username}{" "}
            </h1>
          </div>

          <section className="mt-8 p-4">
            <h2 className="text-4xl font-semibold mb-4">Published</h2>
            {detail.publishedPost.length === 0 ? (
              "Write some Blogs"
            ) : (
              <div className="grid md:grid-cols-3 grid-col-1 gap-4 ">
                {detail.publishedPost.map((post) => (
                  <ProfilePublishedCard
                    _id={post._id}
                    key={post._id}
                    title={post.title}
                    maincontent={post.mainContent.slice(0, 100)}
                    image={post.photos}
                  />
                ))}
              </div>
            )}
          </section>

          <section className="mt-8 p-4">
            <h2 className="text-4xl font-semibold mb-4">Liked</h2>
            {detail.likedPosts.length === 0 ? (
              "Like some Blogs"
            ) : (
              <div className="grid md:grid-cols-3 grid-col-1 gap-4 ">
                {detail.likedPosts.map((post) => (
                  <ProfilePublishedCard
                    _id={post._id}
                    key={post._id}
                    title={post.title}
                    maincontent={post.mainContent.slice(0, 100)}
                    image={post.photos}
                  />
                ))}
              </div>
            )}
          </section>
          <section className="mt-8 p-4">
            <h2 className="text-4xl font-semibold mb-4">Saved</h2>
            {detail.savedPosts.length === 0 ? (
              "Save some Blogs"
            ) : (
              <div className="grid md:grid-cols-3 grid-col-1 gap-4 ">
                {detail.savedPosts.map((post) => (
                  <ProfilePublishedCard
                    _id={post._id}
                    key={post._id}
                    title={post.title}
                    maincontent={post.mainContent.slice(0, 100)}
                    image={post.photos}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Profile;
