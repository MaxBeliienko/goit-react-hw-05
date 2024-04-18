import { Route, Routes } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import "./App.css";
import { fetchTrendingMovies } from "./movie-api";

const Navigation = lazy(() => import("./components/navigation/Navigation"));
const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/moviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/movieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./components/movieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/movieReviews/MovieReviews")
);
const NotFoundPage = lazy(() => import("./pages/notFoundPage/NotFoundPage"));

function App() {
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

  return (
    <>
      <Suspense
        fallback={
          <div>
            <p>Loading...</p>
          </div>
        }
      >
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage topicMovie={topicMovies} />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
