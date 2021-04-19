import React from "react";
import Link from "next/link";

function PackageItem(props) {
  return (
    <div className="pkg-item">
      <div className="pkg-item-header">
        <h4>BASIC</h4>
      </div>

      <div className="pkg-subtitle">
        <small>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          vel quos dignissimos doloribus.
        </small>
      </div>
      <h3 className="pkg-price">Rp 799.000</h3>

      <div className="pkg-item-feature">
        <div className="feature-inner">
          <img src="/svg/check.svg" alt="" />
          <p>3 Halaman</p>
        </div>
      </div>
      <div className="pkg-item-feature">
        <div className="feature-inner">
          <img src="/svg/check.svg" alt="" />
          <p>3 Halaman</p>
        </div>
      </div>
      <div className="pkg-item-feature">
        <div className="feature-inner">
          <img src="/svg/check.svg" alt="" />
          <p>3 Halaman</p>
        </div>
      </div>
      <div className="pkg-item-feature">
        <div className="feature-inner">
          <img src="/svg/check.svg" alt="" />
          <div className="">
            <p>3 Halaman</p>
            <small className="pkg-sub-feature">
              Tambah 100k untuk domain .com
            </small>
          </div>
        </div>
      </div>

      <div className="pkg-cta-container">
        <Link href="#">
          <a className="heading-bold btn-primary">Pilih Paket</a>
        </Link>
      </div>
    </div>
  );
}

export default PackageItem;
