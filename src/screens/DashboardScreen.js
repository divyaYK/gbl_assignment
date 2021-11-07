import React from "react";

import MainNavBar from "../components/MainNavBar";
import DashboardNavbar from "../components/DashboardNavbar";
import TableSection from "../components/TableSection";
import Thumbnails from "../components/Thumbnails";

function DashboardScreen() {
  return (
    <div className="flex flex-col">
      <MainNavBar />
      <div className="flex">
        <DashboardNavbar />
        <div className="flex flex-col xs:justify-between md:justify-evenly overflow-x-hidden">
          <Thumbnails />
          <TableSection />
        </div>
      </div>
    </div>
  );
}

export default DashboardScreen;
