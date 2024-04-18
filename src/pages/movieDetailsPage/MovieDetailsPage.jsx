import {
  NavLink,
  Link,
  Outlet,
  useParams,
  useLocation,
} from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { fetchDetailsMovie } from "../../movie-api";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const locationStateRef = useRef(location.state);

  useEffect(() => {
    async function fetchDetail() {
      try {
        const dataDetails = await fetchDetailsMovie(movieId);
        setMovieDetails(dataDetails);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDetail();
  }, []);

  const { original_title, overview, genres, backdrop_path, vote_average } =
    movieDetails;

  const imgUrl = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;

  const backLinkHref = locationStateRef.current ?? "/movies";

  return (
    <section className={css["section-detail"]}>
      <div>
        <NavLink to={backLinkHref} className={css.back}>
          Go back
        </NavLink>
      </div>
      <div className={css["all-div"]}>
        <img src={imgUrl} alt={original_title} width={300} />
        <div className={css["info-div"]}>
          <h2>{original_title}</h2>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <ul className={css["genres-list"]}>
            {genres &&
              genres.map((genre) => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
          </ul>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <ul className={css.additional}>
          <li>
            <Link to="cast" state={locationStateRef.current}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={locationStateRef.current}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </section>
  );
};

export default MovieDetailsPage;
