import clsx from "clsx";
import React from "react";

const Section = (props) => {
  const { children } = props;
  return <div className="w-full h-full font-custom z-0 ">{children}</div>;
};

export default Section;
