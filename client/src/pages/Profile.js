import React, { useEffect } from "react";
import { getDestinationsFromApi } from "../utils/API";

const Profile = () => {
  useEffect(() => {
    getDestinationsFromApi();
  })
  return (
    <div>
      <div className="title-box">
        <h2 className="sub-title">
          My Profile
        </h2>
      </div>
    </div>
  );
};

export default Profile;
