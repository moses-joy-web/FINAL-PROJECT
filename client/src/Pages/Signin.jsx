import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import joy from "../assets/pic7.png";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const allValues = { email, password };
    console.log(allValues);

    const url = "http://localhost:5200/signin"; 
    
    try {
      const res = await axios.post(url, allValues);
      console.log(res);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      
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
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Black with 50% opacity
              zIndex: 1, // Ensure it sits above the image
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
              zIndex: 2, // Ensure it sits above the overlay
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
                        id="email"
                        className="form-control bg-light"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ color: "black" }} // Light color for email input
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
                        style={{ color: "black" }} // Light color for password input
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
