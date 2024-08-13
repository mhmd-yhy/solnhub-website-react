import React from "react";
import {Link} from "react-router-dom";
import {FaTelegramPlane} from "react-icons/fa";
export default function Landing() {
  return (
    <section className="landing-back p-relative d-flex justify-content-center align-items-center">
      <div className="container text-center " style={{zIndex: "100"}}>
        <div className="">
          <h1 className="fw-800 mb-20">Marketing Solution Agency</h1>
          <p className="fs-26 c-white mb-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste doloremque dolore quia omnis maxime corporis
            deserunt neque voluptatum.
          </p>
          <button className="btnStarted back-transparent border-none fs-26">
            <Link
              className="d-flex gap-5 c-white py-5 px-15"
              to={"/"}
              style={{
                border: "3px solid var(--clr-robin-blue)",
              }}
            >
              <FaTelegramPlane /> Get Started
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
