import React, { useState, useEffect } from 'react';
import '../css/Navbar.css'; 
import BatImg from '../static/battery.png'; 


const Navbar = (props) => {
  // Use state to manage the current time
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const { noty } = props;
    let stateId = '';

    if (noty === true) {
      return;
    }

    // Set an interval to update time every 60 seconds
    stateId = setInterval(() => {
      setTime(getCurrentTime());
    }, 60000);

    return () => {
      if (noty !== true) {
        clearInterval(stateId);
      }
    };
  }, [props]);

  useEffect(() => {
    const { setNoty, noty } = props;
    if (noty === true) {
      setTimeout(function () {
        setNoty();
      }, 1000);
    }
  }, [props]);

  // Function to get the current time
  function getCurrentTime() {
    const today = new Date();
    let time = today.getHours() + ':' + today.getMinutes();
    if (today.getMinutes() < 10) {
      time = today.getHours() + ':0' + today.getMinutes();
    }
    return time;
  }

  const { playing, noty, notifyText } = props;

  return (
    <div className="bar">
      <h5 className="heading">iPod</h5>
      {noty === true && <h5 className="notification">{notifyText}</h5>}
      {noty === false && <h3 className="time">{time}</h3>}
      <div className="right-container-nav">
      {playing ? (
        <h5 className="play-pause-nav">
          <i className="fas fa-play"></i>
        </h5>
      ) : (
        <h5 className="play-pause-nav">
          <i className="fas fa-pause"></i>
        </h5>
      )}
        <img className="battery" src={BatImg} alt="Battery" />
      </div>
    </div>
  );
};

export default Navbar; 
