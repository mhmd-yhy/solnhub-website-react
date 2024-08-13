import React from "react";
import Heading from "../Components/Heading";
import sections from "../assets/data";
import image from "../assets/images/professionals_main_img.jpg";
export default function Qualities() {
  const qualities = sections.qualities;
  return (
    <section className="qualities back-black-2">
      <div className="container">
        <div className="d-grid grid-2 gap-30 align-items-center">
          <div className="desc">
            <Heading title={"We are Professionals"} />
            <p className="c-grey mb-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptates deserunt, molestiae soluta cumque
              eum.
            </p>
            {qualities.map((value, i) => {
              return (
                <div className="item d-flex align-items-center gap-30 mb-20">
                  <span className="c-crazy-blue fs-26">{value.icon}</span>
                  <div>
                    <h2 className="c-white mb-10">{value.title}</h2>
                    <p className="c-grey">{value.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="image">
            <img className="w-100 mt-20" src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
