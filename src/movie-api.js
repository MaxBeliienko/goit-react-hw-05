import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDJmNmUzZjE2MzMzNjQ5MTMwNjYyNzExZjE5Mjg1YSIsInN1YiI6IjY2MWNkYTAzMDEwMmM5MDE2MzA2OGIyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v5bO1hWR-ofOri0iLC0supugoz9LfQbLn-XBFgySmpc",
  },
};

const fetchTrendingMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const trendMovies = await axios.get(url, options);
  return trendMovies.data;
};

const fetchDetailsMovie = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const detailMovie = await axios.get(url, options);
  return detailMovie.data;
};

const fetchCast = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  const castMovie = await axios.get(url, options);
  return castMovie.data.cast;
};

const fetchReviews = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`;
  const reviewsMovie = await axios.get(url, options);
  return reviewsMovie.data.results;
};

const fetchSearchMovie = async (value) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`;
  const searchMovie = await axios.get(url, options);
  return searchMovie.data.results;
};

export {
  fetchTrendingMovies,
  fetchDetailsMovie,
  fetchCast,
  fetchReviews,
  fetchSearchMovie,
};
