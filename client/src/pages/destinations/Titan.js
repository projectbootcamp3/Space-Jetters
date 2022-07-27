import React from "react";
import titan from "../../assets/destinations/halftitan.png"
import { Link } from "react-router-dom";

const Titan = () => {
  return (
    <div className="dest-page">
      <div className="title-box">
        <h2 className="sub-title desti-title">
          Titan
        </h2>
        <div className="line-2"></div>
      </div>
      <section className="destinations-info">
        {/* Destination info*/}
        <div className="dest-info-box">
          <div className="individual-dest-info">
            <p> Travel Time:</p>
            <p> 6 weeks</p>
          </div>
          <div className="line-2"></div>
          <div className="individual-dest-info">
            <p> Day Length:</p>
            <p>2 Earth days</p>
          </div>
          <div className="line-2"></div>
          <div className="individual-dest-info">
            <p> Distance:</p>
            <p>400.000 km</p>
          </div>
          <div className="line-2"></div>
          <div className="individual-dest-info">
            <p> Training Time:</p>
            <p>5 days</p>
          </div>
          <div className="line-2"></div>
        </div>

        {/* What is included */}
        <div className="includedBox">
          <h2> What is included:</h2>
          <ul className="included-text">
            <li>* Hosting for 2 weeks in our accommodations</li>
            <li> * Training and Guidance</li>
            <li> * Medical Exams</li>
            <li>* Two Luggages per person</li>
            <li>* Tour through multiple tourism places and views</li>
            <li>  * Insurance</li>
          </ul>
        </div>
      </section>
      <div className="line-2"></div>

      {/* Inputs */}
      <div>
        <form className="destinations-input-box">
          <div className="inputs-box">
            {/* Travel date*/}
            <div className="individual-input date">
              <label for="date">Desired date: </label>
              <input id="titan-date" type="date" name="date"
                placeholder="dd-mm-yyyy"
                min="1997-01-01" max="2030-12-31" />
            </div>
            <div className="individual-input people">
              {/* Poeple */}
              <label for="europa">People (between 1 and 5):</label>
              <input type="number" id="titan-people" name="europa" min="1" max="5" />
            </div>
          </div>

          {/* Final Price */}
          <div>
            <p> Final Price: <span className="finalPrice"> value </span></p>
          </div>
          <div className="btn-checkout-box">
            <button id="titan-btn" className="btn-3 btn-checkout">
              <Link to="/checkout">checkout</Link>
            </button>
          </div>
        </form>
      </div>


      <section>
        <div className="dest-img-container">
          <img alt="" className="destination-img" src={titan} />
        </div>
      </section>
    </div>
  );
};

export default Titan;
