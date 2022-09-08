import React from "react";
import { IoNewspaperSharp } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="bg-slate-700/80 px-2.5 flex justify-center text-white w-full h-auto">
      <IoNewspaperSharp className="text-4xl my-2" />
      <h1 className="font-bold ml-1 mt-3 text-xl">WhyNews</h1>
    </div>
  );
};

export default NavBar;
