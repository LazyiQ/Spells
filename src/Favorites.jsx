import React, { useContext } from "react";
import { spellContext } from "./App";
import clsx from "clsx";
import { GoHeart } from "react-icons/go";
import { FaHeart } from "react-icons/fa6";
import { IoHeartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import pathConstants from "./pathConstants";

const Favorites = () => {
  const { filteredSpells, favorite, handlefavorite } = useContext(spellContext);

  return (
    <>
      <div className=" h-screen w-full bg-gray-100 py-32 font-custom ">
        <h1 className="text-2xl ml-32 font-medium font-custom">Favorite</h1>
        {filteredSpells.length > 0 ? (
          <div className="grid grid-cols-4 px-28 py-5">
            {filteredSpells.map((f) => {
              return (
                <div className=" bg-white relative shadow-sm rounded-lg py-5 cursor-pointer px-5 flex flex-col ml-4 mb-5  ">
                  {f.name}
                  <div>
                    Level:
                    <span className=" font-medium"> {f.level}</span>
                  </div>
                  <div
                    className="absolute right-0 py-1 px-4 text-2xl"
                    onClick={() => {
                      handlefavorite(f.index);
                    }}
                  >
                    {favorite.includes(f.index) ? (
                      <IoHeartSharp className="text-red-600" />
                    ) : (
                      <GoHeart className=" hover:text-red-600" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className=" bg-white relative shadow-sm rounded-lg py-5 cursor-pointer flex flex-col ml-32 mt-4   ">
            <p className="px-10">
              No favorites added yet, start by adding some from{" "}
              <Link to={pathConstants.SPELLS} className="text-red-600">
                spell
              </Link>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Favorites;
