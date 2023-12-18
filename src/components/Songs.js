import React from 'react';

// This component renders the songs menu
// It receives 'songItems' (an array of song names) and 'active' (the index of the active song) as props
export default function Songs({ songItems, active }) {
    return (
        <div className="music">
            <h3>Songs</h3>
            <ul>
                {songItems.map((element, index) => {
                    // Check if the current song is the active song and apply the 'active' class if true
                    return active === index ? (
                        <li key={index} className="active">
                            &nbsp;{element}
                        </li>
                    ) : (
                        <li id="song1" key={index}>
                            &nbsp;{element}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
