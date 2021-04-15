import React from "react";

function SectionHeader(props) {
  return (
    <div
      className="section-header"
      style={props.isCenter ? { textAlign: "center" } : {}}
    >
      <div className="section-category">{props.category.toUpperCase()}</div>
      <h2 className="section-header-title heading-serif">
        {props.sectionTitle}
      </h2>
    </div>
  );
}

export default SectionHeader;
