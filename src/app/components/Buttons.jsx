import React from "react";

function Buttons({ primary, secondary, pusto, children }) {
  return (
    <button
      className={`${primary ? "bg-[#ffc007] px-[16px] py-[10px] rounded-lg font-medium" : ""} ${secondary ? "bg-white px-[16px] py-[10px] rounded-lg font-medium" : ""} ${pusto ? "bg-white px-[16px] py-[12px] w-[130px] rounded-lg font-medium border border-[#ffc007] border-solid transiition-all duration-300 hover:bg-[#ffc007]" : ""}`}
    >
      {children}
    </button>
  );
}

export default Buttons;
