import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Thumbnail({ faIcon, colorUsed, shadowColor, buttonText }) {
  return (
    <div
      className={`flex flex-col items-center justify-around flex-grow bg-gradient-to-r from-${colorUsed}-500 to-${colorUsed}-400 h-full mx-3 rounded-lg`}
      style={{ boxShadow: `0px 0px 13px 7px ${shadowColor}` }}
    >
      <div className={`bg-${colorUsed}-400 text-white text-lg p-2 rounded-md`}>
        <FontAwesomeIcon size="2x" icon={faIcon} />
      </div>
      <button
        className={`bg-white p-2 font-bold font-sans text-${colorUsed}-500 captialize w-1/2 rounded-md`}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Thumbnail;
