import React, { useEffect } from "react";

const clickOutside = (targetElement, allowedElement, onClickOutSide) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        targetElement.current &&
        e.target == targetElement.current &&
        e.target != allowedElement.current
      ) {
        onClickOutSide();
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
};

export default clickOutside;
