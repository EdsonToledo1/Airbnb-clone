import React from "react";
import "../styles/HostBanner.css";

const HostBanner = () => {
  return (
    <div className="HostBanner">
      <div className="HostBanner__content">
        <div>
          <h2 className="HostBanner__content__title">
            Anímate a ser anfitrión
          </h2>
          <p className="HostBanner__content__description">
            Puedes ganar hasta $13,878 MXN al mes si compartes tu alojamiento en
            Querétaro.
          </p>
        </div>
        <button className="HostBanner__content__info-button">
          Más información
        </button>
      </div>
    </div>
  );
};

export default HostBanner;
