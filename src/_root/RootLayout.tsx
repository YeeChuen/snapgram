import React from "react";
import Topbar from "../components/shared/Topbar";
import { Outlet } from "react-router-dom";
import LeftSidebar from "../components/shared/LeftSidebar";
import Bottombar from "../components/shared/Bottombar";

const RootLayout = () => { 
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <Bottombar />
    </div>
  );
};

export default RootLayout;
