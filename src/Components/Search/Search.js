import React from "react";
import { CiSearch } from "react-icons/ci";
const Search = (props) => {
  return (
    <form
      className="hidden  md:flex items-center justify-between bg-white px-2 py-2 md:px-4 md:py-3 w-[50%] md:w-[25%] rounded-full font-nunito shadow-sm z-50 "
      onSubmit={props.searchSubmit}
    >
      <input
        value={props.value}
        placeholder="Search your food"
        className="outline-0	w-full"
      />
      <CiSearch type="submit" className="text-2xl text-secondary" />
    </form>
  );
};

export default Search;
