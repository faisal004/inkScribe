import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSetRecoilState, useRecoilValueLoadable } from "recoil";
import {
  signupState,
  signupAPI,
  userState,
} from "../../Recoil/stateManagement";

const Signup = () => {
  const setSignupData = useSetRecoilState(signupState);
  const setUser = useSetRecoilState(userState);
  const signupAPILoadable = useRecoilValueLoadable(signupAPI);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const apiResponse = signupAPILoadable.contents;

    if (signupAPILoadable.state === "hasValue") {
      if (apiResponse.message === "User Exist") {
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
        localStorage.setItem("token", apiResponse.token);
        setUser(true);
        console.log("API Response:", apiResponse);
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
      }
    } else if (signupAPILoadable.state === "loading") {
      console.log("API call in progress...");
    } else if (signupAPILoadable.state === "hasError") {
      console.error("API Error:", signupAPILoadable.contents);
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
