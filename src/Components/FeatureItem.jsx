import React, {useState} from "react";
import {IoMdAdd} from "react-icons/io";

export default function FeatureItem({feature}) {
  const [featureIsOpen, setFeatureIsOpen] = useState(false);
  return (
    <div className={`feature-box p-relative ${featureIsOpen ? "open" : ""}`}>
      <div
        className={`p-15 pb-10 d-flex justify-content-between align-items-center back-black-3 transition ${
          featureIsOpen ? "border-bottom" : ""
        }`}
      >
        <div className="title c-grey fs-22">{feature.title}</div>
        <i
          className="c-crazy-blue cursor-pointer transition"
          style={{fontSize: "36px"}}
          onClick={() => setFeatureIsOpen(!featureIsOpen)}
        >
          <IoMdAdd />
        </i>
      </div>
      <div className={`desc transition c-grey fs-18 mt-15 overflow-hidden  ${featureIsOpen ? "p-20" : ""}`}>
        {feature.text}
      </div>
    </div>
  );
}
