import MovieList from "../../components/movieList/MovieList";

const HomePage = ({ topicMovie }) => {
  return <MovieList movies={topicMovie} />;
};

export default HomePage;
