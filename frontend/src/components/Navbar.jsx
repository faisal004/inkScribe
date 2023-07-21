import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollBgColor, setScrollBgColor] = useState("bg-yellow-500");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;

      if (position > 100) {
        setScrollBgColor("bg-slate-50");
      } else {
        setScrollBgColor("bg-yellow-500");
      }

      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`p-4 border-b-2 border-black sticky top-0 ${scrollBgColor} transition-colors duration-300`}
    >
      <div className="container mx-auto md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <div className="text-black text-4xl font-extrabold"><Link to={"/"}>
          InkScribe
          </Link></div>
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 6.293a1 1 0 011.414 0L12 11.586l6.293-6.293a1 1 0 111.414 1.414L13.414 13l6.293 6.293a1 1 0 11-1.414 1.414L12 14.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 13 4.293 6.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`md:flex ${isMenuOpen ? "block" : "hidden"} mt-4 md:mt-0 `}
        >
          <div className="space-x-10 flex md:flex-row flex-col justify-center ">
            <button onClick={()=>{
              navigate("/")
            }} className="">Home</button>

            <button onClick={()=>{
              navigate("/Login")
            }} className="bg-black text-white rounded-full py-1 px-2">
              Get started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
