import React, { useEffect } from "react";
import { getDestinationsFromApi } from "../utils/API";
import astronaultImg from "../assets/home-images/astronault.jpg"

const Profile = () => {
  useEffect(() => {
    getDestinationsFromApi();
  })
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
