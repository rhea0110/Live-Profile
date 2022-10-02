import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

const Trainings = () => {
  return (
    <>
      <Head>
        <title>Trainings</title>
      </Head>
      <section className="bg-gradient-to-b from-gray-700 via-gray-900 to-black w-full overflow-auto py-5">
        <h1 className="text-[#D891EF] text-center text-4xl pt-6">
          Trainings and Workshops
        </h1>
        <div className="pt-8 px-8 overflow-auto ">
          <div>
            <table className="table w-full h-52">
              <thead className="border border-[#D891EF] text-white h-[50px]">
                <tr>
                  <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                    Training/ Workshop
                  </th>
                  <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                    Organizer
                  </th>
                  <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="border text-white">
                <tr className="border text-white">
                  <td className="border border-[#D891EF] py-3  text-white text-center whitespace-nowrap px-3">
                    SuperCoders Specialization Training
                  </td>

                  <td className=" border border-[#D891EF] py-3  text-[#D891EF] animate-none text-center whitespace-nowrap px-3">
                    <a className="animate-pulse" href="https://codequotient.com/profile">CodeQuotient</a>
                  </td>
                  <td className="border border-[#D891EF] text-white py-3 px-3 text-center">
                    April 2022
                  </td>
                </tr>
                <tr className="border border-[#D891EF] text-white">
                  <td className=" py-3 border border-[#D891EF] text-white text-center whitespace-nowrap px-3">
                    Campus Recruitment Training
                  </td>

                  <td className="border border-[#D891EF] text-white text-center py-3 px-3">
                    Nachiket Joshi Trainings and SSIPMT Raipur
                  </td>
                  <td className="border border-[#D891EF] text-white text-center py-3 px-3">
                    April 2022
                  </td>
                </tr>
                <tr className="border border-[#D891EF] text-white">
                  <td className=" py-3 border border-[#D891EF] text-white text-center whitespace-nowrap px-3">
                    SuperCoders Training
                  </td>

                  <td className="border border-[#D891EF] text-[#D891EF] text-center py-3 px-3">
                    <a href="https://codequotient.com/profile " className="animate-pulse">CodeQuotient</a>
                  </td>
                  <td className="border border-[#D891EF] text-white text-center py-3 px-3">
                    February 2022
                  </td>
                </tr>
                <tr className="border border-[#D891EF] text-white">
                  <td className=" py-3 border border-[#D891EF] text-white text-center whitespace-nowrap px-3">
                    ESD Training
                  </td>

                  <td className="border border-[#D891EF] text-white text-center py-3 px-3">
                 RPG Foundation
                  </td>
                  <td className="border border-[#D891EF] text-white text-center py-3 px-3">
                    September 2021
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trainings;
