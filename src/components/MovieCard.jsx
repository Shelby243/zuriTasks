import { GrFavorite } from "react-icons/gr";
const MovieCard = () => {
  return (
    <div
      className="w-[250px] h-[490px]  flex-col justify-start items-start gap-3 inline-flex "
      data-testid="movie-card"
    >
      <div className="w-[250px] h-[370px] relative ">
        <div className="w-[248px] h-[370px] left-0 top-0 absolute">
          <img
            src="/src/assets/images/posert1.png"
            data-testid="movie-poster"
            alt=""
            className=""
          />
        </div>
        <div className="w-[218px] h-[29.21px] left-[16px] top-[15.58px] absolute">
          <div className="px-2 py-[3px] left-0 top-[3.61px] absolute bg-gray-100 bg-opacity-50 rounded-xl backdrop-blur-[2px] justify-start items-start gap-2.5 inline-flex">
            <div className="text-gray-900 text-xs font-bold">TV SERIES</div>
          </div>
          <div className="w-[30px] h-[29.21px] left-[188px] top-0 absolute">
            <div className="w-[30px] h-[29.21px] items-center left-0 top-0 absolute bg-gray-100 bg-opacity-50 rounded-full backdrop-blur-[2px]">
              <GrFavorite className="w-5 h-[19.47px] left-[5px] top-[4.87px] absolute" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-gray-400 z-50 text-xs font-bold"
        data-testid="movie-release-date"
      >
        USA, 2016 - Current{" "}
      </div>
      <div
        className="w-[250px] text-gray-900 text-lg font-bold"
        data-testid="movie-title"
      >
        Stranger Things
      </div>
      <div className=" w-[250px] justify-between items-start gap-8 inline-flex ">
        <div className="justify-start items-center gap-2.5 flex">
          <img
            className="w-[35px] h-[17px] "
            src="/src/assets/images/imdb.png"
          />
          <div className="text-gray-900 text-xs font-normal leading-3">
            86.0 / 100
          </div>
        </div>
        <div className="justify-start items-center gap-2.5 flex">
          <img className="w-4 h-[17px] " src="/src/assets/images/apple.png" />
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
