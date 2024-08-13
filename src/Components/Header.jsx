import React, {useState} from "react";
import {Link} from "react-router-dom";
import sections from "../assets/data";
import {IoMdRocket} from "react-icons/io";
export default function Header() {
  const [navOpenClose, setNavOpenClose] = useState(false);
  const handleClick = () => {
    setNavOpenClose(!navOpenClose);
  };
  return (
    <header className="back-black p-relative" style={{height: "64px", lineHeight: "64px"}}>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center c-white fw-600">
          <div className="logo fs-26" style={{flexGrow: "1"}}>
            SolnHub
          </div>
          <div className="linksBox d-flex justify-content-center gap-30">
            <div className={`toggler d-none ${navOpenClose ? "toggler-change" : ""}`}>
              <button className="back-transparent cursor-pointer border-none" onClick={() => handleClick()}>
                <div className="bar-top back-white mb-10 transition" style={{width: "40px", height: "3px"}}></div>
                <div className="bar-middle back-white mb-10 transition" style={{width: "40px", height: "3px"}}></div>
                <div className="bar-bottom back-white mb-10 transition" style={{width: "40px", height: "3px"}}></div>
              </button>
            </div>
            <div className={`linkCollap ${navOpenClose ? "open" : ""} d-flex justify-content-center gap-30 transition`}>
              <ul className="links d-flex justify-content-center gap-30 f-20">
                {sections.links.map((value, i) => {
                  return (
                    <li className="fw-400 transition">
                      <Link className="w-100 d-block c-white transition" to={value.url}>
                        {value.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul className="sosial-links d-flex justify-content-between align-items-center fs-26">
                {sections.sosial.map((value, i) => {
                  return <li className="d-flex mr-10 c-white transition cursor-pointer">{value.icon}</li>;
                })}
              </ul>
              <button className="btnStarted back-transparent border-none fs-20">
                <Link
                  className="d-flex gap-5 c-white py-5 px-15"
                  to={"/"}
                  style={{
                    border: "3px solid var(--clr-robin-blue)",
                  }}
                >
                  <IoMdRocket /> Get Started
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
