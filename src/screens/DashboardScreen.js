import React from "react";

import MainNavBar from "../components/MainNavBar";
import DashboardNavbar from "../components/DashboardNavbar";
import Table from "../components/Table";
import Thumbnail from "../components/Thumbnail";

function DashboardScreen() {
  return (
    <div className="flex flex-col">
      <MainNavBar />
      <div className="flex">
        <DashboardNavbar />
        <div className="flex flex-col">
          <Thumbnail />
          <Table />
        </div>
      </div>
    </div>
  );
}

export default DashboardScreen;
