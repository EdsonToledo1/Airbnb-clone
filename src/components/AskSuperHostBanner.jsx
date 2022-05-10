import React from "react";
import "../styles/AskSuperHostBanner.css";

const AskSuperHostBanner = () => {
  return (
    <div className="AskSuperHostBanner">
      <div className="AskSuperHostBanner__content">
        <h2 className="AskSuperHostBanner__content__title">
          Tienes dudas acerca de hospedar? Pregúntale a un Superanfitrión.
        </h2>
        <button className="AskSuperHostBanner__content__button">
          Más información
        </button>
      </div>
    </div>
  );
};

export default AskSuperHostBanner;
