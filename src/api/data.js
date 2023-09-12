import axios from "axios";

const apiKey = "d6a36375bb3ff444029fd6338eb40dbc";

export const fetchTopMovies = async () => {
  let errorMessage;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    );
    const topMovies = response.data.results.slice(0, 10);
    return topMovies;
  } catch (error) {
    console.log("Error fetching top movies:", error);
    if (error.response && error.response.status === 404) {
      errorMessage = "Movie Not Found";
    } else if (error.message === "Network Error") {
      errorMessage = "Network error, please check your connection.";
    } else {
      errorMessage = "An error occurred. Please try again later.";
    }
    return [{ message: errorMessage }];
  }
};

export const fetchSingleMovie = async (movie_id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=en-US`
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
};
