import React from "react";
import "../styles/Home.css";

import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import HostBanner from "../components/HostBanner";
import ReviewSection from "../components/ReviewSection";
import ServiceInfoSection from "../components/ServiceInfoSection";
import JustBookedSection from "../components/JustBookedSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <HeroSection />
      <HostBanner />
      <ReviewSection />
      <ServiceInfoSection />
      <JustBookedSection />
      <Footer />
    </div>
  );
};

export default Home;
