import React from "react";
import "../styles/Homes.css";

import HomesHeader from "../components/HomesHeader";
import HomesMap from "../components/HomesMap";
import HomesList from "../components/HomesList";
import { request } from "graphql-request";
import { useParams, useSearchParams } from "react-router-dom";

import HomesListItem from "../components/HomesListItem";

const endpoint = "http://localhost:8000/api/v1";

const Homes = () => {
  const { location } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [homes, setHomes] = React.useState([]);
  const [coorditanes, setCoordinates] = React.useState({
    lat: 40.742054,
    lng: -73.769417,
  });

  React.useEffect(() => {
    console.log(typeof Date.parse(searchParams.get("checkin")));
    fetchData();
  }, []);

  const fetchData = () => {
    const query = `
    query LocationsSearch($locationName: String!) {
        getLocationsFrom(locationName: $locationName) {
          _id
        }
    }
    `;
    request(endpoint, query, {
      locationName: location,
    })
      .then((data) => {
        getHomesFromLocations(
          data.getLocationsFrom.map((item) => {
            return item._id;
          })
        );
      })
      .catch((error) => console.error(error));
  };

  const getHomesFromLocations = (locationIds) => {
    let checkin = searchParams.get("checkin");
    let checkout = searchParams.get("checkout");
    if (checkin !== "" && checkout !== "") {
      const query = `
      query HomesSearch($locationIds: [String]!, $date: ReservationDateInput){
        getHomesFrom(locationIds: $locationIds, date: $date) {
          _id
          userId
          locationId
          imageUrl
          title
          caption
          detail
          amenities
          evaluations {
            userId
            date
          }
          averageEvaluation
          price
          currency
          coordinates {
            lat
            lon
          }
          busyDates
        }
      }
      `;

      request(endpoint, query, {
        locationIds: locationIds,
        date: { checkin, checkout },
      }).then((data) => {
        setHomes(data.getHomesFrom);
        setCoordinates({
          lat: data.getHomesFrom[0].coordinates.lat,
          lng: data.getHomesFrom[0].coordinates.lon,
        });
        console.log(data);
      });
    } else {
      const query = `
      query HomesSearch($locationIds: [String]!){
        getHomesFrom(locationIds: $locationIds) {
          _id
          userId
          locationId
          imageUrl
          title
          caption
          detail
          amenities
          evaluations {
            userId
            date
          }
          averageEvaluation
          price
          currency
          coordinates {
            lat
            lon
          }
          busyDates
        }
      }
      `;

      request(endpoint, query, { locationIds: locationIds }).then((data) => {
        setHomes(data.getHomesFrom);
        setCoordinates({
          lat: data.getHomesFrom[0].coordinates.lat,
          lng: data.getHomesFrom[0].coordinates.lon,
        });
        console.log(data);
      });
    }
  };

  return (
    <div className="Homes">
      <div className="Homes__header">
        <HomesHeader />
      </div>
      <div className="Homes__content">
        <div className="Homes__left">
          <HomesList results={homes.length} location={location}>
            {homes.map((home) => {
              return <HomesListItem home={home} key={home._id} />;
            })}
          </HomesList>
        </div>
        <div className="Homes__right">
          <HomesMap coordinates={coorditanes} />
        </div>
      </div>
    </div>
  );
};

export default Homes;
