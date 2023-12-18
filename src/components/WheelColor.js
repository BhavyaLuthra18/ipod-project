import React from 'react';
import "../css/Themes.css"


// Component to render the wheel color change menu

export default function WheelColor ({active}) {
    return(
        <div className="music">
        <h2>Wheel Color Select</h2>
        <ul>
            {["Black","White","Brown"].map((element,index)=>{
                return active===index?<li key={index} className="active theme-li">{element}</li>:<li className="theme-li" key={index}>{element} </li>
            })}
        </ul>
    </div>    
    )
}






