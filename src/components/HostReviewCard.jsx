import React from "react";
import "../styles/HostReviewCard.css";

const HostReviewCard = ({ img, description }) => {
  return (
    <div className="HostReviewCard">
      <img src={img} alt="" className="HostReviewCard__img" />
      <h3 className="HostReviewCard__description">{description}</h3>
    </div>
  );
};

export default HostReviewCard;
