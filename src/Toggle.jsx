import { useState } from "react";

const Toggle = (initialState = false) => {
  const [isOpen, setisOpen] = useState(initialState);

  const open = () => {
    setisOpen(true);
  };
  const close = () => {
    setisOpen(false);
  };
  const toggle = () => {
    setisOpen((oldIsOpen) => !oldIsOpen);
  };
  return { isOpen, open, close, toggle };
};

export default Toggle;
