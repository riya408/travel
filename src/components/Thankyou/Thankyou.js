import React from "react";
import "./Thankyou.css";
import { Link } from "react-router-dom";

export default function Thankyou() {
  return (
    <>
      <div className="thankyou">
        <h1>Thank You for Booking!</h1>
        <p>We appreciate you and look forward to seeing you soon.</p>

        <button className="btntohome">
          <Link to="/">back to home </Link>
        </button>
      </div>
    </>
  );
}
