import React from "react";
import  Head  from 'next/head';
import Calendar from "../components/Calendar";
import Briefcase from "../components/Briefcase"; 
import Arrow from "../components/Arrow";
import Star from "../components/Star";
import Trophy from "../components/Trophy";


const Awards = () => {
  return (
    <>
      <Head>
        <title>Awards</title>
      </Head>
      <section className="bg-black w-full h-full pt-8 px-8 overflow-auto pb-24">
        <h1 className="text-blue-400 text-center text-4xl pt-6">Awards</h1>
        <div className="flex bg-black relative gap-x-3 mt-5 flex-row w-full h-full">
          <img src="starjava.png" className="w-10 h-10 " />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl text-white absolute -mt-1.5">
              Gold Badge
            </span>
            <span className=" ml-auto text-white flex flex-row gap-x-1">
              {" "}
              <Briefcase />
              Issuer <Arrow /> HackerRank
            </span>
          </div>
        </div>
        <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="flex gap-x-2 flex-wrap mt-5">
          <div className="flex text-white flex-row gap-x-2 w-full ">
            {" "}
            <Star />{" "}
            <span className="text-blue-200 font-bold text-xl">
              {" "}
              Java - 5 Stars{" "}
            </span>
            <span className="text-blue-200 flex text-white flex-wrap text-xl"></span>
            <span className="ml-auto text-white flex gap-x-1">
              <Calendar /> December, 2020
            </span>
          </div>
        </div>
        <div className="mt-3 ml-8 w-[70%] text-white text-xl text-justify mb-16">
          <div>
            Achieving the 5-star gold badge for Java from HackerRank through competitive coding showcases a high level of proficiency in Java programming, reflecting hard work, dedication, and passion for programming.
          </div>
        </div>
        <div className="flex bg-black relative gap-x-3 flex-row w-full h-full">
          <img src="starscript.png" className="w-10 h-10 " />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl absolute text-white -mt-1.5">
               Gold Badge
            </span>
            <span className=" ml-auto text-white flex flex-row gap-x-1">
              {" "}
              <Briefcase />
              Issuer <Arrow /> HackerRank
            </span>
          </div>
        </div>
        <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="flex gap-x-2 flex-wrap mt-5">
          <div className="flex text-white flex-row gap-x-2 w-full ">
            <Star />
            <span className="text-blue-200 font-bold text-xl">
             10 Daya of JS - 5 Stars{" "}
            </span>
            <span className="text-blue-200 flex flex-wrap text-xl"></span>
            <span className="ml-auto flex text-white gap-x-1">
              <Calendar /> June, 2022
            </span>
          </div>
        </div>
        <div className="mt-3 ml-8 text-white w-[70%] text-xl text-justify mb-16">
          <div>
           Achieving the 5-star gold badge for JavaScript from HackerRank after 10 days of consistent competitive coding is a remarkable accomplishment that reflects a strong understanding of JavaScript programming concepts and exceptional coding skills. Congratulations on this impressive achievement!
          </div>
        </div>
        <div className="flex bg-black relative gap-x-3 flex-row w-full h-full">
            <img src="tm.png" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl absolute text-white -mt-1.5">
              Contributor{"'"}s Award
            </span>
            <span className=" ml-auto text-white flex flex-row gap-x-1">
              {" "}
              <Briefcase />
              Issuer <Arrow /> Toastmasters International
            </span>
          </div>
        </div>
        <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="flex gap-x-2 flex-wrap mt-5">
          <div className="flex flex-row gap-x-2 w-full ">
            {" "}
            <Trophy />{" "}
            <span className="text-blue-200 font-bold text-xl">
              Highest Contributor to the Club of the Year Award {" "}
            </span>
            <span className="text-blue-200 flex flex-wrap text-xl"></span>
            <span className="ml-auto text-white flex gap-x-1">
              <Calendar />
              May, 2021
            </span>
          </div>
        </div>
        <div className="mt-3 ml-8 w-[70%] text-white text-xl text-justify mb-16">
          <div>
            Receiving the Highest Contributor to the Club of the Year Award at Toastmasters International is a great recognition of my outstanding leadership and communication skills. It reflected my commitment to personal and professional development.
          </div>
        </div>
        <div className="flex bg-black relative gap-x-3 flex-row w-full h-full">
          <img src="tm.png" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl absolute text-white -mt-1.5">
              Feather Award
            </span>
            <span className=" ml-auto flex text-white flex-row gap-x-1">
              {" "}
              <Briefcase />
              Issuer <Arrow /> Toastmasters International
            </span>
          </div>
        </div>
        <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="flex gap-x-2 flex-wrap mt-5">
          <div className="flex flex-row gap-x-2 w-full ">
            {" "}
            <Trophy />{" "}
            <span className="text-blue-200 font-bold text-xl">
              Golden Feather Award{" "}
            </span>
            <span className="text-blue-200 flex flex-wrap text-xl"></span>
            <span className="ml-auto flex text-white gap-x-1">
              <Calendar />
             May, 2021
            </span>
          </div>
        </div>
        <div className="mt-3 ml-8 w-[70%] text-white text-xl text-justify mb-16">
          <div>
           Receiving the Golden Feather Award at Toastmasters International is a testament to my exceptional commitment and contribution to the organization. It reflected my dedication to improving my communication and leadership skills.
          </div>
        </div>
        <div className="flex bg-black relative gap-x-3 flex-row w-full h-full">
          <img src="tm.png" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl absolute text-white -mt-1.5">
              Path Proficiency
            </span>
            <span className=" ml-auto text-white flex flex-row gap-x-1">
              {" "}
              <Briefcase />
              Issuer <Arrow /> Toastmasters International
            </span>
          </div>
        </div>
        <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="flex gap-x-2 flex-wrap mt-5">
          <div className="flex flex-row text-white gap-x-2 w-full ">
            {" "}
            <Trophy />{" "}
            <span className="text-blue-200 font-bold text-xl">
            Dynamic Leadership Proficient{" "}
            </span>
            <span className="text-blue-200 flex flex-wrap text-xl"></span>
            <span className="ml-auto text-white flex gap-x-1">
              <Calendar />
              October, 2020
            </span>
          </div>
        </div>
        <div className="mt-3 ml-8 w-[70%] text-white text-xl text-justify mb-16">
          <div>
           Achieving proficiency in the Dynamic Leadership path at Toastmasters International is a testament to my exceptional leadership skills. It reflected my commitment to personal and professional growth.
          </div>
        </div>
        <div className="flex bg-black relative gap-x-3 flex-row w-full h-full">
          <img src="tm.png" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl absolute text-white -mt-1.5">
              Pathway Award
            </span>
            <span className=" ml-auto text-white flex flex-row gap-x-1">
              {" "}
              <Briefcase />
              Issuer <Arrow /> Toastmasters International
            </span>
          </div>
        </div>
        <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="flex gap-x-2 flex-wrap mt-5">
          <div className="flex text-white flex-row gap-x-2 w-full ">
            {" "}
            <Trophy />{" "}
            <span className="text-blue-200 font-bold text-xl">
              Pathway Star Award{" "}
            </span>
            <span className="text-blue-200 flex flex-wrap text-xl"></span>
            <span className="ml-auto text-white flex gap-x-1">
              <Calendar />
              May, 2020
            </span>
          </div>
        </div>
        <div className="mt-3 ml-8 w-[70%] text-white text-xl text-justify mb-16">
          <div>
            Receiving the Pathway Star Award at Toastmasters International is a great recognition of my dedication and commitment to personal and professional growth. It reflected my exceptional consistency on completing a path in a certain duration.
          </div>
        </div>
         <div className="flex bg-black relative gap-x-3 flex-row w-full h-full">
          <img src="tm.png" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl absolute text-white -mt-1.5">
              Crown Award
            </span>
            <span className=" ml-auto text-white flex flex-row gap-x-1">
              {" "}
              <Briefcase />
              Issuer <Arrow /> Toastmasters International
            </span>
          </div>
        </div>
        <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="flex gap-x-2 flex-wrap mt-5">
          <div className="flex text-white flex-row gap-x-2 w-full ">
            {" "}
            <Trophy />{" "}
            <span className="text-blue-200 font-bold text-xl">
              Triple Crown Award{" "}
            </span>
            <span className="text-blue-200 flex flex-wrap text-xl"></span>
            <span className="ml-auto text-white flex gap-x-1">
              <Calendar />
              October, 2020
            </span>
          </div>
        </div>
        <div className="mt-3 ml-8 w-[70%] text-white text-xl text-justify mb-16">
          <div>
            Receiving the Triple Crown Award at Toastmasters International is a remarkable achievement that reflects my commitment to personal and professional growth. It demonstrated my exceptional consistency for 3 months straight for representing my club in other clubs.
          </div>
        </div>
      </section>
    </>
  );
};
export default Awards;
