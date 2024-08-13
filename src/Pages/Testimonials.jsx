import React from "react";
import Heading from "../Components/Heading";
import sections from "../assets/data";
import {MdStar} from "react-icons/md";
export default function Testimonials() {
  let starsList;
  const showRating = (starCount) => {
    starsList = [];
    for (let i = 0; i < starCount; i++) {
      starsList[i] = <MdStar className="c-robin-blue" />;
    }
  };
  return (
    <section className="testimonials back-black-2 text-center">
      <div className="container">
        <Heading title={"Customer Testimonials"} />
        <p className="c-grey mb-20 fs-18" style={{lineHeight: "50px"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias voluptatum, tempore dignissimos
          perferendis ea.
        </p>
        <div className="d-grid grid-3 gap-30">
          {sections.testimonials.map((value, i) => {
            showRating(value.rating);
            return (
              <div className="box p-20 back-black-3 transition p-relative">
                <img
                  className="border-radius-50 mt-20 mb-20"
                  src={value.image}
                  alt=""
                  style={{width: "100px", height: "100px"}}
                />
                <h2 className="c-white mb-15">{value.name}</h2>
                <h3 className="c-grey mb-15">{value.text}</h3>
                <ul className="d-flex gap-10 justify-content-center">
                  {starsList.map((star, index) => {
                    return <li>{star}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
