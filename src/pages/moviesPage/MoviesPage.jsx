import { fetchSearchMovie } from "../../movie-api";
import MovieList from "../../components/movieList/MovieList";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MoviesPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchSearch() {
      try {
        const dataSearch = await fetchSearchMovie(searchValue);
        setSearchData(dataSearch);
      } catch (error) {
        console.log(error);
      }
    }
    fetchSearch();
  }, [searchValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputValue = form.elements.searchInput.value;
    if (inputValue.trim() === "") {
      return alert(
        "Input field cannot be empty! Please enter a value for the search🙂"
      );
    }
    setSearchValue(inputValue);
    form.reset();
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchInput"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={searchData} />
    </section>
  );
};

export default MoviesPage;
