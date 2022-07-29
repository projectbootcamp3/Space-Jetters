import React from "react";
import spacestation from "../../assets/destinations/halfspacestation.png"
import { Link } from "react-router-dom";

const SpaceStation = () => {
  return (
    <div className="dest-page">
      <div className="title-box">
        <h2 className="sub-title desti-title">
          Space Station
        </h2>
      </div>
      <div className="line-2"></div>
      <section className="destinations-info">
        {/* Destination info*/}
        <div className="dest-info-box">
          <div className="individual-dest-info">
            <p> Travel Time:</p>
            <p> 18 hours</p>
          </div>
          <div className="line-2"></div>
          <div className="individual-dest-info">
            <p> Day Length:</p>
            <p>1 Earth days</p>
          </div>
          <div className="line-2"></div>
          <div className="individual-dest-info">
            <p> Distance:</p>
            <p>10.000 km</p>
          </div>
          <div className="line-2"></div>
          <div className="individual-dest-info">
            <p> Training Time:</p>
            <p>3 days</p>
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
          <div className="line-2 hide"></div>
        </div>
      </section>

      {/* Inputs */}
      <div>
        <form className="destinations-input-box">
          <div className="inputs-box">
            {/* Travel date*/}
            <div className="individual-input date">
            <p>Desired date: </p>
              <input id="space-station-date" type="date" name="date"
                placeholder="dd-mm-yyyy"
                min="1997-01-01" max="2030-12-31" />
            </div>
            <div className="individual-input people">
              {/* Poeple */}
              <p> People (between 1 and 5)</p>
              <input type="number" id="space-station-people" name="europa" min="1" max="5" />
            </div>
          </div>

          {/* Final Price */}
          <div className ="finalPriceContainer">
            <p> Final Price: <span className="finalPrice"> value </span></p>
          </div>
          <div className="btn-checkout-box">
            <button id="space-station-btn">
              <Link to="/checkout" className="btn-3 btn-checkout">checkout</Link>
            </button>
          </div>
        </form>
      </div>


      <section>
        <div className="dest-img-container">
          <img alt="" className="destination-img" src={spacestation} />
        </div>
      </section>
    </div>
  );
};

export default SpaceStation;
