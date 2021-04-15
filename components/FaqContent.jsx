import React from "react";

function FaqContent(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px",
        border: "1px solid #dfdfdf",
        borderRadius: "10px",
        marginTop: "0.3rem",
      }}
    >
      <p style={{ margin: 0, fontSize: "0.9rem" }}>{props.content}</p>
    </div>
  );
}

export default FaqContent;
