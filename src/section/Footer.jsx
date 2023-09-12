import {
  FaFacebookSquare,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <section className="h-auto md:h-[400px] justify-center items-center flex flex-col gap-y-4 px-4 md:px-20 py-5 ">
      <div className="flex flex-row gap-4 md:gap-8 ">
        <FaFacebookSquare className="w-8 h-8 md:w-10 md:h-10" color="#111827" />
        <FaInstagram className="w-8 h-8 md:w-10 md:h-10" color="#111827" />
        <FaTwitter className="w-8 h-8 md:w-10 md:h-10" color="#111827" />
        <FaYoutube className="w-8 h-8 md:w-10 md:h-10" color="#111827" />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center">
        <p className="text-gray-900 text-base md:text-lg font-bold">
          Condtions of Use
        </p>
        <p className="text-gray-900 ttext-base md:text-lg font-bold">
          Privacy & Policy
        </p>
        <p className="text-gray-900 text-base md:text-lg font-bold">
          Press Room
        </p>
      </div>
      <p className="text-gray-500 text-base md:text-lg font-bold">
        © 2023 MovieBox by Padre Shelby
      </p>
    </section>
  );
};
export default Footer;
