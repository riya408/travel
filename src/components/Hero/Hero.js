import React from "react";
import "./Hero.css";
import homeImage from "../../assets/hero.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigate = useNavigate();
  function handlePage() {
    navigate("/ToursData");
  }
  return (
    <>
      <div id="hero">
        <div className="section">
          <div className="background">
            <img src={homeImage} alt="" />
          </div>
          <div className="content">
            <div className="title">
              <h1>TRAVEL TO EXPLORE</h1>
              {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          natus, enim ipsam magnam odit deserunt itaque? Minima earum velit
          tenetur!
        </p>  */}
            </div>
            <div className="search">
              <div className="container">
                <label htmlFor="">Where you want to go</label>
                <input type="text" placeholder="Search Your location" />
              </div>
              <div className="container">
                <label htmlFor="">particular date</label>
                <input type="date" />
              </div>

              <button onClick={handlePage}>Explore Now</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
