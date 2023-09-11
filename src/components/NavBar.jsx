import logo from "../assets/images/tv.png";
import menu from "../assets/images/Menu alt 4.svg";
import { FaSearch } from "react-icons/fa";
const NavBar = () => {
  return (
    <nav className="p-2 px-20  w-full h-20 items-center justify-between flex flex-row ">
      <div className="items-center justify-between gap-x-5 flex flex-row  ">
        <img src={logo} className="w-10 h-10 z-40" alt="" />
        <p className="text-white text-2xl font-bold leading-normal">
          Movie Box
        </p>
      </div>
      <div className="relative flex items-center  ">
        <FaSearch color="#d1d6dd" className="w-5 h-5 absolute right-2" />
        <input
          type="text"
          name="search"
          placeholder="What do you want to watch?"
          autoComplete="off"
          aria-label="What do you want to watch?"
          className="w-[525px]  h-9 px-2.5 py-1.5 rounded-md placeholder-gray-300 border-none outline-none text-white text-base font-normal leading-normal ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 bg-transparent "
        />
      </div>
      <div className="items-center justify-between gap-x-5 flex flex-row  ">
        <p className="text-white text-base font-bold leading-normal">Sign in</p>
        <div className="flex items-center justify-center rounded-full h-10 w-10 z-50 bg-[#BE123C] ">
          <img src={menu} className="w-5 h-5" alt="" />
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
