import React, { useState } from "react";
import FormRow from "../components/FormRow";

function contactUs(props) {
  const [contactForm, setContactForm] = useState({});

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
    </main>
  );
}

export default contactUs;
