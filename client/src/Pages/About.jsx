import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import meal from "../assets/pic2.png";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import person1 from "../assets/person 1.webp";
import person2 from "../assets/person 2.webp";
import person4 from "../assets/person 4.webp";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// import "./App.css";

const App = () => {
  return (
    <div className="bg-custom">
      <Navbar />
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="bg-success text-white p-4 rounded" style={{background:'#336021'}}>
              <h4 className="text-white">About <strong>VitalBite</strong></h4>
              <h5 className="fw-bold">Built for <span className="text-white">Real Life</span>. Designed for <span className="text-warning">Better Eating</span>.</h5>
              <p>VitalBite is engineered to make real, healthy eating effortless for everyone. Whether you're looking to lose weight, gain muscle, or simply eat cleaner, our personalized plans help you form good habits that last a lifetime.</p>
              <div className="d-flex gap-2 mt-4">
                <button className="btn text-white" style={{background:'#336021', border:'none'}}>Sign In</button>
                <button className="btn text-white" style={{background:'#b8702e', border:'none'}}>Sign Up</button>
              </div>
            </div>
          </div>
         <div className="col-md-6" style={{ width: '100%', maxWidth: '350px' }}>
            <img src={meal} alt="Food" className="img-fluid rounded shadow" style={{ width: '100%', maxHeight: '220px', objectFit: 'cover' }} />
        </div>
        </div>
      </section>

      <section className="text-center py-4">
        <button className="btn btn-outline-success rounded-pill px-4 mb-2">All in one place. No stress, no guesswork.</button>
        <h4 className="fw-bold">What We Offer</h4>
        <div className="container mt-4">
          <div className="row g-4">
            { [
              { title: "Personalized Meal Plans tailored to your tastes and goals", img: pic1 },
              { title: "Smart Grocery Lists To save time, money, and waste", img: pic2 },
              { title: "Inspiration & Insights To keep your meals fresh, fun, and healthy", img: pic3 },
              { title: "Built-in Trackers To help you stay informed and on course", img: pic4 }
            ].map((item, index) => (
              <div className="col-md-3 col-6" key={index}>
                <div className="card text-white text-center d-flex align-items-center justify-content-center" style={{height: '180px', objectFit: 'cover', position:'relative'}}>
                  <img src={item.img} className="card-img" alt={item.title} style={{height: '180px', objectFit: 'cover', position:'absolute', top:0, left:0, width:'100%', borderRadius:'inherit', zIndex:0}} />
                  <div className="card-img-overlay d-flex align-items-center justify-content-center bg-dark bg-opacity-50" style={{zIndex:1, borderRadius:'inherit', textAlign:'center'}}>
                    <h6 className="card-title text-white w-100" style={{margin:0}}>{item.title}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="row g-4 text-center">
          <div className="col-md-6">
            <div className="p-5 rounded-4 text-white" style={{background:'#336021'}}>
              <h2 className="fw-bold mb-3" style={{color:'#336021'}}>
                <span style={{ color: '#fff' }}>Our</span> <span style={{ color: '#b8702e' }}>Mission</span>
              </h2>
              <p className="mt-4 fs-4">To make healthy eating easier, more accessible, and more sustainable for everyone </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className=" text-white p-5 rounded-4" style={{background:'#b8702e'}}>
              <h2 className="fw-bold mb-3" >
                <span style={{ color: '#fff' }}>Our</span> <span style={{ color: '#27632a' }}>Vision</span>
              </h2>
              <p className="mt-4 fs-4">A world where people feel empowered, informed, and inspired every time they sit down to eat.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container text-center py-5">
        <button className=" rounded-pill px-4 mb-2 text-white t" style={{background:"#336021"}}>What Users Are Saying</button>
        <h4 className="fw-bold mb-4" style={{background:"'#336021"}}>Testimonials</h4>
        <div className="row g-4">
          { [
              {
                style: { backgroundColor: '#b8702e' },
                img: person1,
                text: "“I really enjoyed using this app. Everything was so simple and organized.”",
                name: "- Jenna T."
              },
              {
                style: { backgroundColor: '#336021' },
                img: person2,
                text: "I finally stopped stressing about what to cook every night. This planner changed my life.”",
                name: "- Mark L."
              },
              {
                style: { backgroundColor: '#b8702e' },
                img: person4,
                text: "“The meal plans are so easy to follow and the grocery lists save me so much time.”",
                name: "- Priya S."
              },
              {
                style: { backgroundColor: '#336021' },
                img: person1,
                text: "The grocery list feature alone is a game-changer.” Thank you Vitalbite for making life easier",
                name: "- Alex R."
              }
            ].map((item, index) => (
            <div className="col-md-3 col-6" key={index}>
              <div
                className="text-white p-4 rounded-4 h-100"
                style={item.style}
              >
                <img
                  src={item.img}
                  className="rounded-circle mb-3"
                  alt="User"
                  style={{ width: 60, height: 60, objectFit: 'cover', border: '2px solid #fff' }}
                />
                <p className="fst-italic">{item.text}</p>
                <p className="fw-bold">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
