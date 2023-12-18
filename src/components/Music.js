import React from 'react';
import '../css/Music.css';

const Music = (props) => {
  const { musicItems, active } = props;

  return (
    <div className="music">
      <h3>Music</h3>
      <ul>
            {/* Map through the musicItems array and create list items */}
        {musicItems.map((element, index) => (
          <li key={index} className={active === index ? 'active' : ''}>
            &nbsp;{element}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Music;
