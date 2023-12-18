import React from 'react';
import '../css/Menu.css';
import game from '../static/game.jpg';
import music from '../static/music.jpg';
import settings from '../static/settings.png';

const Menu = (props) => {
  const { active, menuItems, songImgUrl } = props;

  return (
    <div className="menu-container">
      <div className="menu">
        <ul>
          {menuItems.map((element, index) => (
            <li key={index} className={active === index ? 'active' : ''}>
              &nbsp;{element}
            </li>
          ))}
        </ul>
      </div>
      <div className="leaf">
               {/* Render images based on the active menu item */}
        {active === 0 && <img className="leaf-img" src={songImgUrl} alt="" />}
        {active === 1 && <img className="leaf-img" src={music} alt="" />}
        {active === 2 && <img className="leaf-img" src={game} alt="" />}
        {active === 3 && <img className="leaf-img" src={settings} alt="" />}
      </div>
    </div>
  );
};

export default Menu;
