"use client";

import React, { useState } from "react";
import Link from "next/link";

import { MdDashboardCustomize } from "react-icons/md";
import { BsFillPeopleFill, BsFillBuildingFill } from "react-icons/bs";
import { AiFillWallet, AiFillCalendar } from "react-icons/ai";

const SideNav = () => {
  const [openDrop, setOpenDrop] = useState(false);
  return (
    <div className="w-[15%] h-screen bg-navbar block ">
      <h1 className="text-3xl font-semibold p-10">TalentTrack</h1>

      <Link href="/">
        <div className="mt-18 text-xl flex hover:bg-navbar2 rounded-lg w-full pl-10 py-4">
          <MdDashboardCustomize className="mt-1 mr-2" />
          <p>Dashboard</p>
        </div>
      </Link>

      <Link href="/employees">
        <div className="mt-18 text-xl flex hover:bg-navbar2 rounded-lg w-full pl-10 py-4">
          <BsFillPeopleFill className="mt-1 mr-2" />
          <p>Employees</p>
        </div>
      </Link>

      <div
        onClick={() => setOpenDrop(!openDrop)}
        className="mt-18 text-xl flex cursor-pointer hover:bg-navbar2 rounded-lg w-full pl-10 py-4"
      >
        <BsFillBuildingFill className="mt-1 mr-2" />
        <div>Department</div>
      </div>

      <div className={openDrop ? "w-full px-3 mb-3 text-text block" : "hidden"}>
        <Link href="/department/engineering" className="text-lg  rounded-lg">
          <p className="pl-14 py-1 my-3 hover:bg-navbar2 rounded-lg">
            Engineering
          </p>
        </Link>

        <Link href="/department/design" className="text-lg rounded-lg">
          <p className="pl-14 py-1 my-3 hover:bg-navbar2 rounded-lg">Design</p>
        </Link>

        <Link href="/department/marketing" className="text-lg rounded-lg">
          <p className="pl-14 py-1 my-3 hover:bg-navbar2 rounded-lg">
            Marketing
          </p>
        </Link>

        <Link href="/department/sales" className="text-lg rounded-lg">
          <p className="pl-14 py-1 my-3 hover:bg-navbar2 rounded-lg">Sales</p>
        </Link>

        <Link href="/department/sales" className="text-lg rounded-lg">
          <p className="pl-14 py-1 my-3 hover:bg-navbar2 rounded-lg">
            Customer Service
          </p>
        </Link>
      </div>

      <Link href="/salary">
        <div className="mt-18 text-xl flex hover:bg-navbar2 rounded-lg w-full pl-10 py-4">
          <AiFillWallet className="mt-1 mr-2 text-text" />
          <p>Salary</p>
        </div>
      </Link>

      <Link href="/pto">
        <div className="mt-18 text-xl flex hover:bg-navbar2 rounded-lg w-full pl-10 py-4">
          <AiFillCalendar className="mt-1 mr-2" />
          <p>PTO</p>
        </div>
      </Link>
    </div>
  );
};

export default SideNav;
