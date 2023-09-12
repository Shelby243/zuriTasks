import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className=" text-center flex items-center justify-center ">
      <div>
        <img
          src="https://res.cloudinary.com/dluwcubyw/image/upload/v1694553223/Zuri/undraw_No_data_re_kwbl_aqbnhe.png"
          alt="not-found"
          className=" max-w-[600px] block mb-[2rem]  "
        />
        <h1 className="text-8xl text-black leading-normal"> 404</h1>
        <h1 className="mb-[0.5rem] text-3xl text-black leading-normal">
          Ohhh! Wahallah
        </h1>
        <p className=" mt-0 mb-[0.5rem] text-xl text-gray-800 ">
          We can not find your page!!
        </p>
        <Link to="/" className="text-[#BE123C] text-lg underline capitalize">
          Back Home
        </Link>
      </div>
    </main>
  );
};
export default ErrorPage;
