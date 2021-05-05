import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Collapsible from "react-collapsible";
import Modal from "react-modal";

import FaqContent from "../components/FaqContent";
import FaqTitle from "../components/FaqTitle";
import BottomCta from "../components/BottomCta";
import PackageItem from "../components/PackageItem";
import FormRow from "../components/FormRow";

function pesan(props) {
  const [modalIsOpen, setIsOpen] = useState(true);

  Modal.setAppElement("#__next");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [modalPosition, setModalPosition] = useState(0);
  const [formBio, setFormBio] = useState({});

  function handleFormChange(form, field, content) {
    switch (form) {
      case "bio":
        const currForm = formBio;
        currForm[field] = content;
        setFormBio(formBio);

        return;

      default:
        return;
    }
  }

  function handleModalPrev() {
    if (modalPosition === 0) {
      return;
    }
    console.log(modalPosition);

    setModalPosition(modalPosition - 1);
  }

  function handleModalNext() {
    if (modalPosition === 3) {
      return;
    }
    console.log(modalPosition);

    setModalPosition(modalPosition + 1);
  }

  return (
    <div className="page-container">
      <Head>
        <title>Paket Website - Kognitif</title>
      </Head>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="modal-container"
        overlayClassName="modal-overlay"
      >
        <div className="modal-inner">
          <div className="form-progress">
            <p className="form-progress-item progress-active">Tipe Website</p>
            <p className="form-progress-item">Data Pemesan</p>
            <p className="form-progress-item">Deskripsi Isi</p>
            <p className="form-progress-item">Verifikasi</p>
          </div>
          <h2 className="heading-serif">Mari Berkenalan!</h2>
          <form>
            <FormRow
              label="Nama Pemesan"
              placeholder="Nama Anda di sini"
              handleFormChange={handleFormChange}
              form="bio"
              field="name"
            />
            <FormRow
              label="Email"
              placeholder="Email Anda di sini"
              handleFormChange={handleFormChange}
              form="bio"
              field="email"
            />
            <FormRow
              label="Nomor Whatsapp"
              placeholder="0852xxxxxxxx"
              handleFormChange={handleFormChange}
              form="bio"
              field="whatsapp"
            />
          </form>

          <div className="modal-nav">
            <button className="modal-nav-prev" onClick={handleModalPrev}>
              Kembali
            </button>
            <button className="modal-nav-next" onClick={handleModalNext}>
              {modalPosition === 3 ? "Lanjut" : "Kirim"}
            </button>
          </div>
        </div>
      </Modal>

      <header className="pkg-header">
        <div className="inner-pkg-header container">
          <h2 className="heading-serif">Paket Website</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            commodi fugit necessitatibus deleniti!
          </p>
        </div>
      </header>

      <div className="pkg-content-container container">
        <section className="pkg-flex">
          <PackageItem openModal={openModal} />
          <PackageItem />
          <PackageItem />
        </section>

        <section className="pkg-detail">
          <div className="pkg-detail-head">
            <div className="pkg-detail-title detail-item">
              <h3 className="heading-serif">Detail Paket</h3>
            </div>
            <div className="pkg-detail-content detail-item">
              <h4>BASIC</h4>
              <Link href="#">
                <a className="heading-bold btn-primary">Pilih paket</a>
              </Link>
            </div>
            <div className="pkg-detail-content detail-item">
              <h4>BASIC</h4>
              <Link href="#">
                <a className="heading-bold btn-primary">Pilih paket</a>
              </Link>
            </div>
            <div className="pkg-detail-content detail-item">
              <h4>BASIC</h4>
              <Link href="#">
                <a className="heading-bold btn-primary">Pilih paket</a>
              </Link>
            </div>
          </div>

          <div className="pkg-detail-body">
            <div className="pkg-detail-title detail-item">
              <h3>Jumlah Halaman</h3>
            </div>
            <div className="pkg-detail-content detail-item">
              <p>Maksimal 3 halaman</p>
            </div>
            <div className="pkg-detail-content detail-item">
              <p>Maksimal 3 halaman</p>
            </div>
            <div className="pkg-detail-content detail-item">
              <p>Maksimal 3 halaman</p>
            </div>
          </div>

          <div className="pkg-detail-body">
            <div className="pkg-detail-title detail-item">
              <h3>Desain responsive</h3>
            </div>
            <div className="pkg-detail-content detail-item">
              <img src="/svg/cross.svg" alt="" />
            </div>
            <div className="pkg-detail-content detail-item">
              <img src="/svg/check.svg" alt="" />
            </div>
            <div className="pkg-detail-content detail-item">
              <img src="/svg/check.svg" alt="" />
            </div>
          </div>

          <div className="pkg-detail-body">
            <div className="pkg-detail-title detail-item">
              <h3>Desain responsive</h3>
            </div>
            <div className="pkg-detail-content detail-item">
              <img src="/svg/cross.svg" alt="" />
            </div>
            <div className="pkg-detail-content detail-item">
              <img src="/svg/check.svg" alt="" />
            </div>
            <div className="pkg-detail-content detail-item">
              <img src="/svg/check.svg" alt="" />
            </div>
          </div>

          <div className="pkg-detail-body">
            <div className="pkg-detail-title detail-item">
              <h3>Desain responsive</h3>
            </div>
            <div className="pkg-detail-content detail-item">
              <img src="/svg/cross.svg" alt="" />
            </div>
            <div className="pkg-detail-content detail-item">
              <img src="/svg/check.svg" alt="" />
            </div>
            <div className="pkg-detail-content detail-item">
              <img src="/svg/check.svg" alt="" />
            </div>
          </div>

          <div className="pkg-detail-body">
            <div className="pkg-detail-title detail-item">
              <h3>Desain responsive</h3>
            </div>
            <div className="pkg-detail-content detail-item">
              <img src="/svg/cross.svg" alt="" />
            </div>
            <div className="pkg-detail-content detail-item">
              <img src="/svg/check.svg" alt="" />
            </div>
            <div className="pkg-detail-content detail-item"></div>
          </div>
        </section>

        <section className="pkg-detail-mobile">
          {/* PAKET BASIC */}
          <div className="detail-mobile-title mobile-basic-header">
            <h3>BASIC</h3>
            <Link href="#">
              <a className="">Pilih paket</a>
            </Link>
          </div>

          <div className="detail-mobile-content">
            <div className="pkg-detail-title detail-item">
              <h4>Desain responsive</h4>
              <p>Max 3 halaman</p>
            </div>

            <div className="pkg-detail-title detail-item">
              <h4>Desain responsive</h4>
              <img src="/svg/check.svg" alt="" />
            </div>

            <div className="pkg-detail-title detail-item">
              <h4>Desain responsive</h4>
              <img src="/svg/check.svg" alt="" />
            </div>
          </div>

          {/* PAKET BUSINESS */}

          <div className="detail-mobile-title mobile-business-header">
            <h3>BASIC</h3>
            <Link href="#">
              <a className="">Pilih paket</a>
            </Link>
          </div>

          <div className="detail-mobile-content">
            <div className="pkg-detail-title detail-item">
              <h4>Desain responsive</h4>
              <p>Max 3 halaman</p>
            </div>

            <div className="pkg-detail-title detail-item">
              <h4>Desain responsive</h4>
              <img src="/svg/check.svg" alt="" />
            </div>

            <div className="pkg-detail-title detail-item">
              <h4>Desain responsive</h4>
              <img src="/svg/check.svg" alt="" />
            </div>
          </div>

          {/* PAKET ECOMMERCE */}

          <div className="detail-mobile-title mobile-ecommerce-header">
            <h3>ECOMMERCE</h3>
            <Link href="#">
              <a className="">Pilih paket</a>
            </Link>
          </div>

          <div className="detail-mobile-content">
            <div className="pkg-detail-title detail-item">
              <h4>Desain responsive</h4>
              <p>Max 3 halaman</p>
            </div>

            <div className="pkg-detail-title detail-item">
              <h4>Desain responsive</h4>
              <img src="/svg/check.svg" alt="" />
            </div>

            <div className="pkg-detail-title detail-item">
              <h4>Desain responsive</h4>
              <img src="/svg/check.svg" alt="" />
            </div>
          </div>
        </section>

        <section className="custom-pkg">
          <div className="custom-pkg-header">
            <h2 className="heading-serif">Paket Custom</h2>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              autem dolorem suscipit?
            </small>
          </div>

          <div className="custom-pkg-grid">
            <Collapsible
              trigger={<FaqTitle title="Apa itu Kognitif?" />}
              triggerStyle={{ cursor: "pointer" }}
              transitionTime={200}
              easing="ease-in-out"
            >
              <FaqContent content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            </Collapsible>
            <Collapsible
              trigger={<FaqTitle title="Apa itu Kognitif?" />}
              triggerStyle={{ cursor: "pointer" }}
              transitionTime={200}
              easing="ease-in-out"
            >
              <FaqContent content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            </Collapsible>
            <Collapsible
              trigger={<FaqTitle title="Apa itu Kognitif?" />}
              triggerStyle={{ cursor: "pointer" }}
              transitionTime={200}
              easing="ease-in-out"
            >
              <FaqContent content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            </Collapsible>
            <Collapsible
              trigger={<FaqTitle title="Apa itu Kognitif?" />}
              triggerStyle={{ cursor: "pointer" }}
              transitionTime={200}
              easing="ease-in-out"
            >
              <FaqContent content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            </Collapsible>
          </div>
        </section>

        <BottomCta />
      </div>
    </div>
  );
}

export default pesan;
