import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    console.log('LOGOUT EVENT: ', event)

    event.preventDefault();
    Auth.logout();
    console.log('👽 Abducted!......you logged out.')
  };

  return (
    <header className="header">
      <div className="header-subcontainer">
        <Link to="/">
          <div className="logo-container"><h1>SpaceJetters</h1></div>
        </Link>
        <nav className="nav" id="nav">
          {Auth.loggedIn() ? (
            <>
              <Link to="/destinations">Destinations</Link>
              <Link to="/rockets">Rockets</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/profile">Profile</Link>
              <a href="/" onClick={logout}>Logout</a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
