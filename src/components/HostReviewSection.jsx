import React from "react";
import "../styles/HostReviewSection.css";

import HostReviewCard from "./HostReviewCard";
import hostImg1 from "../assets/host-1.webp";
import hostImg2 from "../assets/host-2.webp";
import hostImg3 from "../assets/host-3.webp";
import hostImg4 from "../assets/host-4.webp";
import hostImg5 from "../assets/host-5.webp";
import hostImg6 from "../assets/host-6.webp";

const HostReviewSection = () => {
  return (
    <div className="HostReviewSection">
      <h2 className="HostReviewSection__title">
        Hospeda donde quieras, cuando quieras
      </h2>
      <div className="HostReviewSection__slider">
        <HostReviewCard
          img={hostImg1}
          description="Airbnb me permitió dedicarme a lo que más me gusta: ofrecer un trato excelente a los huéspedes en nuestra propia casa."
        />
        <HostReviewCard
          img={hostImg2}
          description="Compartir mi tienda beduina me ha permitido conocer a gente de todo el mundo."
        />
        <HostReviewCard
          img={hostImg3}
          description="Me encanta compartir mi espacio ecológico para que las personas puedan conectarse con la naturaleza y sus seres queridos."
        />
        <HostReviewCard
          img={hostImg4}
          description="Compartir mi estudio cambió mi vida y me ha llenado de experiencias y personas memorables."
        />
        <HostReviewCard
          img={hostImg5}
          description="Recibir huéspedes en mi casa me permitió emprender un negocio que me abrió las puertas a la libertad financiera."
        />
        <HostReviewCard
          img={hostImg6}
          description="Ofrecer esta experiencia de elaboración de pasta es una forma de mantener viva nuestra cultura."
        />
      </div>
    </div>
  );
};

export default HostReviewSection;
