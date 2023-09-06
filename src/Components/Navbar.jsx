import React from 'react';
import './../Styles/Navbar.css'; // Import your CSS for styling
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {

  const { user, isAuthenticated } = useAuth0();

  return (
    <nav className="navbar">
      <div className="logo">
        <a href={window.location.origin}>
          <img className="logo" src="https://avatars.githubusercontent.com/u/47279783?v=4" alt="logo" />
        </a>
      </div>
      <h1>OPEX</h1>
      <ul className="nav-links">
        <li><a href={window.location.origin}>Feed</a></li>
        <li>
          <a href="/profile">{isAuthenticated === true && user.nickname}</a>
          <a href="/profile">{isAuthenticated === false && "Profile"}</a>
        </li>
        <li><a href="/trending">Trending</a></li>
        <li><a href="/notifications">Notifications</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
