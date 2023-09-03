import React from 'react';

import LikeButton from './LikeButton';
import RepostButton from './RepostButton';

import './../Styles/Post.css';
import './../Styles/PostButtons.css';
import VerifiedBadge from './VerifiedBadge';

const Post = ({ username, content, timestamp }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img
          src="https://avatars.githubusercontent.com/u/47279783?v=4" // Default profile picture to kitty
          alt={`Profile of ${username}`}
          className="profile-picture"
        />
        <div className="user-info">
          <span className="username">@{username} </span>
          <VerifiedBadge />
          <span className="timestamp">{timestamp}</span>
        </div>
      </div>
      <p className="post-content">{content}</p>
      
      <div className="post-buttons">
        <LikeButton /> {/* Include the LikeButton component */}
        <RepostButton /> {/* Include the RepostButton component */}
      </div>
    </div>
  );
};

export default Post;
