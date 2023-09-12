/* eslint-disable react/prop-types */
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const MovieCard = ({
  title,
  release_date,
  poster,
  handleClick,
  isSelected,
  movieId,
}) => {
  const color = isSelected ? "#DC2626" : "";
  return (
    <div
      className="w-[250px] h-[490px]  flex-col justify-start items-start gap-3 inline-flex "
      data-testid="movie-card"
    >
      <div className="w-[250px] h-[370px] relative ">
        <div className="w-[248px] h-[370px] left-0 top-0 absolute">
          <img src={poster} data-testid="movie-poster" alt="" className="" />
        </div>
        <div className="w-[218px] h-[29.21px] left-[16px] top-[15.58px] absolute">
          <div className="px-2 py-[3px] left-0 top-[3.61px] absolute bg-gray-100 bg-opacity-50 rounded-xl backdrop-blur-[2px] justify-start items-start gap-2.5 inline-flex">
            <div className="text-gray-900 text-xs font-bold">TV SERIES</div>
          </div>
          <div className="w-[30px] h-[29.21px] left-[188px] top-0 absolute">
            <div
              className={`w-[30px] h-[29.21px] items-center left-0 top-0 absolute ${
                isSelected
                  ? "bg-opacity-30 backdrop-blur-[2px]"
                  : "bg-gray-100  bg-opacity-30 backdrop-blur-[2px]"
              }   rounded-full `}
              onClick={handleClick}
            >
              <FaHeart
                color={color}
                className="w-5 h-[19.47px] left-[5px] top-[4.87px] absolute"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-gray-400 z-50 text-xs font-bold"
        data-testid="movie-release-date"
      >
        {release_date}
      </div>
      <Link to={`/movies/${movieId}`}>
        <div
          className="w-[250px] text-gray-900 text-lg font-bold"
          data-testid="movie-title"
        >
          {title}
        </div>
      </Link>
      <div className=" w-[250px] justify-between items-start gap-8 inline-flex ">
        <div className="justify-start items-center gap-2.5 flex">
          <img
            className="w-[35px] h-[17px] "
            src="https://res.cloudinary.com/dluwcubyw/image/upload/v1694550535/Zuri/imdb_baofyp.png"
          />
          <div className="text-gray-900 text-xs font-normal leading-3">
            86.0 / 100
          </div>
        </div>
        <div className="justify-start items-center gap-2.5 flex">
          <img
            className="w-4 h-[17px] "
            src="https://res.cloudinary.com/dluwcubyw/image/upload/v1694550535/Zuri/imdb_baofyp.png"
          />
          <div className="text-gray-900 text-xs font-normal leading-3">
            {" "}
            97%{" "}
          </div>
        </div>
      </div>
      <div className="text-gray-400 text-xs font-bold">
        Action, Adventure, Horror
      </div>
    </div>
  );
};
export default MovieCard;
