import { NavBar } from "../components";
import { FaPlayCircle } from "react-icons/fa";
const Header = () => {
  return (
    <section className="h-[600px] relative bg-[rgba(0,0,0,.1)]  ">
      <img
        src="/src/assets/images/Poster.png"
        alt=""
        className="w-full h-full
    object-cover  absolute mix-blend-overlay "
      />
      <NavBar />
      <div className=" w-full md:w-[404px] lg:w-[504px] xl:w-[604px]  h-[285px] flex-col justify-start items-start gap-4 inline-flex px-4 md:px-20 pt-24 ">
        <div className="w-full text-white text-3xl  md:text-5xl lg:text-6xl  font-bold leading-normal ">
          John Wick 3 : Parabellum
        </div>
        <div className=" w-[184px] md:w-[204px] lg:w-[234px] h-[17px] relative ">
          <div className=" w-[101px] md:w-[121px] lg:w-[141px] h-[17px] left-0 top-0 absolute justify-start items-center gap-2.5 inline-flex ">
            <img
              className="w-[35px] h-[17px] "
              src="/src/assets/images/imdb.png"
            />
            <p className="text-white text-xs md:text-sm lg:text-base font-normal leading-3">
              86.0/100
            </p>
          </div>
          <div className="w-[49px] md:w-[69px] lg:w-[89px] h-[17px] left-[135px] top-0 absolute justify-start items-center gap-2.5 inline-flex">
            <img className="w-4 h-[17px]" src="/src/assets/images/apple.png" />
            <div className="text-white text-xs md:text-sm lg:text-base font-normal leading-3">
              97%
            </div>
          </div>
        </div>
        <div className="w-full md:w-[302px] lg:w-[402px] xl:w-[502px] text-white text-sm md:text-base lg:text-lg xl:text-xl font-medium leading-[18px] mt-5">
          John Wick is on the run after killing a member of the international
          assassins&apos; guild, and with a $14 million price tag on his head,
          he is the target of hit men and women everywhere.
        </div>
        <div className="relative flex items-center ">
          <FaPlayCircle className="w-3 h-3 md:w-5 md:h-5 absolute ml-2 md:ml-5" />
          <button className=" px-6 md:px-12 lg:px-16 py-3 bg-rose-700 rounded-md justify-start items-center gap-2 inline-flex hover:bg-rose-800 ">
            <p className="text-white text-[12px] md:text-base lg:text-lg xl:text-xl  font-bold uppercase leading-normal ">
              Watch trailer
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Header;
