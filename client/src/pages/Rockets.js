import React from 'react';
import rocketImage1 from "../assets/rockets/rocket-1.jpg";
import rocketImage2 from "../assets/rockets/rocket-2.jpg";
import rocketImage3 from "../assets/rockets/rocket-3.jpg";
import rocketImage4 from "../assets/rockets/rocket-4.jpg";

const Rockets = () => {

  return (
    <div className="rockets-wrapper">
      <div class="rocketContainer">
          <div className="subtitle-container">
                      <div className="line"></div>
                      <h2 className="sub-title">Check Available Rockets</h2>
                      <div className="line"></div>
                </div>
          <section id="rocket-selection" class="rocket">
            <div className="rocket-img-box">
            <img src={rocketImage1} class="float-left"
                      ></img>
            </div>
                      <h2>Sonic Rocket</h2>
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                      voluptas laborum repellendus dolorum! Harum, cupiditate.
                      </p>
          </section>
          <section id="superRocket-selection" class="rocket">
          <div className="rocket-img-box">
            <img src={rocketImage2} class="float-left"
                      ></img>
            </div>
                      <h2>Super-Sonic Rocket</h2>
                      
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                      voluptas laborum repellendus dolorum! Harum, cupiditate.
                      </p>
          </section>

          <section id="superRocket-selection" class="rocket">
          <div className="rocket-img-box">
            <img src={rocketImage3} class="float-left"
                      ></img>
            </div>
                      <h2>Apollo 999</h2>
                      
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                      voluptas laborum repellendus dolorum! Harum, cupiditate.
                      </p>
          </section>

          <section id="superRocket-selection" class="rocket">
          <div className="rocket-img-box">
            <img src={rocketImage4} class="float-left"
                      ></img>
            </div>
                      <h2>SpaceJet </h2>
                      
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                      voluptas laborum repellendus dolorum! Harum, cupiditate.
                      </p>
          </section>
          </div>
      </div>)
}

export default Rockets;