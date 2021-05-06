import React from "react";

export default function FormRow(props) {
  return (
    <div className="modal-input-row">
      <p>{`${props.label}:`}</p>
      {!props.isTextArea ? (
        <input
          name="name"
          placeholder={props.placeholder}
          onChange={(e) =>
            props.handleFormChange(props.form, props.field, e.target.value)
          }
        />
      ) : (
        <textarea
          placeholder={props.placeholder}
          rows="10"
          onChange={(e) =>
            props.handleFormChange(props.form, props.field, e.target.value)
          }
        ></textarea>
      )}
    </div>
  );
}
