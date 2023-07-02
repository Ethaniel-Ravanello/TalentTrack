"use client";

import React, { useState } from "react";
import Link from "next/link";

import { MdDashboardCustomize } from "react-icons/md";
import { BsFillPeopleFill, BsFillBuildingFill } from "react-icons/bs";
import { AiFillWallet, AiFillCalendar } from "react-icons/ai";

const SideNav = () => {
  const [openDrop, setOpenDrop] = useState(false);
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

      <div
        onClick={() => setOpenDrop(!openDrop)}
        className="mt-18 text-xl flex cursor-pointer hover:bg-navbar2 rounded-lg w-full pl-10 py-4"
      >
        <BsFillBuildingFill className="mt-1 mr-2" />
        <div>Department</div>
      </div>

      <div className={openDrop ? "w-full px-3 mt-3 text-text" : "hidden"}>
        <p className="my-5 text-lg hover:bg-navbar2 pl-14 py-1 rounded-lg">
          Engineering
        </p>
        <p className="my-5 text-lg hover:bg-navbar2 pl-14 py-1 rounded-lg">
          Design
        </p>
        <p className="my-5 text-lg hover:bg-navbar2 pl-14 py-1 rounded-lg">
          Marketing
        </p>
        <p className="my-5 text-lg hover:bg-navbar2 pl-14 py-1 rounded-lg">
          Sales
        </p>
        <p className="my-5 text-lg hover:bg-navbar2 pl-14 py-1 rounded-lg">
          Customer Service
        </p>
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
