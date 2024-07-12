import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../Redux/Slices/SearchSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="px-6 flex  justify-between  py-3 flex-col lg:flex-row mb-10 gap-5">
      <div>
        <h1 className="text-xl font-bold text-gray-600 mb-2">
          {new Date().toUTCString().slice(0, 16)}
        </h1>
        <Link to="/" className="logo flex items-center cursor-pointer">
          <img src="../src/assets/logo.png" className="w-12 mr-2" alt="" />
          <h1 className="text-2xl font-bold">Foodie Flick</h1>
        </Link>
      </div>
      <div>
        <input
          type="search"
          placeholder="Search here"
          name="search"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="outline-none border border-gray-400  text-sm lg:w-[25vw] w-full p-3 rounded-lg "
        />
      </div>
    </nav>
  );
};

export default Navbar;
