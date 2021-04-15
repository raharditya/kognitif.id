import React from "react";
import Link from "next/link";

function BottomCta(props) {
  return (
    <div
      style={{
        padding: "3rem 2rem",
        margin: "6rem 0",
        boxShadow: "0px 4px 20px rgb(64 60 60 / 25%)",
        textAlign: "center",
        borderRadius: "20px",
      }}
    >
      <h2 className="heading-serif">Mari Bekerjasama</h2>
      <small
        style={{
          display: "block",
          width: "40%",
          margin: "0.5rem auto 2rem auto",
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </small>

      <Link href="/pesan">
        <a
          style={{
            display: "inline-block",
            padding: "0.7rem 2rem",
            borderRadius: "50px",
            backgroundColor: "blue",
            fontWeight: "bold",
            color: "white",
            fontSize: "0.9rem",
          }}
        >
          Lihat Paket
        </a>
      </Link>
    </div>
  );
}

export default BottomCta;
