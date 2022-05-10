import React from "react";
import "../styles/ServiceInfoItem.css";

const ServiceInfoItem = ({ icon, title, description }) => {
  return (
    <div className="ServiceInfoItem">
      <div className="ServiceInfoItem__icon">{icon}</div>
      <h4 className="ServiceInfoItem__title">{title}</h4>
      <p className="ServiceInfoItem__description">{description}</p>
    </div>
  );
};

export default ServiceInfoItem;
