import { useEffect } from "react";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSetRecoilState, useRecoilValueLoadable } from "recoil";
import { loginState, loginAPI,userState } from "../../Recoil/stateManagement";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const setLoginData = useSetRecoilState(loginState);
  const setUser=useSetRecoilState(userState);
  const loginAPILoadable = useRecoilValueLoadable(loginAPI);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const apiResponse = loginAPILoadable.contents;

    if (loginAPILoadable.state === "hasValue") {
      if(apiResponse.message==="Invalid username or password"){
        toast.error("Invalid username or password", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        console.log("API Response:", apiResponse);

      }else{
        localStorage.setItem("token", apiResponse.token);
        
      setUser(true);
      toast.success("Logged in successfully", {
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
          navigate("/Home")
          
        }, 1000);
       
      console.log("API Response:", apiResponse);

      }
      
    } else if (loginAPILoadable.state === "loading") {
      console.log("API call in progress...");
    } else if (loginAPILoadable.state === "hasError") {
      console.error("API Error:", loginAPILoadable.contents);
    }
  };
  useEffect(() => {
    console.log("useEffect: Checking for token...");
    const authToken = localStorage.getItem("token");
    console.log("Token found:", authToken);
  
    if (authToken) {
      console.log("Setting userState to true...");
      setUser(true);
    }
  }, [setUser]);

  return (
    <div className="bg-slate-50 p-10 h-screen ">
      <div className="container mx-auto text-center justify-center items-center space-y-4  md:w-1/2 w-full bg-white rounded-2xl">
        <div className="text-3xl p-3 font-semibold">LOGIN </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
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
              id="password"
              label="Password"
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
              Login
            </button>
          </div>
        </form>
        <div className="p-4">
          Don&apos;t have an account?
          <Link className="text-blue-400" to={"/Signup"}>
            Signup
          </Link>{" "}
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;
