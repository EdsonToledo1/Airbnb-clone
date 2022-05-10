import React from "react";
import "../styles/JustBookedSection.css";

import JustBookedCard from "./JustBookedCard";
import { request } from "graphql-request";

const endpoint = "http://localhost:8000/api/v1";

const JustBookedSection = () => {
  const [homes, setHomes] = React.useState([]);

  const fetchData = async () => {
    let fetchedHomes = await fetchRecentReservedHomes();
    setHomes(fetchedHomes);
  };

  const fetchRecentReservedHomes = async () => {
    const query = `
    query FetchHomes($limit: Int!) {
      getHomes(limit: $limit) {
        _id
        imageUrl
        title
        caption
        evaluations {
          userId
          date
        }
        averageEvaluation
        price
        currency
      }
    }
    `;

    let result = await request(endpoint, query, { limit: 4 });
    return result.getHomes;
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="JustBookedSection">
      <h3 className="JustBookedSection__title">Recién reservado en México</h3>
      <div className="JustBookedSection__cards">
        {homes.map((home) => {
          return <JustBookedCard home={home} key={home._id} />;
        })}
      </div>
      <button className="JustBookedSection__more-button">
        Mostrar (más de 2,000)
      </button>
    </div>
  );
};

export default JustBookedSection;
