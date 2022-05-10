import React from "react";
import "../styles/SearchCard.css";

import { useNavigate } from "react-router-dom";
import { Context } from "../context/context";

const SearchCard = () => {
  const navigate = useNavigate();

  const { searchValue, setSearchValue } = React.useContext(Context);

  const [locationInputFocus, setLocationInputFocus] = React.useState(false);
  const [arrivalDateInputFocus, setArrivalDateInputFocus] =
    React.useState(false);
  const [departureDateInputFocus, setDepartureInputDateFocus] =
    React.useState(false);
  const [adultsInputFocus, setAdultsInputFocus] = React.useState(false);
  const [childrenInputFocus, setChildrenInputFocus] = React.useState(false);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleLocationOnFocus = () => {
    setLocationInputFocus(!locationInputFocus);
  };
  const handleArrivalDateOnFocus = () => {
    setArrivalDateInputFocus(!arrivalDateInputFocus);
  };

  const handleDepartureDateOnFocus = () => {
    setDepartureInputDateFocus(!departureDateInputFocus);
  };

  const handleAdultsOnFocus = () => {
    setAdultsInputFocus(!adultsInputFocus);
  };

  const handleChildrenOnFocus = () => {
    setChildrenInputFocus(!childrenInputFocus);
  };

  const handleSubmit = (event) => {
    const adults = event.target.adults.value;
    const children = event.target.children.value;
    const checkIn = event.target.arrival.value;
    const checkOut = event.target.departure.value;
    navigate(
      `homes/${searchValue}?adults=${adults}&children=${children}&checkin=${checkIn}&checkout=${checkOut}`
    );
  };

  return (
    <form onSubmit={handleSubmit} className="SearchCard">
      <div className="SearchCard__container">
        <h1 className="SearchCard__title">Busca alojamientos en Airbnb</h1>
        <p className="SearchCard__subtitle">
          Descubre alojamientos enteros y habitaciones privadas, perfectos para
          cualquier viaje.
        </p>
        <div
          className={`SearchCard__location-field ${
            locationInputFocus && "SearchCard__location-field--focused"
          }`}
        >
          <label htmlFor="location-field">UBICACIÓN</label>
          <input
            type="text"
            id="location-field"
            name="location-field"
            placeholder="Cerca de aquí"
            value={searchValue}
            onChange={onSearchValueChange}
            onFocus={handleLocationOnFocus}
            onBlur={handleLocationOnFocus}
          />
        </div>
        <div className="SearchCard__dates-field">
          <div
            className={`SearchCard__dates-field__arrival ${
              arrivalDateInputFocus &&
              "SearchCard__dates-field__arrival--focused"
            }`}
          >
            <label htmlFor="arrival-field">LLEGADA</label>
            <input
              type="date"
              id="arrival-field"
              name="arrival"
              onFocus={handleArrivalDateOnFocus}
              onBlur={handleArrivalDateOnFocus}
            ></input>
          </div>
          <div
            className={`SearchCard__dates-field__departure ${
              departureDateInputFocus &&
              "SearchCard__dates-field__departure--focused"
            }`}
          >
            <label htmlFor="departure-field">SALIDA</label>
            <input
              type="date"
              id="departure-field"
              name="departure"
              onFocus={handleDepartureDateOnFocus}
              onBlur={handleDepartureDateOnFocus}
            ></input>
          </div>
        </div>
        <div className="SearchCard__guests-field">
          <div
            className={`SearchCard__guests-field__adults ${
              adultsInputFocus && "SearchCard__guests-field__adults--focused"
            }`}
          >
            <label htmlFor="adults-field">ADULTOS</label>
            <select
              name="adults"
              id="adults-field"
              defaultValue={3}
              onFocus={handleAdultsOnFocus}
              onBlur={handleAdultsOnFocus}
            >
              {Array.from({ length: 16 }, (_, i) => (
                <option value={i + 1} key={`${i + 1}`}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <div
            className={`SearchCard__guests-field__children ${
              childrenInputFocus &&
              "SearchCard__guests-field__children--focused"
            }`}
          >
            <label htmlFor="children-field">NIÑOS</label>
            <select
              name="children"
              id="children-field"
              defaultValue={2}
              onFocus={handleChildrenOnFocus}
              onBlur={handleChildrenOnFocus}
            >
              {Array.from({ length: 6 }, (_, i) => (
                <option value={i + 1} key={`${i + 1}`}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="SearchCard__services-field">
          <p className="services-label">SERVICIOS</p>
          <ul className="SearchCard__services-field__tags">
            <li>Alberca</li>
            <li>Wifi</li>
            <li>Cocina</li>
          </ul>
        </div>
        <button type="submit" className="SearchCard__search-button">
          Buscar
        </button>
      </div>
    </form>
  );
};

export default SearchCard;
