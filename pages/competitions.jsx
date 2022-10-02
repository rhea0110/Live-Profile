import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

const Competitions = () => {
  return (
      <>
     <Head>
        <title>Competitions</title>
        </Head>
    <section className="bg-gradient-to-b from-gray-700 via-gray-900 to-black w-full overflow-auto py-5">
      <h1 className="text-[#D891EF] text-center text-4xl pt-6">Competitions</h1>
      <div className="pt-8 px-8 overflow-auto ">
        <div>
          <table className="table w-full h-52">
            <thead className="border border-[#D891EF] text-white h-[50px]">
              <tr>
                <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                  Competition
                </th>
                <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                  Level
                </th>
                <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                  Description
                </th>
                <th className="border border-[#D891EF] whitespace-nowrap px-2 text-[#D891EF] text-lg">
                  Position Secured
                </th>
                <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                  Organising Committee
                </th>
                <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="border text-white">
              <tr className="border text-white">
                <td className="border border-[#D891EF] py-2  text-white text-center whitespace-nowrap px-3">
                  Presentation and Personality Contest
                </td>
                <td className="border border-[#D891EF] py-2  text-white text-center whitespace-nowrap px-3">
                  College
                </td>
                <td className="border border-[#D891EF] py-2  text-white text-left px-3">
                  A personality and presentation video contest, where students
                  had to create presentationon the given topic and have to
                  present it in a video which is non edited and modified. The
                  topic was Lockdown and Economy.
                </td>
                <td className="border border-[#D891EF] py-2 text-xl text-white text-center px-3">
                  Winner
                </td>
                <td className="border border-[#D891EF] text-white py-2 px-3 text-center">
                  SSIPMT Raipur college
                </td>
                <td className="border border-[#D891EF] text-white py-2 whitespace-nowrap px-3 text-left">
                  During Lockdown
                </td>
              </tr>
              <tr className="border border-[#D891EF] text-white">
                <td className=" py-2 border border-[#D891EF] text-white text-center whitespace-nowrap px-3">
                  Speech Evaluation Contest
                </td>
                <td className="border border-[#D891EF] py-2  text-white text-center whitespace-nowrap px-3">
                  District
                </td>
                <td className="border border-[#D891EF] text-white text-left py-2 px-3">
                  This was the level 3 contest in the Speech Evaluation Contest.
                  I belonged to the District-98 where I had represented my
                  Division that is Division-N.
                </td>
                <td className="border border-[#D891EF] text-white text-xl text-center py-2 px-3">
                  2<sup>nd</sup>
                </td>
                <td className="border border-[#D891EF] text-white whitespace-nowrap text-center py-2 px-3">
                  ToastMasters International
                </td>
                <td className="border border-[#D891EF] text-white text-center whitespace-nowrap py-2 px-3">
                  December, 2020
                </td>
              </tr>
              <tr className="border border-[#D891EF] text-white">
                <td className=" py-2 border border-[#D891EF] text-white text-center whitespace-nowrap px-3">
                  Speech Evaluation Contest
                </td>
                <td className="border border-[#D891EF] py-2  text-white text-center whitespace-nowrap px-3">
                  Area
                </td>
                <td className="border border-[#D891EF] text-white text-left py-2 px-3">
                  This was the level 2 contest in the Speech Evaluation Contest.
                  I belonged to the Division-N where I had represented my
                  College Club that is SSIPMT Spellbinders Club.
                </td>
                <td className="border border-[#D891EF] text-white text-xl text-center py-2 px-3">
                  Winner
                </td>
                <td className="border border-[#D891EF] text-white whitespace-nowrap text-center py-2 px-3">
                  ToastMasters International
                </td>
                <td className="border border-[#D891EF] text-white text-center whitespace-nowrap py-2 px-3">
                  November, 2020
                </td>
              </tr>
              <tr className="border border-[#D891EF] text-white">
                <td className=" py-2 border border-[#D891EF] text-white text-center whitespace-nowrap px-3">
                  Speech Evaluation Contest
                </td>
                <td className="border border-[#D891EF] py-2  text-white text-center whitespace-nowrap px-3">
                  Club
                </td>
                <td className="border border-[#D891EF] text-white text-left py-2 px-3">
                  This was the level 1 contest in the Speech Evaluation Contest.
                  I belonged to the SSIPMT Spellbinders Club where I had
                  represented myself as a competitor to other participants from
                  the same club.
                </td>
                <td className="border border-[#D891EF] text-white text-xl text-center py-2 px-3">
                  Winner
                </td>
                <td className="border border-[#D891EF] text-white whitespace-nowrap text-center py-2 px-3">
                  ToastMasters International
                </td>
                <td className="border border-[#D891EF] text-white text-center whitespace-nowrap py-2 px-3">
                  October, 2020
                </td>
              </tr>
              <tr className="border border-[#D891EF] text-white">
                <td className=" py-2 border border-[#D891EF] text-white text-center whitespace-nowrap px-3">
                  Humourous Speech Contest
                </td>
                <td className="border border-[#D891EF] py-2  text-white text-center whitespace-nowrap px-3">
                  Club
                </td>
                <td className="border border-[#D891EF] text-white text-left py-2 px-3">
                  This was the level 1 contest in the Humourous Speech Contest.
                  I belonged to the SSIPMT Spellbinders Club where I had
                  represented myself as a competitor to other participants from
                  the same club.
                </td>
                <td className="border border-[#D891EF] text-white text-xl text-center py-2 px-3">
                  2<sup>nd</sup>
                </td>
                <td className="border border-[#D891EF] text-white whitespace-nowrap text-center py-2 px-3">
                  ToastMasters International
                </td>
                <td className="border border-[#D891EF] text-white text-center whitespace-nowrap py-2 px-3">
                  October, 2019
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

export default Competitions;
