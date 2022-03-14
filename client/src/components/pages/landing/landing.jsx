import React from "react";
import About from "./about";
import HeroImage from "./hero-image";
import Team from "./team";

const Landing = () => {
  return (
    <div className="Landing">
      <nav>
        <HeroImage />
        <About />
        <Team/>
      </nav>
    </div>
  );
};
export default Landing;
