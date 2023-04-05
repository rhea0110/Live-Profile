/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Skills from "../components/Skills";
import Edu from "../components/Edu";



const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section className="bg-black w-full min-h-screen overflow-auto py-5">
        <div className="flex flex-wrap">
          <div className="w-32 flex flex-col gap-y-auto my-auto lg:w-[15%] px-8">
            <img
              src="/rhea1322.png"
              alt="myImgae"
              className="rounded-md object-cover"
            />
            <a
              href="/rheajain.pdf"
              rel="noreferrer"
              target="_blank"
              download={true}
            >
              <button className="items-center mt-9 justify-center text-blue-600 border  w-full rounded-md flex gap-x-2 py-1.5 flex-wrap">
                <img src="/download.png" alt="myImgae" className="w-7" />
                <div className="text-xl">Resume</div>
              </button>
            </a>
          </div>
          <div className="w-full lg:w-[80%] flex flex-col text-justify lg:flex-row">
            <div className="pt-8 px-10 text-gray-100 text-xl">
              <div className="mt-4">
                <div className="text-blue-400 mb-1 text-[25px] ">
                  Technical Introduction
                </div>
                I aspire to be an ace{" "}
                <span className="text-orange-400">Product Manager</span> in quick
                time. I am also aware of the journey for becoming one. As such,
                I am honing my skills as a{" "}
                <span className="text-orange-400">
                  Software Development Engineer
                </span>{" "}
                currently. In my internship, I am meticulously working on{" "}
                <span className="text-orange-400">Front End technologies </span>
                in the field of Web Development. Working as a Product Intern in
                this internship, I am getting the desired exposure of looking at
                the <span className="text-orange-400">3Ds</span> of{" "}
                <span className="text-orange-400">Product Management</span>. I
                also understand <span className="text-orange-400">Plane</span>,{" "}
                <span className="text-orange-400">Git</span> and
                <span className="text-orange-400"> GitHub</span>. Going forward, I
                {"'"}d like to take up challenging tasks in my career and
                satisfy my craving for learning.
              </div>
              <div className="mt-10">
                <div className="text-blue-400 mb-1 text-[25px] ">
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

        <div>
          <h1 className="text-[#D891EF] text-center text-3xl pt-6">
            Skills and Tools
          </h1>
          {/*Skillset*/}
          <div className="flex text-xl pt-10 w-full px-8 flex-grow">
            <Skills />
          </div>
        </div>
        <hr className="mt-11 border-[#157DEC]" />
        <div className="px-8">
          <h1 className="px-8 pt-8 text-[#D891EF] text-center text-3xl ">
            {" "}
            Social Portfolio
          </h1>
          <div className="w-full  pt-8 object-center flex justify-center items-center animate-pulse">
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

          <div className="py-4 w-full text-xl text-center text-gray-100 ">
            Please click on the icon above to get redirected to my
            <span className="text-blue-600 text-xl animate-pulse">
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
