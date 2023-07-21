import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Signup from './pages/Signup';
import Login from './pages/Login';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

function App() {


  return (


    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>

     
    </Routes>
     

    </Router>
    
    </>
  )
}

export default App
