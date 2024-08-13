import React from "react";
import Landing from "./Landing";
import Services from "../Pages/Services";
import About from "../Pages/About";
import Qualities from "../Pages/Qualities";
import Features from "../Pages/Features";
import Portfolio from "../Pages/Portfolio";
import Testimonials from "../Pages/Testimonials";
import Contact from "../Pages/Contact";
export default function Home() {
  return (
    <div>
      <Landing />
      <Services />
      <About />
      <Qualities />
      <Features />
      <Portfolio />
      <Testimonials />
      <Contact/>
    </div>
  );
}
