import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Landingpage";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Dashboard from "./Pages/Dashboard";

// import "./App.css";



function App() {
  return (
     <Routes>
      {<Route path="/" element={<LandingPage />} />}
      {  <Route path="/signup" element={<Signup />} />}
      {<Route path="/signin" element={<Signin />} />}
      {<Route path="/dashboard" element={<Dashboard />} />}
     
     </Routes>
      
    
  );
}

export default App;