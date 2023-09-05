import React, { useState } from 'react';

const RepostButton = () => {
  const [reposted, setReposted] = useState(false);
  const [repostCount, setRepostCount] = useState(0);

  const toggleRepost = () => {
    if (reposted) {
      setRepostCount(repostCount - 1);
    } else {
      setRepostCount(repostCount + 1);
    }
    setReposted(!reposted);
  };

  return (
    <div className="repost-button">
      <button className={reposted ? 'reposted' : ''} onClick={toggleRepost}>
        {reposted ? 'Reposted' : 'Repost'}
      </button>
      <span className="repost-count">{repostCount}</span>
    </div>
  );
};

export default RepostButton;
