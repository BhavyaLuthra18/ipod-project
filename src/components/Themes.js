import React from 'react';
import "../css/Themes.css"

// Renders themes menu
// It receives 'active' (the index of the active theme) as a prop
export default function Theme({active}){
    return(
        <div className="music">
        <h2>Theme Select</h2>
        <ul>
            {["Sky-High","Black","Nature-Green","Space Gray","Pearl"].map((element,index)=>{
                                    // Check if the current theme is the active theme and apply the 'active' class if true
                return active===index?<li key={index} className="active theme-li">{element}</li>:<li className="theme-li" key={index}>{element} </li>
            })}
        </ul>
    </div>    
    )
}






