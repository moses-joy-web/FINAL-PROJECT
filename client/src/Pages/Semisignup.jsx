import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import foodCardBg from "../assets/pic1.png";

const foodBg = "https://via.placeholder.com/1200x800?text=Food+Background";

const Semisignup = () => {
  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${foodBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        margin: 0,
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Custom styles for the form */}
      <style>{`
        .form-container {
          background: linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${foodCardBg});
          background-size: cover;
          background-position: center;
          padding: 20px 30px; /* Less vertical padding */
          border-radius: 10px;
          max-width: 600px;
          width: 100%;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        form {
          width: 100%;
          margin: 0;
        }
        .form-label {
          font-weight: bold;
          color: #333;
        }
        .form-control {
          border: 2px solid #00BFFF;
          border-radius: 5px;
          padding: 10px;
          color: #000;
        }
        .form-control::placeholder {
          color: #666;
        }
        .btn-submit {
          background-color: #28A745;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          width: 100%;
        }
        .btn-submit:hover {
          background-color: #218838;
        }
        .progress-bar {
          background-color: #28A745;
        }
      `}</style>
      <div className="form-container shadow-lg">
        <form>
          <div className="mb-3">
            <label htmlFor="height" className="form-label">
              How tall are you?
            </label>
            <input
              type="text"
              className="form-control"
              id="height"
              placeholder={"e.g., 5'6\""}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              How old are you?
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="e.g., 22 yrs"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              What's your gender?
            </label>
            <input
              type="text"
              className="form-control"
              id="gender"
              placeholder="e.g., Male"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="current-weight" className="form-label">
              What's your current weight?
            </label>
            <input
              type="text"
              className="form-control"
              id="current-weight"
              placeholder="e.g., 150 lbs"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="target-weight" className="form-label">
              What's your target weight?
            </label>
            <input
              type="text"
              className="form-control"
              id="target-weight"
              placeholder="e.g., 140 lbs"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="weight-progress" className="form-label">
              Current weight progress
            </label>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "60%" }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                60% [22 lbs]
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="weight-goal" className="form-label">
              What's your weight goal?
            </label>
            <input
              type="text"
              className="form-control"
              id="weight-goal"
              placeholder="e.g., Lose weight"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="meal-preferences" className="form-label">
              What are your meal preferences?
            </label>
            <input
              type="text"
              className="form-control"
              id="meal-preferences"
              placeholder="e.g., Vegetarian"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="allergies" className="form-label">
              Do you have any allergies?
            </label>
            <input
              type="text"
              className="form-control"
              id="allergies"
              placeholder="e.g., Nuts, Dairy"
            />
          </div>
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Semisignup;
