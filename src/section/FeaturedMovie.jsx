import { TbMathGreater } from "react-icons/tb";
import { MovieCard, Loading } from "../components";
import { useContext } from "react";
import { AppContext } from "../context/appContext";
import { useState } from "react";

const FeaturedMovie = () => {
  const { isLoading, results } = useContext(AppContext);
  const [selectedItems, setSelectedItems] = useState([]);
  const handleClick = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };
  if (isLoading) {
    return <Loading center />;
  }
  if (results[0]?.message) {
    return (
      <section className="px-4 md:px-20 p-5 pt-10 md:pt-20">
        <div className=" w-full h-[47px] flex flex-row justify-between items-center">
          <p className="text-black text-xl md:text-2xl font-bold leading-normal">
            Featured Movie
          </p>
          <div className=" flex flex-row justify-center items-center gap-x-2 cursor-pointer">
            <p className="text-rose-700 text-base md:text-lg font-normal leading-normal ">
              See more
            </p>
            <TbMathGreater color="#BE123C" className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        </div>
        <div className="pt-6 md:pt-10 flex flex-col md:flex-row lg:flex-row  justify-center items-center flex-wrap content-center gap-y-3 md:gap-[90px] lg:gap-[50px]   ">
          <p className="text-2xl text-black text-center font-semibold">
            {results[0].message}
          </p>
        </div>
      </section>
    );
  }
  if (results.length === 0) {
    return (
      <section className="px-4 md:px-20 p-5 pt-10 md:pt-20">
        <div className=" w-full h-[47px] flex flex-row justify-between items-center">
          <p className="text-black text-xl md:text-2xl font-bold leading-normal">
            Featured Movie
          </p>
          <div className=" flex flex-row justify-center items-center gap-x-2 cursor-pointer">
            <p className="text-rose-700 text-base md:text-lg font-normal leading-normal ">
              See more
            </p>
            <TbMathGreater color="#BE123C" className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        </div>
        <div className="pt-6 md:pt-10 flex flex-col md:flex-row lg:flex-row  justify-center items-center flex-wrap content-center gap-y-3 md:gap-[90px] lg:gap-[50px]   ">
          <p className="text-2xl text-black text-center font-semibold">
            No movies found ...{" "}
          </p>
        </div>
      </section>
    );
  }
  return (
    <section className="px-4 md:px-20 p-5 pt-10 md:pt-20">
      <div className=" w-full h-[47px] flex flex-row justify-between items-center">
        <p className="text-black text-xl md:text-2xl font-bold leading-normal">
          Featured Movie
        </p>
        <div className=" flex flex-row justify-center items-center gap-x-2 cursor-pointer">
          <p className="text-rose-700 text-base md:text-lg font-normal leading-normal ">
            See more
          </p>
          <TbMathGreater color="#BE123C" className="w-4 h-4 md:w-5 md:h-5" />
        </div>
      </div>
      <div className="pt-6 md:pt-10 flex flex-col md:flex-row lg:flex-row  justify-start items-center flex-wrap content-center gap-y-3 md:gap-[90px] lg:gap-[50px]   ">
        {results.map((movie, index) => (
          <MovieCard
            key={index}
            movieId={movie.id}
            title={movie.original_title}
            release_date={movie.release_date}
            poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            handleClick={() => handleClick(index)}
            isSelected={selectedItems.includes(index)}
          />
        ))}
      </div>
    </section>
  );
};
export default FeaturedMovie;
