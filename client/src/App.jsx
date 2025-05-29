import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Landingpage";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Semisignup from "./Pages/Semisignup";

// import "./App.css";



function App() {
  return (
     <Routes>
      {<Route path="/" element={<LandingPage />} />}
      {  <Route path="/signup" element={<Signup />} />}
      {<Route path="/signin" element={<Signin />} />}
      {<Route path="/dashboard" element={<Dashboard />} />}
      {<Route path="/About" element={<About />} />}
      {<Route path="Semisignup" element={<Semisignup />} />}
     
     </Routes>
      
    
  );
}

export default App;