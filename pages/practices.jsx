import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

const Practices = () => {
  return (
    <>
      <Head>
        <title>Practices</title>
      </Head>
      <section className="bg-black w-full overflow-auto py-5">
        <h1 className="text-[#D891EF] text-center text-4xl pt-6">
          Practice Platforms
        </h1>
        <div className="pt-8 px-8 overflow-auto ">
          <div>
            <table className="table w-full h-52">
              <thead className="border border-[#D891EF] text-white h-[50px]">
                <tr>
                  <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                    Platform
                  </th>
                  <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                    Profile Link
                  </th>
                </tr>
              </thead>
              <tbody className="border text-white">
                <tr className="border text-white">
                  <td className="border border-[#D891EF] py-2 text-white text-center  px-3">
                    GitHub
                  </td>

                  <td className="border border-[#D891EF] py-2 text-white text-center  px-3">
                    <div className="w-full flex justify-center items-center gap-x-5">
                      <a
                        href="
                  https://github.com/rhea0110
                  "
                      >
                        <img
                          className="rounded-full"
                          src={"/gitgit.png"}
                          height={40}
                          width={40}
                          fill-white
                        />
                      </a>

                      <a
                        href="https://github.com/rhea0110"
                        className="underline text-[#D891EF] animate-pulse"
                      >
                        See Profile!
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="border border-[#D891EF] text-white">
                  <td className=" py-2 border border-[#D891EF] text-white text-center  px-3">
                    HackerRank
                  </td>

                  <td className="border border-[#D891EF] py-2  text-white text-center  px-3">
                    <div className="w-full flex justify-center items-center gap-x-5">
                      <a
                        href="
                    https://www.hackerrank.com/j_rhea0110
                  
                  "
                      >
                        <img
                          className="rounded-full"
                          src={"/rank.png"}
                          height={40}
                          width={40}
                          fill-white
                        />
                      </a>
                      <a
                        href="https://www.hackerrank.com/j_rhea0110"
                        className="underline text-[#D891EF] animate-pulse"
                      >
                        See Profile!
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="border text-white">
                  <td className="border border-[#D891EF] py-2  text-white text-center  px-3">
                    CodeChef
                  </td>

                  <td className="border border-[#D891EF] py-2  text-white text-center  px-3">
                    <div className="w-full flex justify-center items-center gap-x-5">
                      <a
                        href="
                  https://www.codechef.com/users/rheajain0110
                  
                  "
                      >
                        <img
                          className="rounded-full"
                          src={"/codechef.jpg"}
                          height={40}
                          width={40}
                          fill-white
                        />
                      </a>
                      <a
                        href="https://www.codechef.com/users/rheajain0110"
                        className="underline text-[#D891EF] animate-pulse"
                      >
                        See Profile!
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="border border-[#D891EF] text-white">
                  <td className=" py-2 border border-[#D891EF] text-white text-center  px-3">
                    LeetCode
                  </td>
                  <td className="border border-[#D891EF] py-2  text-white text-center  px-3">
                    <div className="w-full flex justify-center items-center gap-x-5">
                      <a
                        href="
                  https://leetcode.com/rhea0110/
         
                  
                  "
                      >
                        <img
                          className="rounded-full"
                          src={"/leet.png"}
                          height={40}
                          width={40}
                          fill-white
                        />
                      </a>
                      <a
                        href="https://leetcode.com/rhea0110/"
                        className="underline text-[#D891EF] animate-pulse"
                      >
                        See Profile!
                      </a>
                    </div>
                  </td>
                </tr>{" "}
                <tr className="border text-white">
                  <td className="border border-[#D891EF] py-2  text-white text-center  px-3">
                    HackerEarth
                  </td>

                  <td className="border border-[#D891EF] py-2  text-white text-center  px-3">
                    <div className="w-full flex justify-center items-center gap-x-5">
                      <a
                        href="
                  https://www.hackerearth.com/@j.rhea0110
                                    
                  "
                      >
                        <img
                          className="rounded-full"
                          src={"/earth.png"}
                          height={40}
                          width={40}
                          fill-white
                        />
                      </a>
                      <a
                        href="https://www.hackerearth.com/@j.rhea0110"
                        className="underline text-[#D891EF] animate-pulse"
                      >
                        See Profile!
                      </a>
                    </div>
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

export default Practices;
