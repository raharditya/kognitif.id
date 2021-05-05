import React from "react";

export default function FormRow(props) {
  return (
    <div className="modal-input-row">
      <p>{`${props.label}:`}</p>
      <input
        name="name"
        placeholder={props.placeholder}
        onChange={(e) =>
          props.handleFormChange(props.form, props.field, e.target.value)
        }
      />
    </div>
  );
}
