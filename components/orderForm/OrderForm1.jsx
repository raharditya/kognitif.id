import React from "react";
import FormRow from "../FormRow";

function orderForm1(props) {
  return (
    <>
      <h2 className="heading-serif">Mari Berkenalan!</h2>
      <form>
        <FormRow
          label="Nama Pemesan"
          placeholder="Nama Anda di sini"
          handleFormChange={props.handleFormChange}
          form="bio"
          field="name"
        />
        <FormRow
          label="Email"
          placeholder="Email Anda di sini"
          handleFormChange={props.handleFormChange}
          form="bio"
          field="email"
        />
        <FormRow
          label="Nomor Whatsapp"
          placeholder="0852xxxxxxxx"
          handleFormChange={props.handleFormChange}
          form="bio"
          field="whatsapp"
        />
      </form>
    </>
  );
}

export default orderForm1;
