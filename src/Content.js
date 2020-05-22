import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import { Tween } from "react-gsap";

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

import { ReactComponent as LineBottom } from "./assets/mobile-bottom.svg";
import { ReactComponent as LineTop } from "./assets/mobile-top.svg";

import { TweenLite } from "gsap/gsap-core";

export default function Content() {
  let header = useRef(null);
  let mainTitle = useRef(null);

  let navLine = useRef(null);
  let navYear = useRef(null);

  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);

  useEffect(() => {
    TweenLite.to(header, 0, { css: { visibility: "visible" } });
    TweenLite.staggerFrom(
      [navLine, navYear],
      1,
      {
        scaleX: 0,
        xPercent: -60,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.2
    );
    TweenMax.from(mainTitle, 2, {
      opacity: 0,
      yPercent: 100,
      ease: Power3.easeOut,
      delay: 0.3,
    });
    TweenMax.staggerFrom(
      [line1, line2, line3],
      1.5,
      {
        yPercent: 100,
        ease: Power3.easeOut,
        delay: 1,
      },
      0.2
    );
  }, []);
  return (
    <div className="content-wrapper">
      <div className="line-top">
        <LineTop />
      </div>
      <nav className="main-wrapper">
        <div className="line" ref={(el) => (navLine = el)}></div>
        <p ref={(el) => (navYear = el)}>2020</p>
      </nav>

      <div class="desktop-flex">
        <header className="main-wrapper" ref={(el) => (header = el)}>
          <h1 className="main-title" ref={(el) => (mainTitle = el)}>
            Kognitif.id
          </h1>
          <div className="hero-text">
            <h2>
              <span className="text-show" ref={(el) => (line1 = el)}>
                Making Your
              </span>
            </h2>
            <h2>
              <span className="text-show" ref={(el) => (line2 = el)}>
                Next
                <span className="emphasis-text">&nbsp;Awesome</span>
              </span>
            </h2>
            <h2>
              <span
                className="text-show emphasis-text"
                ref={(el) => (line3 = el)}
              >
                Websites.
              </span>
            </h2>
          </div>
        </header>

        <section>
          <Tween
            from={{ y: "-20%", opacity: 0 }}
            duration={4}
            stagger={0.2}
            delay={2}
            ease="elastic.out(0.2, 0.1)"
          >
            <Center className="img-center" />
            <Www className="img-www" />
            <Water1 className="img-water-1" />
            <Laptop className="img-laptop" />
            <Phone className="img-phone" />
            <TopPaper className="img-top-paper" />
            <BottomPaper className="img-bottom-paper" />
            <Water2 className="img-water-2" />
            <Rss className="img-rss" />
            <Water3 className="img-water-3" />
          </Tween>
        </section>
      </div>

      <footer>
        <Tween from={{ opacity: 0 }} duration={1} delay={5}>
          <p>Coming Soon</p>
        </Tween>
      </footer>

      <div className="line-bottom">
        <LineBottom />
      </div>
    </div>
  );
}
