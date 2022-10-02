import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

const Internships = () => {
  return (
    <>
      <Head>
        <title>Internships</title>
      </Head>
      <section className="bg-conic-to-b from-white via-sky-500 to-sky-500 w-full overflow-auto py-5">
        <h1 className="text-[#D891EF] text-center text-4xl pt-6">
          Internship Details
        </h1>
        <div className="pt-8 px-8 overflow-auto ">
          <div>
            <table className="table w-full h-52">
              <thead className="border border-[#D891EF] text-white h-[50px]">
                <tr>
                  <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                    Role
                  </th>
                  <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                    Company
                  </th>
                  <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                    Start Date
                  </th>
                  <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                    End Date
                  </th>
                  <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                    Description
                  </th>
                  <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                    Skills / Tools
                  </th>
                </tr>
              </thead>
              <tbody className="border text-white">
                <tr className="border text-white">
                  <td className="border border-[#D891EF] py-2  text-white text-center px-3">
                    Product Intern
                  </td>
                  <td className="border border-[#D891EF] py-2  text-white text-center px-3">
                    <div className="pb-2 pl-6 animate-pulse">
                      <a href="https://caravel.tech/about">
                        <img
                          className="rounded-full"
                          src={"/caravelpng.png"}
                          height={30}
                          width={30}
                          stroke-white
                        />
                      </a>
                    </div>
                    <a href="https://caravel.tech/about">CaravelTech</a>
                  </td>
                  <td className="border border-[#D891EF] py-2  text-white text-center px-3">
                    September 1, 2022
                  </td>
                  <td className="border border-[#D891EF] py-2  text-red-500 animate-none text-center px-3">
                    Present
                  </td>
                  <td className="border border-[#D891EF] py-2  text-white text-left px-3">
                    I am managing 4 products currently which include 3 - web
                    products and 1 mobile app product. My role is to understand
                    our client{"'"}s need to provide the best solution and act
                    as a communicator between the 3D{"'"}s - Design -
                    Development - Delivery. I also check for crucial roadblocks
                    or bugs to help the team with the best solution to overcome
                    it.
                  </td>
                  <td className="border border-[#D891EF] text-white py-2 px-3 text-left">
                    <ol type="1">
                      <li className="border-b-2">
                        GitHub Projects
                      </li>
                      <li className="border-b-2">
                        Jira Software
                      </li>
                      <li className="border-b-2">GitHub</li>
                      <li className="">Git</li>
                    </ol>
                  </td>
                </tr>
                <tr className="border border-[#D891EF] text-white">
                  <td className=" py-2 border border-[#D891EF] text-white text-center px-3">
                    SDE Intern
                  </td>
                  <td className="border border-[#D891EF] py-2  text-white text-center px-3">
                    <div className="pb-2 pl-6 animate-pulse">
                      <a href="https://caravel.tech/about">
                        <img
                          className="rounded-full"
                          src={"/caravelpng.png"}
                          height={30}
                          width={30}
                          fill-white
                        />
                      </a>
                    </div>
                    <a href="https://caravel.tech/about">CaravelTech</a>
                  </td>
                  <td className="border border-[#D891EF] text-white text-center py-2  px-3">
                    July 8, 2022
                  </td>
                  <td className="border border-[#D891EF] text-white text-center py-2  px-3">
                    August 31, 2022
                  </td>
                  <td className="border border-[#D891EF] text-white text-left py-2 px-3">
                    My work was to design user stories with SES technique -
                    Simple Easy and Short using common frameworks and libraries.
                  </td>
                  <td className="border border-[#D891EF] text-white text-left py-2 px-3">
                    <ol type="1">
                      <li className="border-b-2">
                        TailwindCSS
                      </li>
                      <li className="border-b-2">
                        TypeScript
                      </li>
                      <li className="">ReactJS</li>
                    </ol>
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

export default Internships;
