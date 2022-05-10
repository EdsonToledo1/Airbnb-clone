import React from "react";
import "../styles/ReviewCard.css";

import profilePic from "../assets/profile-pic.jpeg";
import { AiFillStar } from "react-icons/ai";

const ReviewCard = (props) => {
  return (
    <div className="ReviewCard">
      <img
        src={props.review.imageUrl}
        alt="Home image"
        className="ReviewCard__img"
      />
      <div className="ReviewCard__evaluation">
        <AiFillStar className="ReviewCard__evaluation__star" />
        <AiFillStar className="ReviewCard__evaluation__star" />
        <AiFillStar className="ReviewCard__evaluation__star" />
        <AiFillStar className="ReviewCard__evaluation__star" />
        <AiFillStar className="ReviewCard__evaluation__star" />
      </div>
      <p className="ReviewCard__comment">{`"${props.review.review}"`}</p>
      <div className="ReviewCard__user-info">
        <img
          src={props.review.user.imageUrl}
          alt="Profile pic"
          className="ReviewCard__user-info__img"
        />
        <div>
          <p className="ReviewCard__user-info__name">
            {props.review.user.userName}
          </p>
          <p className="ReviewCard__user-info__location">
            {props.review.user.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
