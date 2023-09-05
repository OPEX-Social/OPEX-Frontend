import React from 'react';
import './../Styles/Navbar.css'; // Import your CSS for styling
import Profile from './Profile';
import UserProfile from './UserProfile';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src="https://i.imgur.com/4Q56XOx.png" alt="logo" />
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/explore">Explore</a></li>
        <li><a href="/notifications">Notifications</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
      <UserProfile user={{
        username: "ibxcodecat",
        bio: "I love cats!",
        followers: 100,
        following: 100,
        profilePicture: "https://avatars.githubusercontent.com/u/47279783?v=4",
        isVerified: true
      }} />
    </nav>
  );
};

export default Navbar;
