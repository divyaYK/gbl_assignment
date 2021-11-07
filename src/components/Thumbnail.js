import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Thumbnail({ faIcon, colorUsed, shadowColor, buttonText }) {
  return (
    <div
      className={`flex flex-col items-center justify-around xs:w-full md:w-auto md:flex-grow bg-gradient-to-r from-${colorUsed}-500 to-${colorUsed}-400 h-full xs:mt-3 md:my-0 md:mx-3 rounded-lg p-6`}
      style={{ boxShadow: `0px 0px 13px 7px ${shadowColor}` }}
    >
      <div className={`bg-${colorUsed}-400 text-white text-lg p-2 rounded-md`}>
        <FontAwesomeIcon size="2x" icon={faIcon} />
      </div>
      <button
        className={`bg-white p-2 font-bold font-sans text-${colorUsed}-500 captialize w-1/2 rounded-md mt-4`}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Thumbnail;
