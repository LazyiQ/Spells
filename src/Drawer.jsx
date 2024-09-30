import clsx from "clsx";
import React, { useRef } from "react";
import { FaSkullCrossbones } from "react-icons/fa";
import clickOutside from "./clickOutside";
import { GiDragonOrb } from "react-icons/gi";

const Drawer = (props) => {
  const { children, isOpen, closeDrawer, allowedElement } = props;
  const drawerMainRef = useRef(null);

  // const drawerContentRef = useRef();
  clickOutside(drawerMainRef, allowedElement, closeDrawer);
  return (
    <div className="">
      <div
        ref={drawerMainRef}
        className={clsx(
          "h-screen bg-black/20  w-full fixed top-0 left-0 transition-all backdrop-blur-sm z-10 ",
          isOpen ? "visible opacity-100 " : "invisible opacity-0"
        )}
      >
        <div
          className={clsx(
            "flex flex-col h-full w-1/5 absolute bg-gray-100 top-0 right-0 transition-all font-custom",
            isOpen ? " translate-x-0" : " translate-x-full"
          )}
        >
          <div className="  border-b-4 border-gray-200 bg-white p-[10px] flex justify-between items-center px-5 ">
            <GiDragonOrb className=" size-14" />
            <div className=" px-16">
              <FaSkullCrossbones
                className="size-7 relative text-red-500 cursor-pointer"
                onClick={closeDrawer}
              />
            </div>
          </div>
          <div className=" overflow-y-scroll ">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
