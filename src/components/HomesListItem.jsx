import React from "react";
import "../styles/HomesListItem.css";

import { AiFillStar } from "react-icons/ai";

const HomesListItem = ({ home }) => {
  return (
    <div className="HomesListItem">
      <div className="divider"></div>
      <div className="HomesListItem__container">
        <img
          className="HomesListItem__img"
          src={home.imageUrl}
          alt="Home image"
        />
        <div className="HomesListItem__description">
          <div>
            <p className="HomesListItem__description__caption">
              {home.caption}
            </p>
            <p className="HomesListItem__description__title">{home.title}</p>
            <div className="divider"></div>
            <p className="HomesListItem__description__detail">{home.detail}</p>
            <p className="HomesListItem__description__amenities">
              {home.amenities}
            </p>
          </div>
          <div>
            <div className="HomesListItem__description__bottom">
              <div>
                <AiFillStar className="evaluation__star" />
                <span className="average">{`${home.averageEvaluation}`}</span>
                <span className="evaluations">{`${home.evaluations.length} evaluaciones`}</span>
              </div>
              <p className="price">{`${home.price} ${home.currency}/Noche`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomesListItem;
