import React from "react";
import Heading from "../Components/Heading";
import sections from "../assets/data";
import img from "../assets/images/about_main_img.jpg";
export default function About() {
  const about = sections.about;
  return (
    <section className="about back-black-2 back-black-3">
      <div className="container">
        <div className="d-grid grid-2 align-items-center gap-30">
          <div className="image">
            <img className="w-100" src={img} alt="" />
          </div>
          <div className="desc">
            <Heading title="about us" />
            {about.map((value, i) => {
              return <p className="c-grey fs-22">{value.text}</p>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
