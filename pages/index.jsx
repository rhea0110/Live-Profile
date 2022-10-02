/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section className="bg-black w-full min-h-screen overflow-auto py-5">
        <div className="flex flex-grow">
          <div className="h-72 w-64 px-8 pt-8">
            <img
              src="/rhea1322.png"
              alt="myImgae"
              className="rounded-md object-cover"
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row">
            <div className="pt-8 px-10 text-xl text-gray-100 md:text-2xl ">
              Greetings,
              <p className="mt-4">
                <div className="text-[#D891EF] mb-1 underline">
                  Technical Introduction
                </div>
                I aspire to be an ace{" "}
                <span className="text-[#D891EF]">Product Manager</span> in quick
                time. I am also aware of the journey for becoming one. As such,
                I am honing my skills as a{" "}
                <span className="text-[#D891EF]">
                  Software Development Engineer
                </span>{" "}
                currently. In my internship, I am meticulously working on{" "}
                <span className="text-[#D891EF]">Front End technologies </span>
                in the field of Web Development. Working as a Product Intern in
                this internship, I am getting the desired exposure of looking at
                the <span className="text-[#D891EF]">3Ds</span> of{" "}
                <span className="text-[#D891EF]">Product Management</span>. I
                also understand <span className="text-[#D891EF]">Jira</span>,{" "}
                <span className="text-[#D891EF]">Git</span> and
                <span className="text-[#D891EF]"> GitHub</span>. Going forward,
                I{"'"}d like to take up challenging tasks in my career and
                satisfy my craving for learning.
              </p>
              <p className="mt-4">
                <div className="text-[#D891EF] mb-1 underline">
                  The kind of person I am
                </div>
                I am a quick learner. I can easily work in teams, and can also
                be assertive at the same time. I have high moral values, and
                value integrity and honesty. I love public speaking and have a
                deep linking for trekking, travel and jungle tours. I am a
                foodie, and music fascinates me the most. I haven{"'"}t defined
                success for myself, but, I want to do so much for my parents
                when I become successful. I also wish to contribute to the
                society when I succeed.
              </p>
            </div>
          </div>
        </div>
        <hr className="mt-10 border-[#157DEC]" />
        <h1 className="text-[#D891EF] text-center text-4xl pt-6">
          Academic Details
        </h1>
        <div className="pt-8 px-8 overflow-auto ">
          <div>
            <table className="table w-full h-52">
              <thead className="border border-[#D891EF] text-white h-[50px]">
                <tr>
                  <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                    Course
                  </th>
                  <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                    Specialization
                  </th>
                  <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                    Institute/College
                  </th>
                  <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                    Board/University
                  </th>
                  <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                    Aggregate %
                  </th>
                  <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                    Batch
                  </th>
                </tr>
              </thead>
              <tbody className="border text-white">
                <tr className="border text-white">
                  <td className="border border-[#D891EF] text-white text-center">
                    Bachelor of Technology
                  </td>
                  <td className="border border-[#D891EF] text-white text-center">
                    Computer Science & Engineering
                  </td>
                  <td className="border border-[#D891EF] text-white text-center">
                    SSIPMT Raipur
                  </td>
                  <td className="border border-[#D891EF] text-white text-center">
                    CSVTU Bhilai
                  </td>
                  <td className="border border-[#D891EF] text-white text-center">
                    78.24
                  </td>
                  <td className="border border-[#D891EF] text-white text-center">
                    2019 - 2023
                  </td>
                </tr>
                <tr className="border border-[#D891EF] text-white">
                  <td className="border border-[#D891EF] text-white text-center">
                    Class XII
                  </td>
                  <td className="border border-[#D891EF] text-white text-center">
                    Science with Mathematics
                  </td>
                  <td className="border border-[#D891EF] text-white text-center">
                    CBSE
                  </td>
                  <td className="border border-[#D891EF] text-white text-center">
                    Delhi Public School, Durg
                  </td>
                  <td className="border border-[#D891EF] text-white text-center">
                    67.20
                  </td>
                  <td className="border border-[#D891EF] text-white text-center">
                    2018 - 2019
                  </td>
                </tr>
                <tr className="border border-[#D891EF] text-white">
                  <td className="border border-[#D891EF] text-white text-center">
                    Class X
                  </td>
                  <td className="border border-[#D891EF] text-white text-center">
                    All Subjects
                  </td>
                  <td className="border border-[#D891EF] text-white text-center">
                    CBSE
                  </td>
                  <td className="border border-[#D891EF] text-white text-center">
                    Delhi Public School, Durg
                  </td>
                  <td className="border border-[#D891EF] text-white text-center">
                    74.10
                  </td>
                  <td className="border border-[#D891EF] text-white text-center">
                    2016 - 2017
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr className="mt-12  border-[#157DEC]" />
        <div className="overflow-auto ">
          <h1 className="text-[#D891EF] text-center text-4xl pt-6">
            Skills and Tools
          </h1>
          {/*  <div>
          <div className="px-8 pt-8 w-full overflow-auto ">
            <table className="border overflow-auto border-[#D891EF] text-white text-center w-full">
              <thead>
                <tr>
                  <th className="border border-[#D891EF] text-[#D891EF] text-lg h-[56px]">
                    Technical Proficiency
                  </th>
                </tr>
              </thead>
              <tbody className="h-[500px] pb-5">
                <tr>
                  <td className="border border-[#D891EF] text-white text-center">
                    CSS 3.0
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#D891EF] text-white text-center">
                    JavaScript
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#D891EF] text-white text-center">
                    ReactJS Library
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#D891EF] text-white text-center">
                    Git and GitHub
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#D891EF] text-white text-center">
                    Data Structures and Algorithms
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#D891EF] text-white text-center">
                    TailwindCSS Framework
                  </td>
                </tr>{" "}
                <tr>
                  <td className="border border-[#D891EF] text-white text-center">
                    Java 8 and Above
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#D891EF] text-white text-center">
                    TypeScript
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#D891EF] text-white text-center">
                    HTML 5.0
                  </td>
                </tr>{" "}
              </tbody>
            </table>
          </div>
        </div> */}
          <div className=" flex justify-center items-center h-full flex-row w-full gap-12 pt-8 px-8">
            <div className="flex flex-col">
              <div className="border border-[#D891EF] text-white py-3 px-8 text-center ">
                DS and Algorithms
              </div>
              <div className="border border-[#D891EF] text-white py-3 px-8 text-center ">
                Git and GitHub
              </div>
              <div className="border border-[#D891EF] text-white py-3 px-8 text-center ">
                TypeScript
              </div>
              <div className="border border-[#D891EF] text-white py-3 px-8 text-center ">
                ReactJS
              </div>
              <div className="border border-[#D891EF] text-white py-3 px-8 text-center ">
                CSS 3
              </div>
            </div>
            <div className="flex flex-col">
              <div className="border border-[#D891EF] text-white py-3 px-8 text-center ">
                Java 8 and Above
              </div>
              <div className="border border-[#D891EF] text-white py-3 px-8 text-center ">
                Jira Software
              </div>
              <div className="border border-[#D891EF] text-white py-3 px-8 text-center ">
                TailwindCSS
              </div>

              <div className="border border-[#D891EF] text-white py-3 px-8 text-center ">
                JavaScript
              </div>
              <div className="border border-[#D891EF] text-white py-3 px-8 text-center ">
                HTML 5
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-12  border-[#157DEC]" />
        <div className="px-8">
          <h1 className="px-8 pt-8 text-[#D891EF] text-center text-4xl ">
            {" "}
            Social Portfolio
          </h1>
          <div className="w-full pt-8 object-center flex justify-center items-center animate-pulse">
            <a href="https://www.linkedin.com/in/rhea-jain-2462a3189/">
              {" "}
              <img
                src={"/li.png"}
                alt="rhea's Profile"
                height={50}
                width={50}
              />
            </a>
          </div>

          <div className="py-4 w-full text-center text-xl text-gray-100 md:text-2xl ">
            Please click on the icon above to get redirected to my
            <span className="text-[#D891EF] animate-pulse">
              <a href="https://www.linkedin.com/in/rhea-jain-2462a3189/">
                {" "}
                LinkedIn{" "}
              </a>
            </span>
            profile.
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
