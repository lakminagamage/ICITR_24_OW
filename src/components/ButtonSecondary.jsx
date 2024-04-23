import React from "react";

const ButtonSecondary = ({ text, onClick, width }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-md ${width} bg-white border border-black-primary border-opacity-50 px-3.5 py-2.5 text-sm font-semibold text-black-primary shadow-sm hover:bg-gray-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-primary transition-all duration-300 ease-in-out`}
    >
      {text}
    </button>
  );
};
// defualt props
ButtonSecondary.defaultProps = {
  text: "Button",
  onClick: () => {},
  width: "w-auto",
};
export default ButtonSecondary;
