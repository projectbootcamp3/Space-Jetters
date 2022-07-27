import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="header">
      <div className="header-subcontainer">
        <Link to="/">
          <div className="logo-container"><h1 className="logo-title">SpaceJetters</h1></div>
        </Link>
        <nav className="nav" id="nav">
          {Auth.loggedIn() ? (
            <>
              <Link to="/destinations">Destinations</Link>
              <Link to="/rockets">Rockets</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/profile">Profile</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
              <Link to="/search">Search Images</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
export default Header;