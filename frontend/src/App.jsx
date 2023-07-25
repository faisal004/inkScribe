import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Profile from "./pages/Profile";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../Recoil/stateManagement";
import ArticlePage from "./pages/ArticlePage";

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
             <Route
            path="Home/Blog/:PostId"
            element={
              <PrivateRoute>
                <ArticlePage />
              </PrivateRoute>
            }
          />
                 <Route
            path="Blog/:PostId"
            element={
              <PrivateRoute>
                <ArticlePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/Home/Profile/:username"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
