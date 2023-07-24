import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../config";
const Profile = () => {
  const { username } = useParams();
  const [detail, setDetail] = useState({});
  const [loading,setLoading]=useState(true);
  useEffect(() => {
    const fetchuser = async () => {
      try {
        const response = await fetch(`${BASE_URL}/user/${username}`);
        const data = await response.json();
        console.log(data);
        setDetail(data);
        setLoading(false)
        console.log(detail);
      } catch (error) {
        console.error("error");
      }
    };
    fetchuser();
  }, [username]);

  return (
    <div className="bg-slate-50 min-h-screen pb-8">
      {!loading?(<div className="container mx-auto">
        <div className="bg-slate-50  p-4 text-left">
          
          <h1 className="text-2xl font-bold text-gray-800">
            {detail.username}{" "}
          </h1>
        </div>

        <section className="mt-8 p-4">
          <h2 className="text-lg font-semibold mb-4">Published</h2>
          <div>{detail.publishedPost}</div>
        </section>

        <section className="mt-8 p-4">
          <h2 className="text-lg font-semibold mb-4">Saved</h2>
          {/* Add your content for Saved section here */}
        </section>

        <section className="mt-8 p-4">
          <h2 className="text-lg font-semibold mb-4">Liked</h2>
          {/* Add your content for Liked section here */}
        </section>
      </div>):"Loading"}
      
    </div>
  );
};

export default Profile;
