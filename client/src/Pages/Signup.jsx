import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import joy from "../assets/pic7.png";
import axios from "axios";



const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");



  const submitForm = (e) => {
    e.preventDefault();

      if (!name || !mail || !password ) {
        setMessage("Please fill all the fields");
        setMessageType("error");
        setTimeout(() => setMessage(""), 2000);
        return;
      }
  
      if (password.length < 6) {
        setMessage("Password must be at least 6 characters long");
        setMessageType("error");
        setTimeout(() => setMessage(""), 2000);
        return;
      }
      
      const allValues = {name, mail, password};
      console.log(allValues);

    const url = "http://localhost:5200/signup"; 
    axios.post(url, allValues)
      .then((res) => {
        console.log(res.data);
        if (res.status === 201 || res.status === 200) {
          setMessage("User Created Successfully");
          setMessageType("success"); 
          setTimeout(() => navigate("/Signin"), 3000); 
        }
      })
      .catch((err) => {
        console.log(err);
        let errorMsg = "An error occurred. Please try again.";
        if (err.response && err.response.data && err.response.data.message) {
          errorMsg = err.response.data.message;
        } else if (err.message) {
          errorMsg = err.message;
        }
        setMessage(errorMsg);
        setMessageType("error"); 
        setTimeout(() => setMessage(""), 3000);
      })


  };

  return (
    <>
      <Navbar />
      
      <div className="container-fluid p-0">
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
                filter: "blur(8px)", 
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
              <p className="justify-content-center align-items-center mb-0">
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
                      padding: "100%", 
                      borderRadius: "10px",
                      height: "auto", 
                      minHeight: "300px", 
                      maxHeight: "80vh", 
                      // overflowY: "auto", 
                    }}
                  >
                    <div className="text-center mb-4">
                      <h1
                        className="text-success fw-bold"
                        style={{ fontSize: "1.5rem" }}
                      >
                        <span className="text-light text-size-10">
                          CREATE ACCOUNT
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
                    </div>

                    <form  method="POST" action={Signup} style={{ textAlign: "left" }}>
                      <div className="mb-3">
                        <label
                          htmlFor="name"
                          className="form-label"
                          style={{ color: "#f8f9fa" }}
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name" 
                          className="form-control bg-light"
                          placeholder="Enter your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          style={{ color: "black" }}
                        />
                      </div>

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


                      <button onClick={submitForm}
                        type="submit"
                        className="btn w-100"
                        style={{
                          padding: "10px 20px",
                          borderRadius: "20px",
                          backgroundColor: "#b8702e", 
                          color: "#fff",
                        }}
                      >
                        Sign Up
                      </button>
                    </form>
                    <p className="text-light mt-2" style={{ fontSize: "0.9rem" }}>
                      Already have an account? <a href="/signin" className="text- text-decoration-none" style={{ color: "#b8702e" }}>Sign In</a>
                    </p>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Signup;
