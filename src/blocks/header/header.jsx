import React from "react";
import './header.scss';


const Header = () => {

    return (
        <div className="header-main">
            <div><b>Mini-us</b> | A Collection Of Blocks</div>
            <div>
                Created by <a href="https://github.com/ROTBOW">Josiah Leon</a>
            </div>
            <div className="header-line"/>
        </div>
    )
};

export default Header;