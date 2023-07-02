import React from "react";

export default function Employees() {
  return (
    <main className=" h-full w-full p-10">
      <h2 className="text-4xl font-bold">Employee List</h2>
      <h3 className="mt-5">Add, Delete or Update Existing Exployees</h3>

      <div className="flex mt-10">
        <input
          type="text"
          placeholder="Search"
          className="bg-white bg-black text-text2 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 rounded-md py-2 px-4 w-64 sm:w-96"
        />
      </div>
    </main>
  );
}
