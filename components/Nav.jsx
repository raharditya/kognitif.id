import Link from "next/link";
import React from "react";

function Nav(props) {
  return (
    <nav>
      <div className="inner-nav">
        <img src="/svg/logo.svg" alt="Logo Kognitif" />

        <div className="">
          <ul>
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
      </div>
    </nav>
  );
}

export default Nav;
