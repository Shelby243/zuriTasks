import { TbMathGreater } from "react-icons/tb";
import { MovieCard } from "../components";
const FeaturedMovie = () => {
  return (
    <section className="w-[1366px] px-20 p-5 pt-20   ">
      <div className=" w-full h-[47px] flex flex-row justify-between items-center  ">
        <p className="text-black text-3xl font-bold">Featured Movie</p>
        <div className=" flex flex-row justify-center items-center gap-x-2 cursor-pointer">
          <p className="text-rose-700 text-lg font-normal leading-normal ">
            See more
          </p>
          <TbMathGreater color="#BE123C" className="w-5 h-5 " />
        </div>
      </div>
      <div className=" pt-10 flex flex-row justify-start items-center flex-wrap content-center gap-[68px] ">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </section>
  );
};
export default FeaturedMovie;
