import Link from "next/link";
import React, { useState } from "react";

function Nav(props) {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <nav>
      <div className="inner-nav">
        <Link href="/">
          <a>
            <img src="/svg/logo.svg" alt="Logo Kognitif" />
          </a>
        </Link>

        <div className="nav-links">
          <ul className={navToggle ? "nav-open" : ""}>
            <li>
              <Link href="/">
                <a>Beranda</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Portofolio</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>FAQ</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>Tentang Kami</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Kontak</a>
              </Link>
            </li>
            <li>
              <Link href="/pesan">
                <a className="heading-bold btn-primary nav-btn">PESAN</a>
              </Link>
            </li>
          </ul>
        </div>

        <div
          className={`${navToggle ? "toggle" : ""} nav-burger`}
          onClick={() => setNavToggle(!navToggle)}
        >
          <div className={`line-1`}></div>
          <div className={`line-2`}></div>
          <div className={`line-3`}></div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
