import MovieList from "../../components/movieList/MovieList";
import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../movie-api";

const HomePage = () => {
  const [topicMovies, setTopicMovies] = useState([]);

  useEffect(() => {
    async function fetchTopMovies() {
      try {
        const dataTopMovies = await fetchTrendingMovies();
        setTopicMovies(dataTopMovies.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTopMovies();
  }, []);
  return <MovieList movies={topicMovies} />;
};

export default HomePage;
