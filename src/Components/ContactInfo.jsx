import React from "react";
import sections from "../assets/data";
import {IoArrowForwardCircleOutline} from "react-icons/io5";
export default function ContactInfo() {
  return (
    <section className="contact-info back-black-2">
      <div className="container">
        <div className="d-grid grid-3 gap-30 text-center">
          {sections.contact.map((value, i) => {
            return (
              <div className="box p-20 back-black-3 cursor-pointer p-relative transition">
                <i className="icon c-robin-blue mt-20" style={{fontSize: "36px"}}>
                  {value.icon}
                </i>
                <h2 className="c-white fs-22 mb-15">{value.info}</h2>
                <p className="c-grey fs-18 mb-20">{value.text}</p>
                <i className="c-grey" style={{fontSize: "36px"}}>
                  <IoArrowForwardCircleOutline />
                </i>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
