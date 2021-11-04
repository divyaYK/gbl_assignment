import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faThLarge } from "@fortawesome/free-solid-svg-icons";
import {
  faBell,
  faFileAlt,
  faQuestionCircle,
} from "@fortawesome/free-regular-svg-icons";

function DashboardNavbar() {
  return (
    <div
      className="flex flex-col items-center w-14 bg-blue-600 text-gray-300"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <div className="p-3 w-full text-center cursor-pointer text-white bg-blue-500 border-l-4 border-white">
        <FontAwesomeIcon icon={faHome} className="" />
      </div>
      <div className="p-3 w-full text-center cursor-pointer">
        <FontAwesomeIcon icon={faThLarge} className="" />
      </div>
      <div className="p-3 w-full text-center cursor-pointer">
        <FontAwesomeIcon icon={faFileAlt} className="" />
      </div>
      <div className="p-3 w-full text-center cursor-pointer">
        <FontAwesomeIcon icon={faBell} className="" />
      </div>
      <div className="p-3 w-full text-center cursor-pointer">
        <FontAwesomeIcon icon={faQuestionCircle} className="" />
      </div>
    </div>
  );
}

export default DashboardNavbar;
