import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Table from "./Table";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

function TableSection() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const activeClasses = " font-bold text-blue-500 border-b-2 border-blue-500";
  const inactiveClasses = " text-gray-400";

  return (
    <div className="flex flex-col items-center bg-white mx-6 shadow-lg">
      <div className="flex items-center justify-between w-full px-3 border-b broder-gray-200">
        <div className="flex items-center">
          <div
            className={
              `text-center font-sans text-sm cursor-pointer px-2 py-3 uppercase flex items-center justify-center mr-4 ` +
              (toggleState === 1 ? activeClasses : inactiveClasses)
            }
            onClick={() => toggleTab(1)}
          >
            new/unread cases
          </div>
          <div
            className={
              `text-center font-sans text-sm cursor-pointer px-2 py-3 uppercase flex items-center justify-center` +
              (toggleState === 2 ? activeClasses : inactiveClasses)
            }
            onClick={() => toggleTab(2)}
          >
            outstanding and closed cases
          </div>
        </div>
        <div className="flex items-center px-2">
          <button className="border border-gray-200 bg-white text-gray-400 text-sm px-2 py-1">
            Filter
            <FontAwesomeIcon icon={faSlidersH} className="ml-2" />
          </button>
        </div>
      </div>
      <Table tableNumber={toggleState} />
    </div>
  );
}

export default TableSection;
