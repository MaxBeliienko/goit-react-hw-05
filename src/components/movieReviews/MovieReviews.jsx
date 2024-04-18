import { useEffect, useState } from "react";
import { fetchReviews } from "../../movie-api";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function reviewsFatch() {
      try {
        const dataReviews = await fetchReviews(movieId);
        setReviews(dataReviews);
      } catch (error) {
        console.log(error);
      }
    }
    reviewsFatch();
  }, []);
  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => {
            const { id, author, content } = review;
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Sorry. There are no results...</p>
      )}
    </>
  );
};

export default MovieReviews;
