import React from "react";
import { Link } from "react-router-dom";
import pageNotFoundImage from "../../assets/images/page-not-found.jpg";

const NotFound: React.FC = () => {
  return (
    <div className="container mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 bg-white pb-10">
      <img src={pageNotFoundImage} alt="404" className="w-1/2" />

      <Link
        to="/"
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
