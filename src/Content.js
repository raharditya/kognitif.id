import React from "react";

import { ReactComponent as Center } from "./assets/center.svg";
import { ReactComponent as Phone } from "./assets/phone.svg";
import { ReactComponent as Www } from "./assets/www.svg";
import { ReactComponent as Water1 } from "./assets/water-1.svg";
import { ReactComponent as TopPaper } from "./assets/top-paper.svg";
import { ReactComponent as Water2 } from "./assets/water-2.svg";
import { ReactComponent as Laptop } from "./assets/laptop.svg";
import { ReactComponent as BottomPaper } from "./assets/bottom-paper.svg";
import { ReactComponent as Water3 } from "./assets/water-3.svg";
import { ReactComponent as Rss } from "./assets/rss.svg";

export default function Content() {
  return (
    <div>
      <nav className="main-wrapper">
        <div className="line"></div>
        <p>2020</p>
      </nav>

      <div class="desktop-flex">
        <header className="main-wrapper">
          <h1 className="main-title">Kognitif.id</h1>
          <h2>
            Making Your
            <br />
            Next
            <span className="emphasis-text">
              &nbsp;Awesome
              <br />
              Website
            </span>
          </h2>
        </header>

        <section>
          <Center className="img-center" />
          <Phone className="img-phone" />
          <Www className="img-www" />
          <Water1 className="img-water-1" />
          <TopPaper className="img-top-paper" />
          <Water2 className="img-water-2" />
          <Laptop className="img-laptop" />
          <BottomPaper className="img-bottom-paper" />
          <Water3 className="img-water-3" />
          <Rss className="img-rss" />
        </section>
      </div>

      <footer>
        <p>Coming Soon</p>
      </footer>
    </div>
  );
}
