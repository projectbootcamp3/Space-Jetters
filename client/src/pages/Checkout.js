import React from "react";
import guide from "../files/guide.pdf"
//import CheckoutForm from '../components/CheckoutForm/CheckoutForm'

const Checkout = () => {
  return (
    <div className="checkout-wrapper">
      <div className="subtitle-container">
        <div className="line"></div>
            <h2 className="sub-title">Checkout Page</h2>
        <div className="line"></div>
      </div>

      <div className="trip-infos">
          <p>Destination: <span>Moon</span></p>
          <p>Departure Date: <span>August 5, 2022</span></p>
          <p>Crew Size: <span>5</span></p>
          <p>Final Price: <span>$ 50.000</span></p>
      </div>

      <div className="card-details">
        <p>Pay using Credit or Debit card</p>
  
        <div className="card-number">
          <label> Card Number </label>
          <input
            type="text"
            className="card-number-field"
            placeholder="###-###-###"/>
        </div>
        <br />
        <div className="date-number">
          <label> Expiry Date </label>
          <input type="text" className="date-number-field" 
                 placeholder="DD-MM-YY" />
        </div>
  
        <div className="cvv-number">
          <label> CVV number </label>
          <input type="text" className="cvv-number-field" 
                 placeholder="xxx" />
        </div>
        <div className="nameholder-number">
          <label> Card Holder name </label>
          <input
            type="text"
            className="card-name-field"
            placeholder="Enter your Name"/>
        </div>
        <button type="submit" 
                className="submit-now-btn">
          submit
        </button>
      </div>

      <div className="download-box">
				<a href={guide} download>
					<h3>Download space travel guide</h3>
				</a>
			</div>
    </div>
  );
};

export default Checkout;
