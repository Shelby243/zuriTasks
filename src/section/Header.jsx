import { NavBar } from "../components";
import { FaPlayCircle } from "react-icons/fa";
const Header = () => {
  return (
    <section className="w-[1366px]  h-[600px] relative bg-[rgba(0,0,0,.1)]  ">
      <img
        src="/src/assets/images/Poster.png"
        alt=""
        className="w-full h-full
    object-cover  absolute mix-blend-overlay "
      />
      <NavBar />
      <div className=" w-[404px] h-[285px] flex-col justify-start items-start gap-4 inline-flex px-20 pt-24 ">
        <div className="w-[404px] text-white text-5xl font-bold leading-[56px] ">
          John Wick 3 : Parabellum
        </div>
        <div className=" w-[184px] h-[17px] relative ">
          <div className=" w-[101px] h-[17px] left-0 top-0 absolute justify-start items-center gap-2.5 inline-flex ">
            <img
              className="w-[35px] h-[17px] "
              src="/src/assets/images/imdb.png"
            />
            <p className="text-white text-xs font-normal leading-3">86.0/100</p>
          </div>
          <div className="w-[49px] h-[17px] left-[135px] top-0 absolute justify-start items-center gap-2.5 inline-flex">
            <img className="w-4 h-[17px]" src="/src/assets/images/apple.png" />
            <div className="text-white text-xs font-normal leading-3">97%</div>
          </div>
        </div>
        <div className="w-[302px] text-white text-sm font-medium leading-[18px] mt-5">
          John Wick is on the run after killing a member of the international
          assassins&apos; guild, and with a $14 million price tag on his head,
          he is the target of hit men and women everywhere.
        </div>
        <div className="relative flex items-center ">
          <FaPlayCircle className="w-5 h-5 absolute ml-5" />
          <button className=" px-12 py-3 bg-rose-700 rounded-md justify-start items-center gap-2 inline-flex hover:bg-rose-800 ">
            <p className="text-white text-sm font-bold uppercase leading-normal ">
              Watch trailer
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Header;
