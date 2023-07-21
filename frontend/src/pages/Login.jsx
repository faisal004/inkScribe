import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="bg-slate-50 p-10 h-screen ">
      <div className="container mx-auto text-center justify-center items-center space-y-4  md:w-1/2 w-full bg-white rounded-2xl">
        <div className="text-3xl p-3 font-semibold">LOGIN </div>
        <div>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </div>{" "}
        <div>
          <TextField id="outlined-basic" label="Password" variant="outlined" />
        </div>
        <div className="">
          <button className="bg-black text-white px-10 py-2 rounded-lg mb-1">
            Login
          </button>
        </div>
        <div className="p-4">
          Don&apos;t have a account?
          <Link className="text-blue-400" to={"/Signup"}>
            Signup
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Login;
