import React, { useState } from 'react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const toggleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="like-button">
      <button className={liked ? 'liked' : ''} onClick={toggleLike}>
        {liked ? 'Liked' : 'Like'}
      </button>
      <span className="like-count">{likeCount}</span>
    </div>
  );
};

export default LikeButton;
