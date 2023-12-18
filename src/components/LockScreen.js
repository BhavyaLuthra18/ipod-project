import React from 'react';
import {AiFillLock} from "react-icons/ai"
const LockScreen = () => {
    return (
        <div>
            <div className="lock-display">  
         
            </div>
            <div className="bottom-div-lock">
            <span  style={{fontSize : '2rem'}}>
            <AiFillLock/>
           </span>    
            <h3> Press Centre Button to unlock!</h3>
            </div>
        </div>
    );
};

export default LockScreen;
