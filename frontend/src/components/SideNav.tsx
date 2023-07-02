import React from "react";
import Link from "next/link";

import { MdDashboardCustomize } from "react-icons/md";
import { BsFillPeopleFill, BsFillBuildingFill } from "react-icons/bs";
import { AiFillWallet, AiFillCalendar } from "react-icons/ai";

const SideNav = () => {
  return (
    <div className="w-[15%] h-screen bg-navbar ">
      <h1 className="text-3xl font-semibold p-10">TalentTrack</h1>

      <div className="mt-18 text-xl flex hover:bg-navbar2 rounded-lg w-full pl-10 py-4">
        <MdDashboardCustomize className="mt-1 mr-2" />
        <Link href={"/"}>Dashboard</Link>
      </div>
      <div className="mt-18 text-xl flex hover:bg-navbar2 rounded-lg w-full pl-10 py-4">
        <BsFillPeopleFill className="mt-1 mr-2" />
        <Link href={"/employees"}>Employee</Link>
      </div>
      <div className="mt-18 text-xl flex hover:bg-navbar2 rounded-lg w-full pl-10 py-4">
        <BsFillBuildingFill className="mt-1 mr-2" />
        <Link href={"/department"}>Department</Link>
      </div>
      <div className="mt-18 text-xl flex hover:bg-navbar2 rounded-lg w-full pl-10 py-4">
        <AiFillWallet className="mt-1 mr-2 text-text" />
        <Link href={"/"}>Salary</Link>
      </div>
      <div className="mt-18 text-xl flex hover:bg-navbar2 rounded-lg w-full pl-10 py-4">
        <AiFillCalendar className="mt-1 mr-2" />
        <Link href={"/"}>PTO</Link>
      </div>
    </div>
  );
};

export default SideNav;
