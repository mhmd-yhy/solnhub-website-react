import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Home from "../Home/Home";
import Services from "./Services";
import Qualities from "./Qualities";
import About from "./About";
import Contact from "./Contact";

export default function Pages() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/Qualities" element={<Qualities />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
