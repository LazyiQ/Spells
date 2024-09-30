import React, { useEffect, useRef } from "react";
import { Link, matchPath, useResolvedPath } from "react-router-dom";

const Navitem = (props) => {
  const { indicator, setindicatorBound } = props;

  const linkRef = useRef();
  const url = useResolvedPath();

  useEffect(() => {
    if (matchPath(indicator.href, url.pathname)) {
      if (!linkRef || !linkRef.current) {
        return;
      }
      setindicatorBound({
        width: linkRef.current.offsetWidth + 15,
        left: linkRef.current.offsetLeft - 7,
      });
    }
  }, [url.pathname]);

  const handleLinkClick = () => {
    if (!linkRef || !linkRef.current) {
      return;
    }
    setindicatorBound({
      width: linkRef.current.offsetWidth,
      left: linkRef.current.offsetLeft,
    });
  };
  return (
    <Link
      ref={linkRef}
      onClick={handleLinkClick}
      to={indicator.href}
      className=" text-[15px] font-medium text-gray-600 hover:text-black"
    >
      {indicator.text}
    </Link>
  );
};
export default Navitem;
