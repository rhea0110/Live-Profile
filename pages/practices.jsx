import React from "react";
import Head from "next/head";
import Calendar from "../components/Calendar";
import Ppt from "../components/Ppt";
import Mic from "../components/Mic";
import Briefcase from "../components/Briefcase";
import Arrow from "../components/Arrow";
import CodeArrow from "../components/CodeArrow";

const Practices = () => {
  return (
    <>
      <Head>
        <title>Practices</title>
      </Head>
      <section className="bg-black w-full h-full pt-8 px-8 overflow-auto  pb-24">
        <h1 className="text-blue-400 text-center text-4xl pt-6">
          Practices
        </h1>
        <div className="flex bg-black relative gap-x-3 mt-5 flex-row w-full h-full">
          <img src="gitgit.png" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl text-blue-200 absolute text-white -mt-1.5">
              GitHub{" "}
            </span>
            <span className=" ml-auto flex text-white flex-row gap-x-1">
              {" "}
              <Briefcase />
              Profile <Arrow /> <a
                className="text-blue-600 underline"
                href="https://github.com/rhea0110"
              >
                @rhea0110
              </a>
            </span>
          </div>
        </div>
        <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="mt-3 ml-8 w-[70%] text-white text-xl text-justify mb-16">
          <div>
            Using my <span className="text-orange-400"> GitHub </span> account has been a game-changer in my professional
            life. GitHub has allowed me to showcase my coding skills and
            projects to potential employers, clients, and collaborators. Through
            GitHub, I have been able to collaborate with other developers on
            projects, contribute to open-source repositories, and gain exposure
            to new technologies. The platform has also provided me with a space
            to document my progress and development as a programmer, helping me
            to identify areas for improvement and showcase my growth.
          </div>
        </div>
        <div className="flex bg-black relative gap-x-3 mt-5 flex-row w-full h-full">
          <img src="rank.png" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl text-blue-200 absolute text-white -mt-1.5">
              HackerRank{" "}
            </span>
            <span className=" ml-auto flex text-white flex-row gap-x-1">
              {" "}
              <Briefcase />
              Profile <Arrow /> <a
                className="text-blue-600 underline"
                href="https://www.hackerrank.com/j_rhea0110"
              >
                @j_rhea0110
              </a>
            </span>
          </div>
        </div>
        <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="mt-3 ml-8 w-[70%] text-white text-xl text-justify mb-16">
          <div>
         Using <span className="text-orange-400"> HackerRank </span> has been an essential part of my professional growth as a software developer. The platform has enabled me to practice competitive coding and improve my problem-solving skills. By participating in coding challenges and contests, I have been able to enhance my coding speed and accuracy while staying up-to-date with the latest technologies and industry trends. The platform has also provided me with a way to measure my progress and benchmark my skills against other developers, which has helped me identify areas for improvement and work towards achieving my goals.
           
          </div>
        </div>
         <div className="flex bg-black relative gap-x-3 mt-5 flex-row w-full h-full">
          <img src="codechef.png" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl text-blue-200 absolute text-white -mt-1.5">
              CodeChef{" "}
            </span>
            <span className=" ml-auto flex text-white flex-row gap-x-1">
              {" "}
              <Briefcase />
              Profile <Arrow /> <a
                className="text-blue-600 underline"
                href="https://www.codechef.com/users/rheajain0110"
              >
                @rheajain0110
              </a>
            </span>
          </div>
        </div>
        <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="mt-3 ml-8 w-[70%] text-white text-xl text-justify mb-16">
          <div>
         <span className="text-orange-400"> CodeChef </span> has been a valuable resource in my professional growth as a software developer. The platform has provided me with opportunities to practice competitive coding and refine my problem-solving skills. By participating in coding challenges and contests, I have been able to enhance my coding speed and accuracy while staying up-to-date with the latest industry trends. The platform has also enabled me to connect with other developers and learn from their experiences, allowing me to expand my knowledge and develop new approaches to solving complex problems.
          </div>
        </div>
         <div className="flex bg-black relative gap-x-3 mt-5 flex-row w-full h-full">
          <img src="leet.png" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl text-blue-200 absolute text-white -mt-1.5">
              Leetcode{" "}
            </span>
            <span className=" ml-auto flex text-white flex-row gap-x-1">
              {" "}
              <Briefcase />
              Profile <Arrow /> <a
                className="text-blue-600 underline"
                href="https://leetcode.com/rhea0110/"
              >
                @rhea0110
              </a>
            </span>
          </div>
        </div>
        <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="mt-3 ml-8 w-[70%] text-white text-xl text-justify mb-16">
          <div>
         Using <span className="text-orange-400"> LeetCode </span> has been instrumental in my professional growth as a software developer. The platform has enabled me to practice competitive coding and hone my problem-solving skills. By participating in coding challenges and contests, I have been able to enhance my coding speed and accuracy while staying up-to-date with the latest industry trends. The platform has also provided me with a way to measure my progress and benchmark my skills against other developers, helping me to identify areas for improvement and work towards achieving my career goals.
          </div>
        </div>
         <div className="flex bg-black relative gap-x-3 mt-5 flex-row w-full h-full">
          <img src="earth.png" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl text-blue-200 absolute text-white -mt-1.5">
              HackerEarth{" "}
            </span>
            <span className=" ml-auto flex text-white flex-row gap-x-1">
              {" "}
              <Briefcase />
              Profile <Arrow /> <a
                className="text-blue-600 underline"
                href="https://www.hackerearth.com/@j.rhea0110"
              >
                @j.rhea0110
              </a>
            </span>
          </div>
        </div>
        <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="mt-3 ml-8 w-[70%] text-white text-xl text-justify mb-16">
          <div>
        Using <span className="text-orange-400"> HackerEarth </span> has been a crucial aspect of my professional growth as a software developer. The platform has enabled me to practice competitive coding and improve my problem-solving skills. By participating in coding challenges and contests, I have been able to enhance my coding speed and accuracy while staying up-to-date with the latest industry trends. The platform has also provided me with an opportunity to connect with other developers and learn from their experiences, helping me to broaden my knowledge and develop new strategies for solving complex problems.
          </div>
        </div>
      </section>
    </>
  );
};
export default Practices;
