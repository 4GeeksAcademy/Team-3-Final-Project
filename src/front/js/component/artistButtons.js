import React from 'react';
import './artistPageStyle.css'; // Import your CSS file

const Panel = () => {
  return (
    <div className="panel">
      <button>Top Tracks</button>
      <button>All Albums</button>
      <button>Videos</button>
      <button>Add to Favorites</button>
      <button>Like</button>
    </div>
  );
};

export default Panel;
