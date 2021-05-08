import React, { useState } from "react";
import Modal from "react-modal";
import FormRow from "../components/FormRow";

function contactUs(props) {
  Modal.setAppElement("#__next");

  const [contactForm, setContactForm] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleFormChange(form, field, content) {
    switch (form) {
      case "contact":
        const currForm = contactForm;
        currForm[field] = content;
        setContactForm(currForm);

        return;

      default:
        return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(contactForm);

    setLoading(true);

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactForm),
    }).then((res) => {
      console.log("Response received");

      setLoading(false);
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setContactForm({});
      } else {
        console.log("Response failed!");
        setSubmitted(false);
        setError(true);
        setContactForm({});
      }
    });
  }

  return (
    <main className="contact-us-page container">
      <div className="image-placeholder"></div>
      <form>
        <h2 className="heading-serif">Kontak Kami</h2>
        <div className="">
          <FormRow
            label="Nama"
            placeholder="Nama Anda di sini"
            handleFormChange={handleFormChange}
            form="contact"
            field="name"
          />
          <FormRow
            label="Email"
            placeholder="Email Anda di sini"
            handleFormChange={handleFormChange}
            form="contact"
            field="email"
          />
          <FormRow
            label="Pesan Anda"
            placeholder="Halo Kognitif!"
            isTextArea
            handleFormChange={handleFormChange}
            form="contact"
            field="msg"
          />
        </div>

        <button onClick={handleSubmit}>Kirim</button>
      </form>

      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Example Modal"
        // className="modal-container"
        // overlayClassName="modal-overlay"
      >
        loading...
      </Modal>
    </main>
  );
}

export default contactUs;
