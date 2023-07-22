import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Write from "./pages/Write";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../Recoil/stateManagement";

function App() {
  const user = useRecoilValue(userState);

  const PrivateRoute = ({ children }) => {
    return user ? children : <Navigate to="/" />;
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
         
          <Route
            path="/Home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
             <Route
            path="/Write"
            element={
              <PrivateRoute>
                <Write />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
