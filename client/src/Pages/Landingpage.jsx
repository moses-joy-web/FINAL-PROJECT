import React from "react";
import { GiCurledLeaf } from "react-icons/gi";
import { Container, Card, Button, ListGroup } from 'react-bootstrap';
import "./Landing.css";
import joy from "../assets/pic1.png";
import meal from "../assets/pic2.png";
import pic from "../assets/pic3.png";
import food from "../assets/pic5.png";
import { useNavigate } from "react-router-dom";
import { MdHorizontalRule } from "react-icons/md";
import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#DDE7DC" }}>
      <div className="container-fluid p-0">
        <div className="row g-0" style={{ backgroundColor: "#2F5322" }}>
          <Navbar />
          <div className="col-md-7 d-flex flex-column justify-content-center px-5 py-5 text-white">
            <h1 className="fw-bold display-5">
              Eat <span style={{ color: "#e68c3a" }}>Better</span>,<br />
              Live<span style={{ color: "#e68c3a" }}> Smarter</span>.<br />
            </h1>
            <p className="mt-3" style={{ maxWidth: "450px" }}>
              Your all-in-one meal planner for healthy eating, easier grocery
              shopping, and effortless wellness — tailored for you.
            </p>
            <div className="mt-4">
              <button
                className="btn btn-outline-light me-3"
                onClick={() => navigate("/signin")}
              >
                Log In
              </button>
              <button
                className="btn btn"
                style={{ backgroundColor: "#e68c3a" }}
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div
            className="col-md-3 col-12 my-5 mx-auto"
            style={{ backgroundColor: "#e68c3a", padding: "2em", borderRadius: "20px" }}
          >
            <img src={food} className="img-fluid" alt="Food" />
          </div>
        </div>

        {/* How It Works Section */}
        <div className="text-center container py-5 position-relative">
          <div className="d-flex mx-auto justify-content-between gap-3 align-item-center">
            <div
              className="border-top relative border-secondary w-100"
              style={{ position: "relative", top: "13px" }}
            ></div>
            <div>
              <h4
                className="badge bg p-2"
                style={{ backgroundColor: "#336021" }}
              >
                Simple. Smart. Personalized.
              </h4>
            </div>
            <div
              className="border-top relative border-secondary w-100"
              style={{ position: "relative", top: "13px" }}
            ></div>
          </div>
          <h2 className="mt-3">How It Works</h2>
          <div className="row g-1 justify-content-center mt-4 px-1">
            <div className="col-md-3 mb-3 mt-5  ">
              <img src={pic} className="img-fluid picss mb-2" alt="Step" />
            </div>
            <div className="col-md-3 mb-3">
              <div
                className="#b8702e  pic text-dark h-100"
                style={{ backgroundColor: "#b8702e" }}
              >
                <p className="my-3">
                  <GiCurledLeaf className="text-light" />
                </p>
                <h5 className="text-light">Get Your Meal Plan</h5>
                <p className="text-light">
                  Receive a personalized plan that fits your lifestyle and
                  goals.
                </p>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div
                className="  text-dark h-100"
                style={{ backgroundColor: "#b8702e" }}
              >
                <p className="my-3">
                  <GiCurledLeaf className="text-light" />
                </p>
                <h5 className="text-light">Shop with Ease</h5>
                <p className="text-light">
                  Integrated grocery lists make shopping fast and efficient.
                </p>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div
                className=" pics text-dark h-100"
                style={{ backgroundColor: "#b8702e" }}
              >
                <p className="my-3">
                  <GiCurledLeaf className="text-light" />
                </p>
                <h5 className="text-light">Track & Stay On Course</h5>
                <p className="text-light">
                  Stay consistent with tracking tools that keep you motivated.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="row g-0 align-items-center py-5  px-3 px-md-5">
          <div className="col-md-6 col-12">
            <div
              className="text-white p-4  about rounded"
              style={{ backgroundColor: "#336021" }}
            >
              <h3>About VitalBite</h3>
              <p>
                We make your journey to better eating simple. By combining smart
                meal planning, personalized nutrition, and smart grocery tools,
                VitalBite is a better way to eat.
              </p>
            </div>
          </div>
          <div className="col-md-6 text-center mt-3 mt-md-0">
            <img src={meal} className="img-fluid w-50" alt="About" />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="p-4" style={{ backgroundColor: "#b8702e" }}>
          <div className="container-fluid">
            <div className="row align-items-center px-3">
              <div className="col-md-6 text-center mb-3">
                <div style={{ position: "relative", textAlign: "center" }}>
                  <img
                    src={joy}
                    alt="Example"
                    className="img-fluid"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      maxHeight: "500px",
                    }} 
                  />
                  <div
                    className="bg-dark bg-opacity-50 text"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <p className="justify-content-center align-items-center mb-0">
                      Why Choose Us?
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div
                      className="text-white p-3  rounded h-100"
                      style={{ backgroundColor: "#336021" }}
                    >
                      <center>
                        <p>
                          <GiCurledLeaf style={{ fontSize: "23px" }} />
                        </p>
                        <h6>Get Your Meal Plan</h6>
                        <p>
                          Receive a personalized meal plan based on your
                          lifestyle.
                        </p>
                      </center>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div
                      className="text-white p-3 rounded h-100"
                      style={{ backgroundColor: "#336021" }}
                    >
                      <center>
                        <p>
                          <GiCurledLeaf style={{ fontSize: "23px" }} />
                        </p>
                        <h6>Shop with Ease</h6>
                        <p>
                          Integrated grocery lists make shopping fast and
                          efficient.
                        </p>
                      </center>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div
                      className="text-white p-3 rounded h-100"
                      style={{ backgroundColor: "#336021" }}
                    >
                      <center>
                        <p>
                          <GiCurledLeaf style={{ fontSize: "23px" }} />
                        </p>
                        <h6>Track & Stay On Course</h6>
                        <p>
                          Stay consistent with tracking tools that keep you
                          motivated.
                        </p>
                      </center>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div
                      className="text-white p-3 rounded h-100"
                      style={{ backgroundColor: "#336021" }}
                    >
                      <center>
                        <p>
                          <GiCurledLeaf style={{ fontSize: "23px" }} />
                        </p>
                        <h6>Achieve Your Goals</h6>
                        <p>Reach your health and wellness goals with ease.</p>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">

    <div className="container my-5">
      <div className="row align-items-center rounded-4 p-4" style={{ backgroundColor: '#335424' }}>
        <div className="col-md-6 text-white px-5">
          <button className="btn btn-sm mb-2" style={{ backgroundColor: '#b8702e', color: 'white' }}>Meal Insights</button>
          <h3 className="fw-bold">Eat With <span style={{ color: '#b8702e' }}>Clarity</span></h3>
          <p className="my-3">Access a dynamic dashboard that gives you an overview of your weekly nutrition, progress, and habits — so you're always one step ahead of your goals.</p>
          <ul className="list-unstyled">
            <li className="mb-2">• Daily calorie breakdown</li>
            <li className="mb-2">• Nutrition tracking</li>
            <li>• Trends and insights to keep you informed</li>
          </ul>
          <button className="btn btn-outline-light mt-3">Get started</button>
        </div>
        <div className="col-md-6 text-center">
          <div className="img-wrapper p-2 rounded-4 d-inline-block" style={{ width: '100%', maxWidth: '400px', backgroundColor: '#b8702e', borderTopLeftRadius: '100px' }}>
            <img src={joy} alt="Meal" className="img-fluid rounded-4 w-100" style={{ maxHeight: '300px', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>


    </div>
    <div class="carousel-item">
    <div className="container my-5">
      <div className="row align-items-center rounded-4 p-4" style={{ backgroundColor: '#b8702e' }}>
        <div className="col-md-6 text-white px-5">
          <button className="btn btn-sm mb-2" style={{ backgroundColor: '#335424', color: 'white' }}>Meal Insights</button>
          <h3 className="fw-bold">Eat With <span style={{ color: '#335424' }}>Clarity</span></h3>
          <p className="my-3">Access a dynamic dashboard that gives you an overview of your weekly nutrition, progress, and habits — so you're always one step ahead of your goals.</p>
          <ul className="list-unstyled">
            <li className="mb-2">• Daily calorie breakdown</li>
            <li className="mb-2">• Nutrition tracking</li>
            <li>• Trends and insights to keep you informed</li>
          </ul>
          <button className="btn btn-outline-light mt-3">Get started</button>
        </div>
        <div className="col-md-6 text-center">
          <div className="img-wrapper meall p-2 rounded-4 d-inline-block" style={{ width: '100%', maxWidth: '400px', backgroundColor: '#335424' }}>
            <img src={meal} alt="Meal" className="img-fluid rounded-4 w-100" style={{ maxHeight: '300px', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


      <div className="container">
<div className="d-flex mx-auto justify-content-center gap-3 align-item-center">
            <div>
              <h4
                className="badge bg p-2"
                style={{ backgroundColor: "#336021" }}
              >
                Testimonials
              </h4>
            </div>
          </div>
    </div>


    <Cards />
    <Footer />
    </div>

    
  );
};

export default LandingPage;
