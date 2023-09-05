import React from 'react';
import VerifiedBadge from './VerifiedBadge'; // Import VerifiedBadge component
import './../Styles/UserProfile.css'; // Import CSS for styling
import Button from './Button';

const UserProfile = ({ user }) => {
  const { username, bio, followers, following, profilePicture, isVerified } = user;

  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={profilePicture} alt={`Profile of ${username}`} className="profile-picture" />
        <div className="user-info">
          <h1 className="username">
            @{username} {isVerified && <VerifiedBadge />}
          </h1>
          <p className="bio">{bio}</p>
          <div className="follower-info">
            <span className="followers">Followers: {followers}</span>
            <span className="following">Following: {following}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
