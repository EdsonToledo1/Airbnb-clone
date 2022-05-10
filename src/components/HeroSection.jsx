import React from "react";
import "../styles/HeroSection.css";

import SearchCard from "./SearchCard";

const HeroSection = () => {
  return (
    <div className="HeroSection">
      <SearchCard />
      <div className="HeroSection__img"></div>
    </div>
  );
};

export default HeroSection;
