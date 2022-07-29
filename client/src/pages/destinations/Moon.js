import React, { useState } from "react";
import moon from "../../assets/destinations/halfmoon.png"
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_MISSION } from "../../utils/mutations";
import { QUERY_ME, QUERY_MISSIONS } from '../../utils/queries';

const Moon = () => {
  const [crewSize, setCrewSize] = useState(0)
  const [date, setDate] = useState('');
  // const price = (crewSize * 1000);

  const [createMission, { error }] = useMutation(CREATE_MISSION, {
    update(cache, { data: { createMission } }) {

      // could potentially not exist yet, so wrap in a try/catch
      try {
        // update me array's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, missions: [...me.missions, createMission] } },
        });
      } catch (e) {
        console.warn("First thought insertion by user!")
      }

      // update thought array's cache
      const { missions } = cache.readQuery({ query: QUERY_MISSIONS });
      cache.writeQuery({
        query: QUERY_MISSIONS,
        data: { missions: [createMission, ...missions] },
      });
    }
  });

  const handleChangeCrewSize = event => {
    setCrewSize(event.target.value);
    console.log('Crew size is:', event.target.value);
  };
  const handleChangeDate = event => {
    setDate(event.target.value)
    console.log('Desired departure date is:', event.target.value);
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const destination = "Moon"

    try {
      await createMission({
        variables: { destination, crewSize, date },
      });

      // clear form value
      setDate('');
      setCrewSize(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="dest-page">
      <div className="title-box">
        <h2 className="sub-title desti-title">
          Moon
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
            <p>29.5 Earth days</p>
          </div>
          <div className="line-2"></div>
          <div className="individual-dest-info">
            <p> Distance:</p>
            <p>384,400 km</p>
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
      <div className="input-wrapper">
        <form
          className="destinations-input-box"
          onSubmit={handleFormSubmit}
        >

          <div className="inputs-box">
            {/* Travel date*/}
            <div className="individual-input date">
              <p>Desired date: </p>
              <input id="moon-date" type="date" name="date"
                placeholder="dd-mm-yyyy"
                min="2022-08-01" max="2030-12-31"
                onChange={handleChangeDate}
                value={date}
              />
            </div>
            <div className="individual-input people">
              {/* Poeple */}
              <p> People (between 1 and 5)</p>
              <input type="number" id="moon-people" min="1" max="5"
                onChange={handleChangeCrewSize}
                value={crewSize} />
            </div>
          </div>

          {/* Final Price */}
          <div className="finalPriceContainer">
            <p> Final Price: <span className="finalPrice"> value </span></p>
          </div>

          <div className="btn-checkout-box">
            <button id="moon-btn" type="submit">
              <Link to="/checkout" className="btn-3 btn-checkout">checkout</Link>
            </button>
          </div>

        </form>
      </div>

      <section>
        <div className="dest-img-container">
          <img alt="" className="destination-img" src={moon} />
        </div>
      </section>
    </div>
  );
};

export default Moon;
