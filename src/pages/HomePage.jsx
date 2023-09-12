import { useState, useEffect } from "react";
import { Header, Footer, FeaturedMovie } from "../section";
import { AppContext } from "../context/appContext";
import { fetchTopMovies } from "../api/data";

const HomePage = () => {
  const [values, setValues] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const fecthMovies = async () => {
    const movies = await fetchTopMovies();
    console.log(movies);
    setValues(movies);
  };

  useEffect(() => {
    fecthMovies();
  }, [search]);

  useEffect(() => {
    const searchMovieByTitle = () => {
      if (search.trim() === "") {
        setResults(values);
        return;
      }

      setIsLoading(true); // Start loading
      const filter = values.filter((movie) =>
        movie.original_title.toLowerCase().includes(search.toLowerCase())
      );

      setTimeout(() => {
        setIsLoading(false);
        setResults(filter);
      }, 1000);
    };

    searchMovieByTitle();
  }, [search, values]);
  console.log(results.length);
  return (
    <AppContext.Provider
      value={{
        values,
        results,
        setSearch,
        setIsLoading,
        isLoading,
        errorMessage,
        setErrorMessage,
      }}
    >
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Header />
        <FeaturedMovie />
        <Footer />
      </div>
    </AppContext.Provider>
  );
};
export default HomePage;
