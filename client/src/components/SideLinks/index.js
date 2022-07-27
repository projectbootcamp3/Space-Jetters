import { React } from 'react';
import { Link } from "react-router-dom"
import Auth from "../../utils/auth";

const SideBarLinks = ({ closeSideBar }) => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
    return (
        <div className="header-subcontainer hide">
        <nav className="burger-nav" >
          {Auth.loggedIn() ? (
            <>
               <Link to="/" className="menu-item"  onClick={closeSideBar}>Home</Link >
              <Link to="/destinations" className="menu-item" onClick={closeSideBar}>Destinations</Link>
              <Link to="/rockets" className="menu-item" onClick={closeSideBar}>Rockets</Link>
              <Link to="/contact" className="menu-item" onClick={closeSideBar} >Contact</Link>
              <Link to="/profile" className="menu-item" onClick={closeSideBar}>Profile</Link>
              <a href="/" className="menu-item" onClick={logout}>
                Logout
              </a>
              
            </>
          ) : (
            <>
              <Link to="/login" onClick={closeSideBar} className="menu-item">Login</Link>
              <Link to="/signup" onClick={closeSideBar} className="menu-item">Signup</Link>
            </>
          )}
        </nav>
      </div>
)};

export default SideBarLinks;
