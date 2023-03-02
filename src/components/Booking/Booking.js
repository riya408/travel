import React, { useRef } from "react";
import "./Booking.css";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Booking() {
  const navigate = useNavigate();
  function handleclick() {
    navigate("/thankyou");
  }
  // const destinationRef=useRef();
  // const dateRef=useRef();
  // const emailRef=useRef();
  // const phoneRef=useRef();

  // const navigate=useNavigate()

  // // function handleclick(){
  // //   const destination=destinationRef.current.value;
  // //   const date=dateRef.current.value;
  // //   const  email= emailRef .current.value;
  // //   const  phone = phoneRef.current.value;
  // //   if (destination==='' || date==='' || email==='' || phone) {
  // //       return  toast.error('Please fill out all fields.');

  //   }
  //   // else{
  //   //   navigate('/Thankyou')
  //   // }

  // }
  return (
    <div id="booking" class="section">
      <div class="section-center">
        <div class="container">
          <div class="row">
            <div class="booking-form">
              <div class="form-header">
                <h1>Make your Booking</h1>
              </div>
              <form>
                <div class="form-group">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Country,  city..."
                  />
                  <span class="form-label">Destination</span>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input class="form-control" type="date" />
                      <span class="form-label">Date</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4"></div>
                  <div class="col-md-4"></div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="email"
                        placeholder="Enter your Email"
                      />
                      <span class="form-label">Email</span>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="tel"
                        placeholder="Enter you Phone"
                      />
                      <span class="form-label">Phone</span>
                    </div>
                  </div>
                </div>
                <div class="form-btn">
                  <button class="submit-btn" onClick={handleclick}>
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
