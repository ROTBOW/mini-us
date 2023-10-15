import React from "react";
import './redButton.scss';


const RedButton = () => {

    const handleClick = (e) => {
        e.preventDefault();
        e.target.classList.add('redbutton-actived')
        // console.log(e.target.classList);
    };

    return (
        <div className="redbutton-block">
            <div className="redbutton-base">
                <button className="redbutton-button" onClick={handleClick}></button>
            </div>
            <div className="redbutton-counter">numbers here</div>
        </div>
    )

};


export default RedButton;