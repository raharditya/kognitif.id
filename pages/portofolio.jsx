import React from "react";
import Head from "next/head";

import PortfolioItem from "../components/PortfolioItem";

function portfolio(props) {
  return (
    <div className="portfolio-main-container">
      <div className="portfolio-container">
        <Head>
          <title>Portfolio</title>
        </Head>

        <header className="pkg-header">
          <div className="inner-pkg-header container">
            <h2 className="heading-serif">Portfolio</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              commodi fugit necessitatibus deleniti!
            </p>
          </div>
        </header>

        <div className="article-container">
          <PortfolioItem
            portfolioDate="March 2020"
            portfolioTitle="The Paul Project"
            portfolioDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            portfolioLink="/pesan"
          />
          <PortfolioItem
            portfolioDate="May 2020"
            portfolioTitle="The Drinko Drink"
            portfolioDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            portfolioLink="/pesan"
          />
          <PortfolioItem
            portfolioDate="September 2019"
            portfolioTitle="Manggo Juice Website"
            portfolioDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            portfolioLink="/pesan"
          />
          <PortfolioItem
            portfolioDate="January 2021"
            portfolioTitle="Bank Island"
            portfolioDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            portfolioLink="/pesan"
          />
          <PortfolioItem
            portfolioDate="December 2020"
            portfolioTitle="Shade of Mark App"
            portfolioDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            portfolioLink="/pesan"
          />
          <PortfolioItem
            portfolioDate="April 2020"
            portfolioTitle="Lost in the Junggle Park"
            portfolioDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            portfolioLink="/pesan"
          />
        </div>
      </div>
    </div>
  );
}

export default portfolio;
