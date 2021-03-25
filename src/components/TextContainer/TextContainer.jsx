import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
    <div className="textContainer">
        <div>
            <h1>Chat Application <span role="img" aria-label="emoji">💬</span></h1>
            <h4>Made with React JS</h4>
        </div>
        {
            users
                ? (
                    <div>
                        <h3>Current active users:</h3>
                        <div className="activeContainer">
                            <h5>
                                {users.map(({ name }) => (
                                    <div key={name} className="activeItem">
                                        {name}
                                        <img alt="Online Icon" src={onlineIcon} />
                                    </div>
                                ))}
                            </h5>
                        </div>
                    </div>
                )
                : null
        }
    </div>
);

export default TextContainer;