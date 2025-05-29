import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import joy from '../src/assets/pic1.png'; 

const Cards = () => {
  return (
    <div className="container py-4">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
          <div className="card text-white h-5" style={{ backgroundColor: '#b8702e' }}>
            <img src={joy} className="card-img-top" alt="Card 1" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">Global Reach</h5>
              <p className="card-text">Connecting people worldwide with our innovative solutions.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-white h-100" style={{ backgroundColor: '#335424' }}>
            <img src={joy} className="card-img-top" alt="Card 2" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">Professional Design</h5>
              <p className="card-text">Crafted with precision to meet global standards.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-white h-100" style={{ backgroundColor: '#b8702e' }}>
            <img src={joy} className="card-img-top" alt="Card 3" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">Responsive Layout</h5>
              <p className="card-text">Seamlessly adapts to any device for a better user experience.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-white h-100" style={{ backgroundColor: '#335424' }}>
            <img src={joy} className="card-img-top" alt="Card 4" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">Innovative Solutions</h5>
              <p className="card-text">Empowering businesses with cutting-edge technology.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
