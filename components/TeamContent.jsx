import React from 'react';

function TeamContent(props) {
    return(
        <div className="tc-flex">
            <div className="tc-container">
                <div className="tc-info">
                    <div className="tc-image" style={{backgroundImage: `url("/profile-pic.png")`}}></div>
                    <div className="tc-desc">
                        <h2> Lorema Obelix </h2>
                        <p> Programmer </p>
                    </div>
                </div>
            </div>
            <div className="tc-container">
                <div className="tc-info">
                    <div className="tc-image"></div>
                    <div className="tc-desc">
                        <h2> Lorema Obelix </h2>
                        <p> Programmer </p>
                    </div>
                </div>
            </div>
            <div className="tc-container">
                <div className="tc-info">
                    <div className="tc-image"></div>
                    <div className="tc-desc">
                        <h2> Lorema Obelix </h2>
                        <p> Programmer </p>
                    </div>
                </div>
            </div>
            <div className="tc-container">
                <div className="tc-info">
                    <div className="tc-image"></div>
                    <div className="tc-desc">
                        <h2> Lorema Obelix </h2>
                        <p> Programmer </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamContent;