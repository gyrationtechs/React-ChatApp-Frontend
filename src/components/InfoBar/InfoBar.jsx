import React from 'react';

import './InfoBar.css';
import closeIcon from '../../icons/onlineIcon.png';
import onlineIcon from '../../icons/closeIcon.png';

const InfoBar = ({ room }) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img src={closeIcon} alt="Online Icon" className="onlineIcon" />
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={onlineIcon} alt="Close icon" /></a>
            </div>
        </div>
    )

}

export default InfoBar;