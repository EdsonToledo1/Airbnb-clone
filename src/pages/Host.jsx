import React from "react";
import "../styles/Host.css";

import HostHeader from "../components/HostHeader";
import HostNavBar from "../components/HostNavBar";
import HostReviewSection from "../components/HostReviewSection";
import AskSuperHostBanner from "../components/AskSuperHostBanner";
import AircoverBanner from "../components/AircoverBanner";
import HostFooter from "../components/HostFooter";

const Host = () => {
  const [isHidden, setIsHidden] = React.useState(true);
  React.useEffect(() => {
    window.addEventListener("scroll", showNavBar);
  }, []);

  const showNavBar = () => {
    if (window.scrollY > window.innerHeight) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

  return (
    <div className="Host">
      <div className={`Host__NavBar ${isHidden && "Host__NavBar--hidden"}`}>
        <HostNavBar />
      </div>
      <HostHeader />
      <HostReviewSection />
      <div className="Host__host-earning-section">
        <h2 className="Host__host-earning-section__title">
          Comparte tu alojamiento entero para 4 huespedes en Querétaro y recibe
          ingresos de hasta $13,954 MXN/mes
        </h2>
      </div>
      <AskSuperHostBanner />
      <AircoverBanner />
      <HostFooter />
    </div>
  );
};

export default Host;
