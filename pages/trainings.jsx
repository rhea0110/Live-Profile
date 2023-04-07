import React from "react";
import  Head  from 'next/head';
import Calendar from "../components/Calendar";
import Briefcase from "../components/Briefcase"; 
import Arrow from "../components/Arrow";
import CodeArrow from "../components/CodeArrow";

const Trainings = () => {
  return (
    <>
      <Head>
        <title>Trainings and Workshops</title>
      </Head>
      <section className="bg-black w-full h-full pt-8 px-8 overflow-auto pb-24">
        <h1 className="text-blue-400 text-center text-4xl pt-6">
          Trainings and Workshops
        </h1>
        <div className="flex bg-black relative gap-x-3 mt-5 flex-row w-full h-full">
          <img src="cq.jpg" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl text-white absolute -mt-1.5">Full Stack Training</span>
            <span className=" ml-auto text-white flex flex-row gap-x-1">
              {" "}
              <Briefcase />
              Organiser <Arrow /> CodeQuotient 
            </span>
          </div>
        </div>
        <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="flex gap-x-2 flex-wrap mt-5">
          <div className="flex text-white flex-row gap-x-2 w-full ">
            {" "}
            <CodeArrow />{" "}
            <span className="text-blue-200 font-bold text-xl">
              {" "}
              SuperCoder{"'"}s Specialization Training{" "}
            </span>
            <span className="text-blue-200 flex text-white flex-wrap text-xl"></span>
            <span className="ml-auto text-white flex gap-x-1">
              <Calendar /> April, 2022
            </span>
          </div>
        </div>
        <div className="mt-3 ml-8 w-[70%] text-white text-xl text-justify mb-16">
          <div>
       Successfully attending a full stack web development specialization 
       training was an impressive accomplishment that demonstrated my dedication 
       to learning new skills and advancing my career in web development.
          </div>
        </div>
           <div className="flex bg-black relative gap-x-3 mt-5 flex-row w-full h-full">
          <img src="cq.jpg" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl text-white absolute -mt-1.5">Full Stack Training</span>
            <span className=" ml-auto text-white flex flex-row gap-x-1">
              {" "}
              <Briefcase />
              Organiser <Arrow /> CodeQuotient
            </span>
          </div>
        </div>
        <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="flex gap-x-2 flex-wrap mt-5">
          <div className="flex text-white flex-row gap-x-2 w-full ">
            {" "}
            <CodeArrow />{" "}
            <span className="text-blue-200 font-bold text-xl">
              {" "}
              SuperCoder{"'"}s Training{" "}
            </span>
            <span className="text-blue-200 flex text-white flex-wrap text-xl"></span>
            <span className="ml-auto text-white flex gap-x-1">
              <Calendar /> February, 2022
            </span>
          </div>
        </div>
        <div className="mt-3 ml-8 w-[70%] text-white text-xl text-justify mb-16">
          <div>
    Successfully attending a full stack web development beginner{"'"}s 
       training was an impressive accomplishment that demonstrated my dedication 
       to learning new skills and advancing my career in web development.
          </div>
        </div>
          <div className="flex bg-black relative gap-x-3 mt-5 flex-row w-full h-full">
          <img src="apt.png" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl text-white absolute -mt-1.5">Campus Recruitment Training</span>
            <span className=" ml-auto text-white flex flex-row gap-x-1">
              {" "}
              <Briefcase />
              Organiser <Arrow /> Nachiket Joshi Trainings
            </span>
          </div>
        </div>
        <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="flex gap-x-2 flex-wrap mt-5">
          <div className="flex text-white flex-row gap-x-2 w-full ">
            {" "}
            <CodeArrow />{" "}
            <span className="text-blue-200 font-bold text-xl">
              {" "}
              Aptitude and Communication Training{" "}
            </span>
            <span className="text-blue-200 flex text-white flex-wrap text-xl"></span>
            <span className="ml-auto text-white flex gap-x-1">
              <Calendar /> April, 2022
            </span>
          </div>
        </div>
        <div className="mt-3 ml-8 w-[70%] text-white text-xl text-justify mb-16">
          <div>
     Successfully attending an aptitude training was an impressive accomplishment that reflected my commitment to enhance my problem-solving and critical thinking skills. 
          </div>
        </div>
         <div className="flex bg-black relative gap-x-3 mt-5 flex-row w-full h-full">
          <img src="apt.png" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl text-white absolute -mt-1.5">ESD Training</span>
            <span className=" ml-auto text-white flex flex-row gap-x-1">
              {" "}
              <Briefcase />
              Organiser <Arrow /> RPG Foundation
            </span>
          </div>
        </div>
        <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="flex gap-x-2 flex-wrap mt-5">
          <div className="flex text-white flex-row gap-x-2 w-full ">
            {" "}
            <CodeArrow />{" "}
            <span className="text-blue-200 font-bold text-xl">
              {" "}
              5 in 1 Training for Skill Development{" "}
            </span>
            <span className="text-blue-200 flex text-white flex-wrap text-xl"></span>
            <span className="ml-auto text-white flex gap-x-1">
              <Calendar /> September, 2021
            </span>
          </div>
        </div>
        <div className="mt-3 ml-8 w-[70%] text-white text-xl text-justify mb-16">
          <div>
        This was an amazing 5 in 1 training that included individual trainings on Aptitude, SQL, Java - Intermediate, Personality Development, DBMS. It gave a crisp knowledge of how projects works in an organisation and what and how the skills are implemented while working around them.
          </div>
        </div>
      </section>
    </>
  );
};
export default Trainings;
