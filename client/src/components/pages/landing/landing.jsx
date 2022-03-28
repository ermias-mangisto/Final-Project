import React from "react";
import About from "./about";
import HeroImage from "./hero-image";
import Team from "./team";
import  "./landing.css"
const Landing = () => {

  return (
    <div className="Landing">


        <HeroImage />
        <About />
        <Team/>
      
    </div>
  );
};
export default Landing;
