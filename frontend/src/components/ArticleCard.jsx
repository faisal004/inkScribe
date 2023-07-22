import React from "react";

const ArticleCard = ({
  writerImage,
  writerName,
  articleTitle,
  articleImage,
  articleContent,
  readTime,
}) => {
  return (
    <>
    <div className="md:px-10 md:mx-10 ">
    <div className="bg-slate-50 container mx-auto border-b-2 border-slate-200 ">
      <div className="flex flex-row space-x-3">
        <img className="rounded-full h-12 w-12 p-2" src={writerImage} alt="" />
        <div className="flex flex-row space-x-5 pt-3 ">
          <div> {writerName}</div>

          <div> PublishedOn </div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col w-2/3">
          <div className="md:text-2xl text-lg font-semibold p-2 w-5/6">{articleTitle.slice(0,50)}</div>
          <div className="hidden md:block p-2">{articleContent.slice(0,100)}</div>
        </div>
        <div className="w-1/6 h-1/6 m-4 ">
          <img className="w-5/6 h-5/6" src={articleImage} alt="" />
        </div>
      </div>
      <div className="flex flex-row space-x-3">
       
        <div className="flex flex-row space-x-5 pb-3  ">
          <div> {writerName}</div>

          <div> PublishedOn </div>
        </div>
      </div>
    </div>
    </div>
    
    </>
    
  );
};

export default ArticleCard;
