import React from "react";
import "../styles/JustBookedCard.css";

import { AiFillStar } from "react-icons/ai";

const JustBookedCard = (props) => {
  return (
    <div className="JustBookedCard">
      <img
        src={props.home.imageUrl}
        alt="Just booked image"
        className="JustBookedCard__img"
      />
      <div className="JustBookedCard__accommodation">
        <p className="JustBookedCard__accommodation__title">
          {props.home.title}
        </p>
        <span className="JustBookedCard__accommodation__review">
          <AiFillStar className="star-icon" /> {props.home.averageEvaluation}{" "}
          {`(${props.home.evaluations.length})`}
        </span>
      </div>
      <p className="JustBookedCard__description">{props.home.caption}</p>
      <p className="JustBookedCard__price">
        <b>{`$${props.home.price}`}</b> por noche
      </p>
    </div>
  );
};

export default JustBookedCard;
