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
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                </div>
            </div>
        </div>
    )
}

export default portfolio;