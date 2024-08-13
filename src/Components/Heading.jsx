import React from "react";

export default function Heading({title}) {
  return (
    <div>
      <h1 style={{fontSize: "46px", lineHeight: "1.2"}} className="c-white fw-800 text-capitalize mb-20">
        {title}
      </h1>
    </div>
  );
}
