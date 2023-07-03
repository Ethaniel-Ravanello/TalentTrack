import React from "react";

import Card from "@component/Card";

export default function Design() {
  return (
    <main className=" h-full w-full py-10 px-24">
      <h2 className="text-4xl font-bold">
        List Of People in Design Department
      </h2>
      <h3 className="mt-5">Add, Delete or Update Employees</h3>

      <div className="flex mt-10">
        <input
          type="text"
          placeholder="Search"
          className="bg-white bg-black text-text2 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 rounded-md py-2 px-4 w-64 sm:w-96"
        />
      </div>

      <div className="mt-5">
        <button className="bg-button hover:bg-buttonClick active:bg-button px-5 py-3 rounded-lg">
          Add Employee
        </button>

        <div className="w-full h-full flex flex-wrap mt-10 gap-x-10 gap-y-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
}
