import clsx from "clsx";
import React from "react";
import pathConstants from "./pathConstants";
import { Link } from "react-router-dom";
import { GiBottledShadow } from "react-icons/gi";
import { TbHeartFilled } from "react-icons/tb";
import Section from "./Section";
import Drawer from "./Drawer";

const Home = () => {
  return (
    <>
      <Section>
        <h1
          className={clsx(
            " h-full w-full font-medium  text-5xl  mt-52 text-center"
          )}
        >
          <div className="w-full font-normal text-gray-500 text-5xl text-center">
            Welcome to
          </div>
          <div className="w-full font-medium text-[65px] text-center">
            DnD Spell Factory
          </div>
          <div className="text-center w-full mt-4 text-xl font-normal  ">
            Where you can find all your favorite dungeon and dragon spells
          </div>
        </h1>
        <div className="py-10 btn-section flex items-center justify-center mr-5">
          <div className="gap-5 flex items-center">
            <div className=" ">
              <Link
                to={pathConstants.SPELLS}
                className="bg-red-600/90 font-medium py-2 px-28 rounded-full text-white flex justify-center items-center"
              >
                <GiBottledShadow className=" size-7 mr-3 " />
                View All Spells
              </Link>
            </div>

            <div>
              <Link
                to={pathConstants.FAVORITES}
                className="bg-none border-2 border-black py-2 font-medium px-28 rounded-full flex justify-center items-center"
              >
                <TbHeartFilled className=" size-6 mr-3" />
                View Favorite
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
