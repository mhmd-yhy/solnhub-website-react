import React from "react";
import sections from "../assets/data";
import {FaRegArrowAltCircleRight} from "react-icons/fa";
export default function Services() {
  const services = sections.services;
  return (
    <section className="back-black-2">
      <div className="container">
        <div className="d-grid grid-3 gap-20 ">
          {services.map((value, i) => {
            return (
              <div className="service-card p-20 back-black-3 text-center transition cursor-pointer position-relative">
                <i className="item-icon c-crazy-blue fs-26">{value.icon}</i>
                <h2 className="c-white fs-22 mb-20">{value.title}</h2>
                <p className="c-grey mb-20">{value.text}</p>
                <i className="c-grey fs-26 transition">
                  <FaRegArrowAltCircleRight />
                </i>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
