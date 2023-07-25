import { Link } from "react-router-dom";
const ProfilePublishedCard = ({ title, maincontent, image,_id }) => {
  return (
    <>
    <Link to={`/Blog/${_id}`}>
    <div className="max-w-sm bg-slate-50 border border-gray-200 rounded-lg shadow  ">
      <img className="rounded-t-lg" src={image} alt="" />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
          {title}
        </h5>

        <p
          className="mb-3 font-normal text-black "
          dangerouslySetInnerHTML={{ __html: maincontent.slice(0, 500) }}
        />
      </div>
    </div>

    </Link>
    
    </>
   
  );
};

export default ProfilePublishedCard;
