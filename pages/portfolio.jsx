import React from "react";
import Head from "next/head";
import Link from "next/link";

import PortfolioItem from "../components/PortfolioItem";

function portfolio (props) {
    return(
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
                        portfolioDate= "March 2020"
                        portfolioTitle= "The Paul Project"
                        portfolioDesc= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        portfolioLink="/pesan"
                    />
                     <PortfolioItem 
                        portfolioDate= "May 2020"
                        portfolioTitle= "The Drinko Drink"
                        portfolioDesc= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        portfolioLink="/pesan"
                    />
                     <PortfolioItem 
                        portfolioDate= "March 2020"
                        portfolioTitle= "The Paul Project"
                        portfolioDesc= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        portfolioLink="/pesan"
                    />
                    <PortfolioItem 
                        portfolioDate= "March 2020"
                        portfolioTitle= "The Paul Project"
                        portfolioDesc= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        portfolioLink="/pesan"
                    />
                     <PortfolioItem 
                        portfolioDate= "March 2020"
                        portfolioTitle= "The Paul Project"
                        portfolioDesc= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        portfolioLink="/pesan"
                    />
                     <PortfolioItem 
                        portfolioDate= "March 2020"
                        portfolioTitle= "The Paul Project"
                        portfolioDesc= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        portfolioLink="/pesan"
                    />
                </div>
            </div>
        </div>
    )
}

export default portfolio;