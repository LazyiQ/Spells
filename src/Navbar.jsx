import React, { useContext, useRef, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import Navitem from "./Navitem";
import indicator from "./navbarData";
import Toggle from "./Toggle";
import Drawer from "./Drawer";
import { spellContext } from "./App";
import { GiDragonOrb } from "react-icons/gi";
import clsx from "clsx";
import { IoHeartSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
const Navbar = () => {
  const [indicatorBound, setindicatorBound] = useState({
    width: 100,
    left: 0,
  });
  const {
    isOpen: isDrawerOpen,
    open: openDrawer,
    close: closeDrawer,
    toggle: toggleDrawer,
  } = Toggle(false);

  const favoriteButtonRef = useRef(null);
  const { filteredSpells, favorite, handlefavorite } = useContext(spellContext);

  return (
    <>
      <Drawer
        allowedElement={favoriteButtonRef}
        closeDrawer={closeDrawer}
        isOpen={isDrawerOpen}
      >
        {" "}
        <>
          {filteredSpells.map((f) => {
            return (
              <div className=" bg-white relative shadow-sm w-[250px]  rounded-lg py-4 mt-3 cursor-pointer px-3 ml-8 flex flex-col ">
                <div className=" text-xl">{f.name}</div>

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
        </>
      </Drawer>

      <div className="nav fixed backdrop-blur top-0 w-full h-20  bg-white/75 border-b-4 border-gray-200 font-custom uppercase z-0 ">
        <div className="h-full flex justify-between items-center ">
          <div className="px-28">
            {" "}
            <GiDragonOrb className=" size-14 " />
          </div>
          <div className="px-36 ">
            <ul className="flex gap-10 font-medium">
              {indicator.map((indicator) => (
                <div className="flex w-20 h-20  justify-center items-center ">
                  <li className=" list-none">
                    <Navitem
                      indicator={indicator}
                      setindicatorBound={setindicatorBound}
                    />
                  </li>
                </div>
              ))}

              <div>
                <div
                  className="mt-4 flex justify-center items-center border relative text-red-500 w-12 h-12 rounded-full cursor-pointer"
                  onClick={openDrawer}
                  ref={favoriteButtonRef}
                >
                  <FaRegHeart className=" size-6" />
                  <div
                    className={clsx(
                      "w-6 h-6 flex justify-center items-center absolute left-[30px] top-[30px] text-white bg-red-600  border rounded-full",
                      filteredSpells.length <= 0
                        ? "invisible opacity-0"
                        : "visible opacity-100"
                    )}
                  >
                    {filteredSpells.length}
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>

        <div
          className="relative bottom-0 transition-all bg-red-500 w-[100px] h-[4px] rounded-full"
          style={indicatorBound}
        ></div>
      </div>
    </>
  );
  // <nav className="w-full h-20 bg-gray-50 border-b-2 border-gray-200 ">
  //   <div className="flex justify-between h-full">
  //     <GiDragonOrb className="flex h-full size-14 ml-28 text-black/75" />
  //     <ul className="flex gap-10 h-full items-center text-xl text-black/70">
  //       <li>Home</li>
  //       <li>Spells</li>
  //       <li className="">Favorite</li>
  //       <FaRegHeart className=" mr-32 size-7 text-black/80" />
  //     </ul>
  //   </div>
  // </nav>
};

export default Navbar;
