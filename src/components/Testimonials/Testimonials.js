import React from "react";
import "./Testimonials.css";
import avatarImage from "../../assets/avatarImage.jpeg";
export default function Testimonials() {
  return (
    <>
      <div id="testimonials" className="testimony">
        <div className="title">
          <h2>Happy Customers</h2>
        </div>
        <div className="testimonials">
          <div className="testimonial">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate asperiores eaque.
            </p>
            <div className="info">
              <img src={avatarImage} alt="" />
              <div className="details">
                <h4>Riya singh</h4>
                <span>CEO -Abc company</span>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate asperiores eaque.
            </p>
            <div className="info">
              <img src={avatarImage} alt="" />
              <div className="details">
                <h4>udisha sharma</h4>
                <span>CEO - Abc company</span>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate asperiores eaque.
            </p>
            <div className="info">
              <img src={avatarImage} alt="" />
              <div className="details">
                <h4>Tanisha </h4>
                <span>CEO - Abc company</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
