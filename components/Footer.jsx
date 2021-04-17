import Link from "next/link";
import React from "react";

function Footer(props) {
  return (
    <footer>
      <div className="top-footer">
        <div className="container">
          <div className="footer-1 footer-col">
            <img src="/svg/logo.svg" alt="Logo Kognitif" />
            <small>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </small>

            <div className="footer-social">
              <h4>Social</h4>
              <div className="footer-social-flex">
                <Link href="/">
                  <a>
                    <img src="/svg/whatsapp.svg" alt="" />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <img src="svg/instagram.svg" alt="" />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <img src="svg/dribbble.svg" alt="" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <div className="container">
          <p>kognitif.id</p>
          <h4>Copyright 2021</h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
