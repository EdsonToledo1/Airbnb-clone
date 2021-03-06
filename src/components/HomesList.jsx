import React from "react";
import "../styles/HomesList.css";

const HomesList = (props) => {
  return (
    <div className="HomesList">
      <p className="HomesList__results-caption">
        Más de {props.results} alojamientos en {props.location}
      </p>
      <ul className="HomesList__filters">
        <li>Cancelación gratuita</li>
        <li>Tipo de lugar</li>
        <li>Precio</li>
        <li>Reservación inmediate</li>
        <li>Más filtros</li>
      </ul>
      <div className="HomesList__place-caption">
        <svg
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style={{
            display: "block",
            height: 24,
            width: 24,
            fill: "#e31c5f",
            stroke: "currentcolor",
          }}
        >
          <g stroke="none">
            <path d="m33 6v18l-.0038371.2653623c-.1378193 4.7596818-3.9711188 8.5929813-8.7308006 8.7308006l-.2653623.0038371-.2653623-.0038371c-4.7596818-.1378193-8.5929813-3.9711188-8.7308006-8.7308006l-.0038371-.2653623v-18z"></path>
            <path d="m37 2c4.9705627 0 9 4.02943725 9 9 0 4.8818027-3.8868137 8.8557914-8.7346377 8.9961629l-.2653623.0038371v4c0 6.8430361-5.287253 12.4511681-11.9994301 12.962067l-.0005699 7.037933h10v2h-22v-2h10l.0004329-7.0378567c-6.6120454-.5027667-11.8416085-5.951798-11.9968825-12.6552871l-.0035504-.3068562v-4c-4.97056275 0-9-4.0294373-9-9 0-4.8818027 3.88681368-8.85579142 8.7346377-8.99616289l.2653623-.00383711zm-2 2h-22v20c0 5.8806901 4.6146597 10.6835686 10.4203322 10.9849887l.2912603.0113039.2884075.0037074c5.9787016 0 10.8433652-4.7697636 10.9962926-10.7115925l.0037074-.2884075zm2 0v14c3.8659932 0 7-3.1340068 7-7 0-3.78545172-3.0047834-6.86909868-6.7593502-6.99594098zm-26 0c-3.86599325 0-7 3.13400675-7 7 0 3.7854517 3.00478338 6.8690987 6.7593502 6.995941l.2406498.004059z"></path>
          </g>
        </svg>
        <p className="HomesList__place-caption__text">
          Más de 85.000 huéspedes se han quedado en {props.location}. Los
          huéspedes han valorado sus estancias con 4.8 estrellas sobre 5 de
          media.
        </p>
      </div>
      <ul>{props.children}</ul>
    </div>
  );
};

export default HomesList;
