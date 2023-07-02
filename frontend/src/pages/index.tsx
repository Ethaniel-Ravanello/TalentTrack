import Image from "next/image";

import { BsFillPeopleFill, BsFillBuildingFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";

export default function Home() {
  return (
    <main className={`h-full w-full p-10`}>
      <h2 className="text-4xl font-bold">Welcome Back, Ethaniel Ravanello</h2>
      <h3 className="mt-5">Welcome Back to your Dashboard</h3>
      <div className="flex gap-x-10">
        <div className="w-[400px] h-[200px] bg-card rounded-lg mt-10 p-10 flex">
          <BsFillPeopleFill className="w-20 h-20 mr-5" />
          <div>
            <h3 className="text-3xl font-semibold">Total Employees</h3>
            <p className="mt-5 text-2xl">320</p>
          </div>
        </div>

        <div className="w-[400px] h-[200px] bg-card rounded-lg mt-10 p-10 flex">
          <BsFillBuildingFill className="w-20 h-20 mr-5" />
          <div>
            <h3 className="text-3xl font-semibold">Total Department</h3>
            <p className="mt-5 text-2xl">10</p>
          </div>
        </div>

        <div className="w-[400px] h-[200px] bg-card rounded-lg mt-10 p-10 flex">
          <AiFillProject className="w-20 h-20 mr-5" />
          <div>
            <h3 className="text-3xl font-semibold">Total Ongoing Project</h3>
            <p className="mt-5 text-2xl">5</p>
          </div>
        </div>
      </div>

      <div className="w-full h-full gap-x-5 flex mt-20">
        <div className="w-[70%] h-full bg-card rounded-lg py-5">
          <h3 className="text-xl px-4 py-2">List Of Employees Who On Leave</h3>
          <div className="container mx-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    First Name
                  </th>
                  <th className="py-2 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Last Name
                  </th>
                  <th className="py-2 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="py-2 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Start Date
                  </th>
                  <th className="py-2 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    End Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">John</td>
                  <td className="py-2 px-4 border-b border-gray-200">Doe</td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    Engineering
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    2022-01-01
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    2022-12-31
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">Jane</td>
                  <td className="py-2 px-4 border-b border-gray-200">Smith</td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    Marketing
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    2021-08-15
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-[30%] h-full bg-card rounded-lg py-5 px-4">
          <h3 className="text-xl py-2">List Of Ongoing Projects</h3>

          <div className="my-2">
            <p className="text-lg">1. Akarashi</p>
          </div>
          <div className="my-2">
            <p className="text-lg">2. Ikuzports</p>
          </div>
          <div className="my-2">
            <p className="text-lg">3. AirBnB</p>
          </div>
        </div>
      </div>
    </main>
  );
}
