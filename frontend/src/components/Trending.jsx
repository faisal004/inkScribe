import { Link } from "react-router-dom";
const Trending = ({_id, photoSrc, text, maintext }) => {
  return (
  <>
    <Link to={`Blog/${_id}`}>
        <div className="bg-white rounded-lg shadow-md  p-4 flex">
          <div className="flex-none mr-4">
            <img src={photoSrc} alt="Card" className="w-16 h-16 rounded-full" />
          </div>

          <div className="flex-grow ">
            <p className="text-lg font-semibold mb-2">{text.slice(0, 20)}..</p>

            <p
              className="text-gray-600 hidden md:block"
              dangerouslySetInnerHTML={{
                __html: maintext.slice(0, 50),
              }}
            />
          </div>
        </div>
      </Link>
  </>
    
    
  );
};

export default Trending;
