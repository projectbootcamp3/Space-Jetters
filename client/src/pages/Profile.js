import React from "react";

import astronaultImg from "../assets/home-images/astronault.jpg"

const Profile = () => {

  return (
    <div className="profile-wrapper">
      <section className="profile flex-columns">
        <div className="row">
          <div className="column">
            <div className="column-1">
              <img alt="" className="astronault" src={astronaultImg} />
            </div>
          </div>
          <div className="column">
            <div className="column-2 bg-primary">
              <div className="subtitle-container">
                <div className="line"></div>
                <h2 className="sub-title"> My profile </h2>
                <div className="line"></div>
              </div>
              {/* Missions container */}
              <div className="missions-container">
                <h3> Upcoming trips</h3>
                <div className="line-2"></div>
                <div className="mission-data">
                  <div>
                    <h1>Destination:</h1>
                    <p>Moon</p>
                  </div>
                  <div>
                    <h1>Departure Date:</h1>
                    <p>August 5, 2022</p>
                  </div>
                  <div>
                    <h1>Crew Size:</h1>
                    <p>5 Members</p>
                  </div>
                  <div>
                    <h1>Trip Duration:</h1>
                    <p>40 Days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
