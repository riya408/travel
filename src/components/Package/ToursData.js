import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tour from "./Tours";
// import { useNavigate } from "react-router-dom";
const url = "https://course-api.com/react-tours-project";

function ToursData() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);
  

  const removeTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            reload
          </button>
         
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tour tours={tours} removeTour={removeTour} />
      
    </main>
  );
}

export default ToursData ;
