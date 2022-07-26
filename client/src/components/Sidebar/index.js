import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom"
import Auth from "../../utils/auth";

export default props => {

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
   
  return (
    <Menu>
      <div className="header-subcontainer">
          <nav className="burger-nav" >
            {Auth.loggedIn() ? (
              <>
                 <Link to="/" className="menu-item">Home</Link>
                <Link to="/destinations" className="menu-item">Destinations</Link>
                <Link to="/rockets" className="menu-item">Rockets</Link>
                <Link to="/contact" className="menu-item">Contact</Link>
                <Link to="/profile" className="menu-item">Profile</Link>
                <a href="/" className="menu-item" onClick={logout}>
                  Logout
                </a>
                
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </>
            )}
          </nav>
        </div>
    </Menu>
  );
};