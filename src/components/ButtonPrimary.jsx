import React from "react";

const ButtonPrimary = ({ text, onClick, width }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-md bg-blue-primary ${width} px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-primary transition-all duration-300 ease-in-out`}
    >
      {text}
    </button>
  );
};
//default button props
ButtonPrimary.defaultProps = {
  text: "Button",
  onClick: () => {},
  width: "w-auto",
};
export default ButtonPrimary;
