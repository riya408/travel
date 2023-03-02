



import React, { useState } from "react";
import './Tour.css'
import { useNavigate } from "react-router-dom";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const navigate=useNavigate();
  function handleBooking(){
    navigate("/booking")
  }

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p> 
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
        <button onClick={handleBooking} className="Intrested">interested</button>
      </footer>
    </article>
  );
};

export default Tour;