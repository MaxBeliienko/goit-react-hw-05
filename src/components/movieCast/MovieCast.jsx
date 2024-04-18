import { useEffect, useState } from "react";
import { fetchCast } from "../../movie-api";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function castFetch() {
      try {
        const dataCast = await fetchCast(movieId);
        setMovieCast(dataCast);
      } catch (error) {
        console.log(error);
      }
    }
    castFetch();
  }, [movieId]);
  return (
    <ul>
      {movieCast.map((cast) => {
        const { character, name, profile_path, id } = cast;
        const castImg = `https://image.tmdb.org/t/p/w500/${profile_path}`;
        return (
          <li key={id} className={css.cast}>
            <ul className={css["cast-item"]}>
              <li>
                <img src={castImg} alt={name} width={300} />
              </li>
              <li>{name}</li>
              <li>Character: {character}</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieCast;
