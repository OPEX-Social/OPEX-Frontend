import React from 'react';

import LikeButton from './LikeButton';
import RepostButton from './RepostButton';

import './../Styles/Post.css';
import './../Styles/Buttons.css';

const Post = ({ username, content, timestamp }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img
          src="https://placekitten.com/50/50" // Replace with the user's profile picture
          alt={`Profile of ${username}`}
          className="profile-picture"
        />
        <div className="user-info">
          <span className="username">{username}</span>
          <span className="timestamp">{timestamp}</span>
        </div>
      </div>
      <p className="post-content">{content}</p>
      
      <div className="tweet-buttons">
        <LikeButton /> {/* Include the LikeButton component */}
        <RepostButton /> {/* Include the RepostButton component */}
      </div>
    </div>
  );
};

export default Post;
