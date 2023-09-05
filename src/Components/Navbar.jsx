import React from 'react';
import './../Styles/Navbar.css'; // Import your CSS for styling
import Profile from './Profile';
import UserProfile from './UserProfile';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href={window.location.origin}>
          <img class="logo" src="https://avatars.githubusercontent.com/u/47279783?v=4" alt="logo" />
        </a>
      </div>
      <h1>OpenIBX</h1>
      <ul className="nav-links">
        <li><a href={window.location.origin}>OpenIBX</a></li>
        <li>-</li>
        <li><a href="/explore">Explore</a></li>
        <li>-</li>
        <li><a href="/notifications">Notifications</a></li>
        <li>-</li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
