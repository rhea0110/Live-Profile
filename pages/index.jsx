/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section className="bg-black w-full min-h-screen overflow-auto py-5">
        <div className="flex flex-wrap">
          <div className="w-60 lg:w-[20%] px-8 pt-8">
            <img
              src="/rhea1322.png"
              alt="myImgae"
              className="rounded-md object-cover"
            />
          </div>
          <div className="w-full lg:w-[80%] flex flex-col lg:flex-row">
            <div className="pt-8 px-10 text-xl text-gray-100 md:text-2xl ">
              Greetings,
              <div className="mt-4">
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
              </div>
              <div className="mt-4">
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
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-12 border-[#157DEC]" />
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
        <div >
          <h1 className="text-[#D891EF] text-center text-4xl pt-6">
            Skills and Tools
          </h1>
          {/*Skillset*/}
          <div className="flex  pt-10 w-full px-8 flex-grow">
            <Skills />
          </div>
        </div>
        <hr className="mt-11 border-[#157DEC]" />
        <div className="px-8">
          <h1 className="px-8 pt-8 text-[#D891EF] text-center text-4xl ">
            {" "}
            Social Portfolio
          </h1>
          <div className="w-full pt-8 object-center flex justify-center items-center animate-pulse">
            <a
              href="https://www.linkedin.com/in/rhea-jain-2462a3189/"
              rel="noreferrer"
              target="_blank"
            >
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
              <a
                href="https://www.linkedin.com/in/rhea-jain-2462a3189/"
                rel="noreferrer"
                target="_blank"
              >
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
