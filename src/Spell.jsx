import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import clsx from "clsx";
import { spellContext } from "./App";
import { IoHeartSharp } from "react-icons/io5";
import Favorites from "./Favorites";
const Spell = () => {
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);
  const { spells, setSpells, filteredSpells, favorite, handlefavorite } =
    useContext(spellContext);
  useEffect(() => {
    const set = () => {
      try {
        fetch("https://www.dnd5eapi.co/api/spells")
          .then((response) => response.json())
          .then((json) => {
            setSpells(json.results);
            setloading(false);
          })
          .catch((error) => setError(error));
      } catch (error) {
        setError(error);
      }
    };
    set();
  }, []);

  return (
    <Container>
      <div className="px-32 z-0">
        <h3 className=" flex z-0 justify-start text-2xl mb-3 font-medium">
          All Spells
        </h3>
      </div>

      <ul className="grid grid-cols-4 gap-4 z-0 px-32">
        {spells.map((spell) => (
          <>
            <div className="bg-white shadow-sm  rounded-lg px-5 py-4 cursor-pointer flex justify-between">
              <div className="flex flex-col">
                <li className="text-[20px]  font-medium  ">
                  <Link to={`${spell.index}`}>{spell.name}</Link>
                </li>

                <div>
                  Level:
                  <span className=" font-medium"> {spell.level}</span>
                </div>
              </div>

              <div
                className="py-1 text-2xl"
                onClick={() => {
                  handlefavorite(spell.index);
                }}
              >
                {favorite.includes(spell.index) ? (
                  <IoHeartSharp className="text-red-600" />
                ) : (
                  <GoHeart className=" hover:text-red-600" />
                )}
              </div>
            </div>
          </>
        ))}{" "}
      </ul>
    </Container>
  );
};

export default Spell;
