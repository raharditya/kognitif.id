import React from "react";

export default function FormRow(props) {
  return (
    <div className="input-row">
      <p>{`${props.label}:`}</p>
      {!props.isTextArea ? (
        <input
          name={props.field}
          required
          type={
            props.field === "name"
              ? "name"
              : props.field === "email"
              ? "email"
              : "text"
          }
          placeholder={props.placeholder}
          onChange={(e) =>
            props.handleFormChange(props.form, props.field, e.target.value)
          }
        />
      ) : (
        <textarea
          placeholder={props.placeholder}
          required
          rows="10"
          onChange={(e) =>
            props.handleFormChange(props.form, props.field, e.target.value)
          }
        ></textarea>
      )}
    </div>
  );
}
