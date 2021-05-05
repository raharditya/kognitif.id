import React from "react";

function PortfolioItem(props) {
  return (
    <div className="item-container">
        <div className="item-thumbnail">

        </div>
        <div className="item-date">
            <h1 className="date-prop">
                March 2020
            </h1>
        </div>
        <div className="item-desc">
            <a className="item-title" href="/">The Last Land Project</a>
            <p className="item-detail">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <a className="item-read-more">
                <a className="read-more-text" href="/" >Pelajari Lebih lanjut — </a>
            </a>
        </div>
    </div>
  );
}

export default PortfolioItem;
