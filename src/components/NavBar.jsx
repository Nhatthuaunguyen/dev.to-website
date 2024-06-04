//import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-white w-full h-[56px] border-b-[1px] top-0 sticky">
      <div className="mx-10 w-full h-full flex ">
        <Link className="h-full flex" to="/">
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="devlogo"
            className="w-[50px] h-[40px] my-auto"
          />
        </Link>
        <form className="h-full flex" action="">
          <input
            className="h-[40px] mx-2 w-[420px] outline-0 p-1 focus:border-[2px] focus:border-blue-800 my-auto border-[1px]  border-gray-300 rounded-[0.25rem]"
            type="text"
            placeholder="Search"
            name=""
            id=""
          />
        </form>
        <Link className="my-auto ml-[25em] font-medium" to="/login">
          <center>Login</center>
        </Link>
        <Link
          className="my-auto flex ml-10 w-40 h-[40px] font-medium text-blue-500 justify-center items-center border-2 rounded-lg border-blue-500 hover:bg-blue-500"
          to="/signup"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
