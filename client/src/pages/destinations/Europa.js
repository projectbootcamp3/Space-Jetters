import React from "react";
import europa from "../../assets/destinations/halfeuropa.png"
import { Link } from "react-router-dom";

const Europa = () => {
  return (
    <div className="dest-page">
      <div className="title-box">
        <h2 className="sub-title desti-title">
          Europa
        </h2>
        <div className="line-2"></div>
      </div>
      <section className="destinations-info">
        {/* Destination info*/}
        <div className="dest-info-box">
            <div className="individual-dest-info">
              <p> Travel Time:</p>
              <p> 1 month</p>
            </div>
            <div className="line-2"></div>
            <div className="individual-dest-info">
              <p> Day Length:</p>
              <p>24 hrs 37 min</p>
            </div>
            <div className="line-2"></div>
            <div className="individual-dest-info">
              <p> Distance:</p>
              <p> 1500Mkm</p>
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
          <form  className="destinations-input-box">
            <div className="inputs-box">
                {/* Travel date*/}
                <div className="individual-input date">
                  <label for="date">Desired date: </label>
                  <input id="europa-date" type="date" name="date" 
                placeholder="dd-mm-yyyy" 
                min="1997-01-01" max="2030-12-31" />
                </div>
                <div className="individual-input people">
                {/* Poeple */}
              <label for="europa">People (between 1 and 5):</label>
              <input type="number" id="europa-people" name="europa" min="1" max="5" />
                </div>
          </div>
          
         {/* Final Price */}
         <div>
          <p> Final Price: <span className="finalPrice"> value </span></p>
         </div>
         <div className="btn-checkout-box">
         <button className="btn-3 btn-checkout">
                <Link to="/checkout">checkout</Link>
          </button> 
         </div>
          </form>
        </div>


      <section>
        <div className="dest-img-container">
        <img className="destination-img" src={europa}/>
        </div>
      </section>
    </div>
  );
};

export default Europa;
