import { Link } from "react-router-dom";


const ArticleCard = ({
  writerName,
  articleTitle,
  articleImage,
  articleContent,

  readtime,
  timestamp,
  _id, 
}) => {
  return (
    <div className="md:px-10 md:mx-10">
      <Link to={`/Blog/${_id}`}>
        <div className="bg-slate-50 container mx-auto border-b-2 mt-3 border-slate-200">
          <div className="flex flex-row space-x-3">
            <div className="flex flex-row space-x-2 pt-3 px-2">
              <div className=" inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-orange-500 rounded-full">
                <span className="font-medium text-xs text-white ">
                  {writerName[0]}
                </span>
              </div>
              <div>{writerName}</div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col w-2/3">
              <div className="md:text-2xl text-lg font-semibold p-2 w-5/6">
                {articleTitle.slice(0, 50)}
              </div>
              <div
                className="hidden md:block p-2"
                dangerouslySetInnerHTML={{
                  __html: articleContent.slice(0, 500),
                }}
              />
            </div>
            <div className="md:w-80 md:h-48 h-24 w-40 pr-2  overflow-hidden shadow-lg mb-4">
              <img
                className="object-cover w-full h-full"
                src={articleImage}
                alt="Profile"
              />
            </div>
          </div>
          <div className="flex flex-row space-x-3">
            <div className="flex flex-row space-x-5 pb-3 px-2">
              <div>Read time: {readtime} min read</div>
              <div>{timestamp}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
