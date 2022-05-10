import React from "react";
import "../styles/HostFooter.css";

const HostFooter = () => {
  return (
    <div className="HostFooter">
      <video
        loop
        autoPlay
        muted
        preload="auto"
        playsInline
        className="HostFooter__video"
      >
        <source
          src="https://a0.muscache.com/v/9a/7a/9a7ad4a1-cfab-5f7d-96e6-fda8abceabe7/9a7ad4a1cfab5f7d96e6fda8abceabe7_4000k_1.mp4"
          type="video/mp4"
        />
      </video>
      <div className="HostFooter__caption">
        <h2 className="HostFooter__caption__title">
          Prueba la experiencia de ser anfitrión en Airbnb
        </h2>
        <p className="HostFooter__caption__description">
          Únete a la comunidad. Te ayudaremos en cada paso del proceso.
        </p>
        <button className="HostFooter__caption__button">!Vamos!</button>
      </div>
    </div>
  );
};

export default HostFooter;
