import React from "react";
import FormRow from "../FormRow";

function orderForm1(props) {
  return (
    <>
      <h2 className="heading-serif">Apa kebutuhan Anda?</h2>
      <form>
        <FormRow
          label="Nama Usaha"
          placeholder="Nama usaha di sini"
          handleFormChange={props.handleFormChange}
          form="business"
          field="businessName"
        />
        <FormRow
          label="Email"
          placeholder="Email Anda di sini"
          handleFormChange={props.handleFormChange}
          form="business"
          field="webType"
        />
        <FormRow
          label="Bidang usaha"
          placeholder="0852xxxxxxxx"
          handleFormChange={props.handleFormChange}
          form="business"
          field="businessField"
        />
        <FormRow
          isTextArea
          label="Deskripsikan kebutuhan Anda"
          placeholder="0852xxxxxxxx"
          handleFormChange={props.handleFormChange}
          form="business"
          field="businessNeeds"
        />
      </form>
    </>
  );
}

export default orderForm1;
