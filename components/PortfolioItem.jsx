import React from "react";
import Link from "next/link";

function PortfolioItem(props) {
  return (
    <div className="item-container">
      <div className="item-thumbnail"></div>
      <div className="item-date">
        <h1 className="date-prop">{props.portfolioDate}</h1>
      </div>
      <div className="item-desc">
        <Link href={props.portfolioLink}>
          <a className="item-title">{props.portfolioTitle}</a>
        </Link>
        <p className="item-detail">{props.portfolioDesc}</p>
        <Link href={props.portfolioLink}>
          <a className="item-read-more">
            <a className="read-more-text" href="/">
              Pelajari Lebih lanjut —{" "}
            </a>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default PortfolioItem;
