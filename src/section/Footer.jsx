import {
  FaFacebookSquare,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <section className="w-[1366px]  h-[400px] justify-center items-center flex flex-col gap-y-4  px-20 p-5   ">
      <div className="flex flex-row gap-8 ">
        <FaFacebookSquare className="w-10 h-10" color="#111827" />
        <FaInstagram className="w-10 h-10" color="#111827" />
        <FaTwitter className="w-10 h-10" color="#111827" />
        <FaYoutube className="w-10 h-10" color="#111827" />
      </div>
      <div className="flex flex-row gap-8">
        <p className="text-gray-900 text-lg font-bold">Condtions of Use</p>
        <p className="text-gray-900 text-lg font-bold">Privacy & Policy</p>
        <p className="text-gray-900 text-lg font-bold">Press Room</p>
      </div>
      <p className="text-gray-500 text-lg font-bold">
        © 2023 MovieBox by Padre Shelby
      </p>
    </section>
  );
};
export default Footer;
