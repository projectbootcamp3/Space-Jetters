import React from "react";
import Auth from "../utils/auth";

const Home = () => {
 
const loggedIn = Auth.loggedIn();
  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <section className="section-hero">
          <h2 className="sub-title">Home page</h2>
          </section>
        )}
      </div>
    </main>
  );
};

export default Home;
