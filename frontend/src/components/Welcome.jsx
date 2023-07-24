import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../Recoil/stateManagement";

const Welcome = () => {
  const navigate=useNavigate();
  const [user] = useRecoilState(userState);
  return (
    <>
      <div className="bg-yellow-500 flex flex-col p-3 border-b-2 border-black ">
        <div className="container mx-auto">
          <div className="md:text-8xl text-7xl font-serif p-3 mt-10 -">
            Stay curious.
          </div>
          <div className="p-3 md:text-3xl text-2xl">
            Discover stories, thinking, and expertise <br /> from writers on any
            topic.
          </div>
          {user?(   <button onClick={()=>
          navigate("/Home")} className="bg-black text-white rounded-full md:w-1/6 w-1/2 px-3 py-2 mt-4 mb-14">
            Read
          </button>):(   <button onClick={()=>
          navigate("/Login")} className="bg-black text-white rounded-full md:w-1/6 w-1/2 px-3 py-2 mt-4 mb-14">
            Get started
          </button>)}
       
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="col-span-2 border-b-2 border-black bg-slate-50 text-center md:text-7xl sm:text-5xl text-3xl px-10 py-20 font-mono">
          Just <span className="font-extrabold">InkSribe</span> your Idea.
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-rows-1">
        <div className="bg-slate-50 p-10 border-b-2 border-black md:border-r-2 font-serif ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          expedita laboriosam autem quidem eligendi sint minima iusto nam sunt
          repellat, eius odio saepe consectetur pariatur, est quos. Aut numquam
          voluptatibus dolor dignissimos voluptates, ipsam consequatur odio quam
          consequuntur! Quae, numquam?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          expedita laboriosam autem quidem eligendi sint minima iusto nam sunt
          repellat, eius odio saepe consectetur pariatur, est quos. Aut numquam
          voluptatibus dolor dignissimos voluptates, ipsam consequatur odio quam
          consequuntur! Quae, numquam?
        </div>
        <div className="bg-slate-50 p-10 border-b-2 border-black md:border-r-2 font-serif">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, cum
          quidem expedita deserunt voluptates voluptatum minima labore quae
          voluptatem quam. Sed ex tenetur iusto ea, laborum natus consequatur
          esse error sunt debitis minima maxime dolores velit impedit
          perferendis deserunt perspiciatis at veritatis nulla? Corporis,
          blanditiis quibusdam voluptas dolorum incidunt sapiente quod eos!
          Sequi dignissimos delectus nobis distinctio asperiores obcaecati
          libero explicabo, cum eum mollitia atque et laborum qui nam! Fugit
          libero debitis reiciendis corporis nulla sed rem error impedit ex.
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="col-span-2 border-b-2 border-black bg-black text-white text-center md:text-7xl sm:text-5xl text-3xl px-10 py-20 font-mono">
          Create the space for your thinking to take off.
          <div className="md:text-lg text-sm p-10">
            {" "}
            A blank page is also a door. At InkScribe you can walk through it. It&apos;s
            easy and free to share your thinking on any topic, connect with an
            audience, express yourself with a range of publishing tools, and
            even earn money for your work.
          </div>
      
        </div>
        
      </div>
    </>
  );
};

export default Welcome;
