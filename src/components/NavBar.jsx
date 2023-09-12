import menu from "../assets/images/Menu alt 4.svg";
import { FaSearch } from "react-icons/fa";
import { AppContext } from "../context/appContext";
import { useContext } from "react";
const NavBar = () => {
  const { setSearch } = useContext(AppContext);
  return (
    <nav className="p-2 px-4 md:px-20   w-full h-20 items-center justify-between flex flex-row ">
      <div className="items-center justify-between gap-x-2 md:gap-x-5 flex flex-row  ">
        <img
          src="https://res.cloudinary.com/dluwcubyw/image/upload/v1694550416/Zuri/tv_ulwgde.png"
          className="w-8 h-8 md:w-10 md:h-10 z-40"
          alt=""
        />
        <p className="text-white text-xl hidden  md:hidden lg:block md:text-2xl font-bold leading-normal">
          Movie Box
        </p>
      </div>
      <div className="relative flex items-center  ">
        <FaSearch
          color="#d1d6dd"
          className=" w-3.5 h-3.5 md:w-5 md:h-5 absolute right-1 md:right-2 cursor-pointer"
        />
        <input
          type="text"
          name="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="What do you want to watch?"
          autoComplete="off"
          aria-label="What do you want to watch?"
          className="w-full md:w-[525px] h-8  md:h-9 px-2 py-1 rounded-md placeholder-gray-300 border-none outline-none text-white text-base font-normal leading-normal ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 bg-transparent placeholder:text-xs placeholder:md:text-base "
        />
      </div>
      <div className="items-center justify-between gap-x-2 md:gap-x-5 flex flex-row  ">
        <p className="text-white text-base hidden md:hidden lg:block md:text-base font-bold leading-normal">
          Sign in
        </p>
        <div className="flex items-center justify-center rounded-full h-8 w-8 z-50 bg-[#BE123C] ">
          <img src={menu} className=" w-4 h-4 md:w-5 md:h-5" alt="" />
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
