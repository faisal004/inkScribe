import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSetRecoilState} from "recoil";
import {
  
  userState,
} from "../../Recoil/stateManagement";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../../config";

const Signup = () => {
  const navigate = useNavigate();

  const setUser = useSetRecoilState(userState);


  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/user/Signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.message === "User Exist") {
          toast.warn("User Exists", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          localStorage.setItem("token", data.token);
          setUser({
            isLoggedIn: true,
            username: data.username,
          });
          toast.success("Success", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            navigate("/Home");
          }, 1000);
        }
      } else {
        console.error("API Error:", data.error);
      }
    } catch (err) {
      console.error("API Error:", err);
    }
  };

  return (
    <div className="bg-slate-50 p-10 h-screen  ">
      <div className="container mx-auto text-center justify-center items-center space-y-4  md:w-1/2 w-full bg-white rounded-2xl">
        <div className="text-3xl p-3 font-semibold">SIGNUP </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <TextField
              id="username"
              label="Username"
              name="username"
              onChange={handleChange}
              variant="outlined"
              required
            />
          </div>
          <div>
            <TextField
              id="email"
              label="email"
              name="email"
              onChange={handleChange}
              variant="outlined"
              required
            />
          </div>{" "}
          <div>
            <TextField
              id="password"
              label="password"
              name="password"
              type="password"
              onChange={handleChange}
              variant="outlined"
              required
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="bg-black text-white px-10 py-2 rounded-lg mb-1"
            >
              Signup
            </button>
          </div>
        </form>

        <div className="p-4">
          Already have a account?
          <Link className="text-blue-400" to={"/Login"}>
            Login
          </Link>{" "}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
