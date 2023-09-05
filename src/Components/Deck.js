import React from 'react';
import Post from './Post'; // Import your Tweet component
import './../Styles/Deck.css'; // Import your CSS for styling

const Deck = ({ posts: posts }) => {
  return (
    <div className="deck">
      {posts.map((post, index) => (
        <Post
          key={index}
          username={post.username}
          isVerified={post.isVerified}
          content={post.content}
          timestamp={post.timestamp}
        />
      ))}
    </div>
  );
};

export default Deck;