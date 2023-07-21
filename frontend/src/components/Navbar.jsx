import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
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
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center justify-between ">
          <div className="text-black text-4xl font-extrabold">
            <Link to={"/"}>InkScribe</Link>
          </div>
        </div>
        <div className={` `}>
          <div className="space-x-10 justify-center ">
            <button
              onClick={() => {
                navigate("/Login");
              }}
              className="bg-black text-white rounded-full py-1 px-2"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
