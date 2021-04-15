import React from "react";

function FaqTitle(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px",
        border: "1px solid #dfdfdf",
        borderRadius: "10px",
        marginTop: props.index === 0 ? "0" : "1rem",
      }}
    >
      <h4>{props.title}</h4>
      <img src="/svg/chevron.svg" alt="" style={{ width: 15 }} />
    </div>
  );
}

export default FaqTitle;
