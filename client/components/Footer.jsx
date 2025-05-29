import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className=" text-white py-4" style={{ backgroundColor: '#335424'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
            We help busy people eat healthier with smart, personalized meal planning. Our app makes it easy to track nutrition, plan meals, and stay on top of your health anytime, anywhere.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">Services</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-white text-decoration-none">About</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>Email:  VitalBite@website.com</p>
            <p>Phone: +234 913 226 3103</p>
            <div>
              <a href="#" className="text-white me-3"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} VitalBite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
