import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

const Awards = () => {
  return (
    <>
      <Head>
        <title>Awards</title>
      </Head>
      <section className="bg-conic-to-b from-white via-sky-500 to-sky-500 w-full overflow-auto py-5">
        <h1 className="text-[#D891EF] text-center text-4xl pt-6">
          Awards and Recognitions
        </h1>
        <div className="pt-8 px-8 overflow-auto ">
          <div>
            <table className="table w-full h-52">
              <thead className="border border-[#D891EF] text-white h-[50px]">
                <tr>
                  <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                    Award / Badge
                  </th>
                  <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                    Issuing Organisation
                  </th>
                  <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="border text-white h-[420px]">
                <tr className="border text-white">
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    5 Star Gold Badge for JavaScript
                  </td>
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    HackerRank
                  </td>
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    June 2022
                  </td>
                </tr>
                <tr className="border text-white">
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    Highest Contributor to the Club of the Year Award
                  </td>
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    ToastMasters International
                  </td>
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    May 2021
                  </td>
                </tr>{" "}
                <tr className="border text-white">
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    Golden Feather Award
                  </td>
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    ToastMasters International
                  </td>
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    May 2021
                  </td>
                </tr>{" "}
                <tr className="border text-white">
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    Speech Evaluation Contest Runner - Up - Division Level
                  </td>
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    ToastMasters International
                  </td>
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    December 2020
                  </td>
                </tr>{" "}
                <tr className="border text-white">
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    5 Star Gold Badge for Java
                  </td>
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    HackerRank
                  </td>
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    December 2020
                  </td>
                </tr>{" "}
                <tr className="border text-white">
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    Speech Evaluation Contest Winner - Area Level
                  </td>
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    ToastMasters International
                  </td>
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    November 2020
                  </td>
                </tr>
                <tr className="border text-white">
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    Dynamic Leadership Proficient
                  </td>
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    ToastMasters International
                  </td>
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    October 2020
                  </td>
                </tr>
                <tr className="border text-white">
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    Speech Evaluation Contest Winner - Club level
                  </td>
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    ToastMasters International
                  </td>
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    October 2020
                  </td>
                </tr>
                <tr className="border text-white">
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    Pathway Star Award
                  </td>
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    ToastMasters International
                  </td>
                  <td className="border border-[#D891EF] py-3  text-white text-center px-3">
                    May 2020
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

export default Awards;
