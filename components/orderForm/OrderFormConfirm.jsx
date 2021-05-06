import React from "react";

function OrderFormConfirm(props) {
  return (
    <>
      <h2 className="heading-serif">Sudah kelihatan benar?</h2>
      <div className="order-confirm-container">
        <div className="package-detail">
          <p>Pengembangan Website</p>
          <h4>Paket Business</h4>
          <small>1 tahun kontrak</small>
        </div>

        <div className="personal-detail confirm-detail-section">
          <div className="detail-item">
            <small>Nama Pemesan:</small>
            <p>Adit Raharditya</p>
          </div>

          <div className="detail-item">
            <small>Email:</small>
            <p>someemail@gmail.com</p>
          </div>

          <div className="detail-item">
            <small>Nomor Whatsapp:</small>
            <p>085382857394</p>
          </div>
        </div>

        <div className="company-detail confirm-detail-section">
          <div className="detail-item">
            <small>Nama Usaha:</small>
            <p>Testing Satu Dua Tiga</p>
          </div>

          <div className="detail-item">
            <small>Tipe Website:</small>
            <p>Company profile</p>
          </div>

          <div className="detail-item">
            <small>Bidang Usaha:</small>
            <p>Konstruksi</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderFormConfirm;
