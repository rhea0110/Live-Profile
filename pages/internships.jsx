import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Calendar from "../components/Calendar";
import InternshipData from "../components/InternshipData";
import PlaneData from "../components/PlaneData";

const Internships = () => {
  return (
    <>
      <Head>
        <title>Internships</title>
      </Head>
      <section className="bg-black w-full min-h-screen overflow-auto pt-5 ">
        <h1 className="text-[#D891EF] text-center text-4xl pt-3">
          Internships & Experience
        </h1>
        <div className="pt-8 px-8 overflow-auto">
          {/* <div className="flex relative gap-x-3 flex-row w-full h-full">
            <img src="caravelpng.png" className="w-10 h-10 rounded-full" />
            <div className="my-auto w-full flex flex-wrap h-full">
              <span className="text-2xl absolute -mt-1.5">Caravel Tech</span>
              <span className=" ml-auto flex flex-row gap-x-1">
                {" "}
                <Calendar /> June 2022 - October, 2022{" "}
              </span>
            </div>
          </div>
          <hr className="mt-[5px] bg-[D891EF]"></hr> */}
          <div>
            <InternshipData />
            <div className="pt-[78px]">
              <PlaneData />
            </div>
            <hr className="mt-[5px] bg-[D891EF]"></hr>
          </div>
        </div>
      </section>
    </>
  );
};

export default Internships;
