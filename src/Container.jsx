import React from "react";

const Container = (props) => {
  const { children } = props;
  return (
    <div className="w-full h-full py-32 z-0 bg-gray-100 font-custom ">
      {children}
    </div>
  );
};

export default Container;
