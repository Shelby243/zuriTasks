import { fetchSingleMovie } from "../api/data";
import { useParams } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});

  const { movie_id } = useParams();
  //console.log(movie_id);
  const fetchMovie = async () => {
    const movie = await fetchSingleMovie(movie_id);
    console.log(movie);
    setMovieDetails(movie);
  };
  useEffect(() => {
    fetchMovie();
  }, []);

  console.log(movieDetails.data);
  return (
    <section className="px-4 md:px-20 p-5 pt-5">
      <div className=" w-full min-h-[690px] border border-gray-400 bg-gray-400 pt-2 rounded-md flex flex-col md:flex-row justify-between items-center px-4 md:px-40 ">
        <div className="w-full md:w-[250px] h-auto border-[#f5f5f5] flex flex-col justify-start items-start gap-3 ">
          <div className="w-full h-[370px] relative">
            <div className="w-full h-[370px] rounded-md left-0 top-0 absolute">
              <img
                src={`https://image.tmdb.org/t/p/w500${movieDetails.data?.poster_path}`}
                data-testid="movie-poster"
                alt=""
                className="rounded-md w-full h-full object-cover"
              />
            </div>
          </div>
          <h1
            className="text-black text-lg md:text-2xl"
            data-testid="movie-title"
          >
            <b>Tilte:</b> {movieDetails.data?.original_title}
          </h1>
          <p className="text-black text-base" data-testid="movie-release-date">
            <b>Release date:</b>
            {movieDetails.data?.release_date}
          </p>
          <p className="text-black text-base" data-testid="movie-runtime">
            <b>Runtime:</b>
            {movieDetails.data?.runtime} minutes
          </p>
          <div className="relative flex items-center mt-3 md:mt-0">
            <FaPlayCircle className="w-4 h-4 md:w-5 md:h-5 absolute ml-2 md:ml-5" />
            <button className="px-6 md:px-12 py-2 md:py-3 bg-rose-700 rounded-md justify-start items-center gap-2 inline-flex hover:bg-rose-800">
              <p className="text-white text-[12px] md:text-base lg:text-lg xl:text-xl font-bold uppercase leading-normal">
                Watch trailer
              </p>
            </button>
          </div>
        </div>

        <div className="flex w-full md:w-[350px] items-center mt-4 md:mt-0 justify-center p-2 flex-col ">
          <h1 className="text-black text-lg md:text-2xl font-bold">Overview</h1>
          <p
            className="text-black text-base md:text-lg mt-3"
            data-testid="movie-overview"
          >
            {movieDetails.data?.overview}
          </p>
        </div>
      </div>
    </section>
  );
};
export default MovieDetails;