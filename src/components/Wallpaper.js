import React from 'react';

// Renders wallpaper menu
// It receives 'active' (the index of the active wallpaper) as a prop
export default function Wallpaper ({active}){
    return(
        <div className="music">
        <h2>Wallpaper Select</h2>
        <ul>
            {["Wallpaper 1","Wallpaper 2","Wallpaper 3"].map((element,index)=>{
                   // Check if the current wallpaper is the active wallpaper and apply the 'active' class if true
                return active===index?<li key={index} className="active theme-li">{element}</li>:<li className="theme-li" key={index}>{element} </li>
            })}
        </ul>
    </div>    
    )
}





