import React from "react";

import MainNavBar from "../components/MainNavBar";
import DashboardNavbar from "../components/DashboardNavbar";
import Table from "../components/Table";
import Thumbnail from "../components/Thumbnail";

function DashboardScreen() {
  return (
    <div className="">
      <MainNavBar />
      <DashboardNavbar />
      <Thumbnail />
      <Table />
    </div>
  );
}

export default DashboardScreen;
