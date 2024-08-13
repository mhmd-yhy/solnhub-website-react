import React from "react";
import Heading from "../Components/Heading";
import sections from "../assets/data";

export default function Portfolio() {
  return (
    <section className="back-black-3 portfolio">
      <div className="container text-center">
        <Heading title={"Our Portfolio"} />
        <p className="c-grey mb-20 fs-18" style={{lineHeight:"50px"}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet corrupti laboriosam fugit expedita inventore
          temporibus!
        </p>
        <div className="d-grid grid-3 mt-20 gap-20">
          {sections.portfolio.map((value, i) => {
            return (
              <div className="box p-relative cursor-pointer transition c-white">
                <img src={value.image} alt="" className="w-100 h-100" />
                <div className="desc p-absolute z-index-2 opacity-0 w-75">
                  <h2 className="p-20" style={{borderBottom:"1px solid white"}}>{value.title}</h2>
                  <p className="p-20">{value.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
