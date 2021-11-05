import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCog, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import faker from "faker";

function MainNavBar() {
  return (
    <div className="flex items-center bg-white border-b border-gray-200 h-16">
      <nav className="flex items-center justify-between py-3 px-6 w-full">
        <div className="flex xs:flex-col md:flex-row justify-around items-center">
          <FontAwesomeIcon
            className="text-gray-400 mr-8 cursor-pointer"
            icon={faBars}
          />
          <a
            href="/"
            className="text-3xl font-bold font-sans uppercase text-blue-600"
          >
            shahi
          </a>
        </div>
        <div className="flex xs:flex-col md:flex-row items-center w-1/6 justify-center">
          <FontAwesomeIcon
            icon={faCog}
            className="text-gray-400 cursor-pointer"
          />
          <div className="cursor-pointer flex items-center ml-5 pl-5 border-l border-gray-300">
            <img
              src={faker.image.avatar()}
              alt={faker.name.firstName()}
              className="rounded-full object-fit object-cover mr-1 h-7"
            />
            <FontAwesomeIcon icon={faCaretDown} className="text-gray-400" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MainNavBar;
