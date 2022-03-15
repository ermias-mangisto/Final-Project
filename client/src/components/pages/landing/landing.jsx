import React from "react";
import Footer from "../../parts/footer/footer";
import NavBar from "../../parts/navbar/navbar";
import About from "./about";
import HeroImage from "./hero-image";
import Team from "./team";

const Landing = () => {
  return (
    <div className="Landing">

        
      <NavBar/>
        <HeroImage />
        <About />
        <Team/>
        <Footer/>
      
    </div>
  );
};
export default Landing;
