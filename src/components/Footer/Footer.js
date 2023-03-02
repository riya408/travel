
import React from "react";
import  "./Footer.css"
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  return (
   
    <>
    <div className="footer">
      <span>Copyright &copy; riyasingh 2023. All rights reserved</span>
      <ul className="links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#services">About</a>
        </li>
        <li>
          <a href="#recommend">Places</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
      <ul className="social__links">
        <li>
        <a href="https://www.facebook.com/" > <BsFacebook /></a>
        </li>
        <li>
          {/* <AiFillInstagram /> */}
          <a href="https://www.instagram.com/" > <AiFillInstagram /></a>
        </li>
        <li>
         <a href="https://in.linkedin.com/"><BsLinkedin /></a> 
        </li>
      </ul>
    
    </div>
    </>

  );
}