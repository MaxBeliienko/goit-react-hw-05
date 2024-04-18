import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css["movie-list"]}>
      {movies.map((movie) => {
        const { original_title, id } = movie;
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={location}>
              {original_title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
