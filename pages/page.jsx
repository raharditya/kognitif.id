import React from "react";
import Head from "next/head";

function page(props) {
  return (
    <div className="page-main-container">
      <div className="page-article-main-container">
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

        <div className="page-article-container">
          <div className="article-cover"></div>
          <div className="article-date">
            <h1 className="date-props">March 2020</h1>
          </div>
          <div className="article-content">
            <h1 className="heading-serif">The Paul Project</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <div className="article-image"></div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
