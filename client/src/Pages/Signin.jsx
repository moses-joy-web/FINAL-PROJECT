import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import joy from "../assets/pic7.png";
import axios from "axios";

const Signin = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

      if (!mail || !password) {
          setMessage("Please fill all the fields");
          setMessageType("error");
          setTimeout(() => setMessage(""), 2000);
          return;
      }
    
      const allData = { mail, password, };
      const url = "https://final-project-8-f5nr.onrender.com/signin";
      // const url = "http://localhost:5000/signin";  
    
      try {
          const res = await axios.post(url, allData);
          if (res.status === 200 || res.status === 201) {
              setMessage("User Signed In Successfully");
              setMessageType("success");
              setTimeout(() => navigate("/dashboard"), 2000);
          }
        } catch (error) {
          if (error.response && error.response.status === 404) {
              setMessage("User not found");
              setMessageType("error");
          } else if (error.response && error.response.status === 401) {
              setMessage("Invalid password");
              setMessageType("error");
              setMessage(error.response.data.error);
          } 
          setMessageType("error");
      }
    
  };

  return (
    <>
      <Navbar />

      <div className="col-md-12 col-12 text-center mb-3">
        <div
          style={{
            position: "relative",
            height: "100vh",
            width: "100vw",
            overflow: "hidden",
          }}
        >
          <img
            src={joy}
            alt="Example"
            className="img-fluid"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "blur(8px)", // Add blur effect
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", 
              zIndex: 1, 
            }}
          ></div>
          <div
            className="text"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              padding: "10px",
              borderRadius: "5px",
              zIndex: 2, 
            }}
          >
            <p className="justify-content-center  align-items-center mb-0">
              <div
                className="d-flex align-items-center justify-content-center vh-100"
                style={{ backgroundColor: "transparent" }}
              >
                <div
                  className="card shadow-lg p-4"
                  style={{
                    maxWidth: "400px",
                    width: "100%",
                    backgroundColor: "transparent",
                    border: "solid 1px #fff",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <div className="text-center mb-4">
                    <h1
                      className="text-success fw-bold"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <span className="text-light text-size-10">
                        WELCOME BACK
                      </span>
                      {message && (
  <p
    className={`alert mt-3 text-center ${
      messageType === "success" ? "alert-success" : "alert-danger"
    }`}
  >
    {message}
  </p>
)}
                    </h1>
                    <div style={{ marginBottom: "1rem" }}></div>
                    <p className="text-light g-4" style={{ color: "#b8702e" }}>Sign in</p>
                  </div>

                  <form method="POST" action={Signin} style={{ textAlign: "left" }}>
                    

                     <div className="mb-3">
                      <label
                        htmlFor="email"
                        className="form-label"
                        style={{ color: "#f8f9fa" }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="mail"
                        className="form-control bg-light"
                        placeholder="Enter your email"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        style={{ color: "black" }}
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="password"
                        className="form-label"
                        style={{ color: "#f8f9fa" }}
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="form-control bg-light"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ color: "black" }}
                      />
                    </div>

                    <div className="text-start mb-3">
                      <a
                        href="/forgot-password"
                        className="text-light text-decoration-none"
                      >
                        Forgot Password?
                      </a>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn w-100" style={{ padding: "10px 20px", borderRadius: "20px", backgroundColor: "#b8702e", color: "#fff" }}>
                      Sign In
                    </button>
                  </form>

                  

                  <p className="text-light mt-4" style={{ fontSize: "0.9rem" }}>
                    Don’t have an account yet? <a href="/signup" className="text- text-decoration-none" style={{color:"#b8702e"}}>Sign Up</a>
                  </p>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
