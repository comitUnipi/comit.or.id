import React from "react";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";

const SearchArtikel = () => {
  return (
    <>
      <div className="flex w-full max-w-full items-center space-x-2">
        <span className="absolute pl-5 pt-1 flex items-center pointer-events-none">
          <CiSearch />
        </span>
        <Input
          className="pl-8 bg-slate-100 border border-black"
          type="text"
          placeholder="Search"
        />
      </div>
    </>
  );
};

export default SearchArtikel;
