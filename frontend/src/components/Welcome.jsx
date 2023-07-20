const Welcome = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="col-span-2 border-b-2 border-black bg-slate-50 text-center md:text-7xl sm:text-5xl text-3xl px-10 py-20 font-mono">
          Just <span className="font-extrabold">InkSribe</span> your Idea.
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-rows-2">
        <div className="bg-slate-50 p-10 border-b-2 border-black md:border-r-2 font-serif ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          expedita laboriosam autem quidem eligendi sint minima iusto nam sunt
          repellat, eius odio saepe consectetur pariatur, est quos. Aut numquam
          voluptatibus dolor dignissimos voluptates, ipsam consequatur odio quam
          consequuntur! Quae, numquam?

          <br/>
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          expedita laboriosam autem quidem eligendi sint minima iusto nam sunt
          repellat, eius odio saepe consectetur pariatur, est quos. Aut numquam
          voluptatibus dolor dignissimos voluptates, ipsam consequatur odio quam
          consequuntur! Quae, numquam?
        </div>
        <div className="bg-yellow-500 ">03</div>
      </div>
    </>
  );
};

export default Welcome;
