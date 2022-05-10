import React from "react";
import "../styles/ReviewSection.css";

import ReviewCard from "./ReviewCard";
import { request } from "graphql-request";

const endpoint = "http://localhost:8000/api/v1";

const ReviewSection = () => {
  const [reviews, setReviews] = React.useState([]);

  const fetchData = async () => {
    let fetchedReviews = await fetchReviews();
    let fetchedReviewsWithImages = await fetchHomesImages(fetchedReviews);
    setReviews(fetchedReviewsWithImages);
  };

  const fetchReviews = async () => {
    const query = `
    query FetchReviews($limit: Int!) {
      getEvaluations(limit: $limit) {
        _id
        userId
        homeId
        date
        stars
        review
      }
    }
    `;

    let result = await request(endpoint, query, { limit: 3 });

    return result.getEvaluations;
  };

  const fetchHomeImage = async (homeId) => {
    const query = `
    query FetchHome($id: ID!) {
      getHome(id: $id) {
        _id
        imageUrl
      }
    }
    `;

    let result = await request(endpoint, query, { id: homeId });
    return result.getHome.imageUrl;
  };

  const fetchUser = async (userId) => {
    const query = `
    query FetchUser($id: ID!) {
      getUser(id: $id) {
        _id
        userName
        imageUrl
        country
      }
    } 
    `;

    let result = await request(endpoint, query, { id: userId });
    return result.getUser;
  };

  const fetchHomesImages = async (fetchedReviews) => {
    for (let i = 0; i < fetchedReviews.length; i++) {
      fetchedReviews[i].imageUrl = await fetchHomeImage(
        fetchedReviews[i].homeId
      );
      fetchedReviews[i].user = await fetchUser(fetchedReviews[i].userId);
    }

    return fetchedReviews;
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="ReviewSection">
      <h3 className="ReviewSection__title">
        Lo que dicen los huéspedes sobre los alojamientos en México
      </h3>
      <p className="ReviewSection__description">
        Más de <b>7.000.000 evaluaciones de huéspedes,</b> con un promedio de{" "}
        <b>4.7 de 5 estrellas.</b>
      </p>
      <div className="ReviewSection__cards">
        {reviews.map((review) => {
          return <ReviewCard review={review} key={review._id} />;
        })}
      </div>
    </div>
  );
};

export default ReviewSection;
