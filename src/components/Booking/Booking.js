import React from "react";
import "./Booking.css";
import { useNavigate } from "react-router-dom";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export default function Booking() {
  const navigate = useNavigate();
  function handleclick() {
    navigate("/thankyou");
  }
  
  return (

    <div id="booking" className="section">
      <div className="section-center">
        <div className="container">
          <div className="row">
            <div className="booking-form">
              <div className="form-header">
                <h1>Make your Booking</h1>
              </div>
              <div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Country,  city..."
                  />
                  <span className="form-label">Destination</span>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" type="date" />
                      <span className="form-label">Date</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4"></div>
                  <div className="col-md-4"></div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Enter your Email"
                      />
                      <span className="form-label">Email</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="tel"
                        placeholder="Enter you Phone"
                      />
                      <span className="form-label">Phone</span>
                    </div>
                  </div>
                </div>
                <div className="form-btn">
                  <button className="submit-btn" onClick={handleclick}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
