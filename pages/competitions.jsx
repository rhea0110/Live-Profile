import React from "react";
import Head from "next/head";
import Calendar from "../components/Calendar";
import Mic from "../components/Mic";
import Ppt from "../components/Ppt";
import Briefcase from "../components/Briefcase";
import Arrow from "../components/Arrow";
import CodeArrow from "../components/CodeArrow";

const Competitions = () => {
  return (
    <>
      <Head>
        <title>Competitions</title>
      </Head>
      <section className="bg-black w-full h-full pt-8 px-8 overflow-auto pb-24">
        <h1 className="text-blue-400 text-center text-4xl pt-6">
          Competitions
        </h1>
        <div className="flex bg-black relative gap-x-3 mt-5 flex-row w-full h-full">
          <img src="pptc.png" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl absolute text-white -mt-1.5">
              Presentation and Personality Contest{" "}
            </span>
            <span className=" ml-auto flex text-white flex-row gap-x-1">
              {" "}
              <Briefcase />
              Issuer <Arrow /> Shankaracharya Institute
            </span>
          </div>
        </div>
        <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="flex gap-x-2 flex-wrap mt-5">
          <div className="flex text-white flex-row gap-x-2 w-full ">
            {" "}
            <Ppt />{" "}
            <span className="text-blue-200 font-bold text-xl">
              {" "}
              Lockdown and Economy{" "}
            </span>
            <span className="text-blue-200 flex flex-wrap text-xl"></span>
            <span className="ml-auto flex text-white gap-x-1">
              <Calendar /> During Lockdown
            </span>
          </div>
        </div>
        <div className="mt-3 ml-8 w-[70%] text-white text-xl text-justify mb-16">
          <div>
            Winning the personality and presentation contest on the topic of
            lockdown and economy was a moment of great pride and accomplishment
            for me. I delivered a compelling presentation that showcased my
            ability to articulate complex ideas in a clear and concise manner. I
            emphasized the need for balanced measures to protect public health
            and the economy during challenging times. My passion and confidence
            in my ideas resonated with the judges and the audience, and I was
            honored to receive the top prize.
          </div>
        </div>
        <div className="flex bg-black relative gap-x-3 flex-row w-full h-full">
          <img src="tm.png" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl absolute text-white -mt-1.5">
              Evaluation Contest
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
            <Mic />{" "}
            <span className="text-blue-200 font-bold text-xl">
              {" "}
              Speech Evaluation Contest - District Level{" "}
            </span>
            <span className="text-blue-200 flex flex-wrap text-xl"></span>
            <span className="ml-auto flex text-white gap-x-1">
              <Calendar /> December, 2020
            </span>
          </div>
        </div>
        <div className="mt-3 ml-8 w-[70%] text-white text-xl text-justify mb-16">
          <div>
            Securing 2nd position in the Toastmasters International{"'"}s
            district level speech evaluation contest is an achievement that
            fills me with pride and satisfaction. The contest required me to
            evaluate a speech on various parameters and provide constructive
            feedback. It was a great opportunity to showcase my communication
            and critical thinking skills. The competition was tough, but my
            preparation and dedication paid off. This accomplishment has
            motivated me to continue honing my skills and striving for
            excellence in public speaking.
          </div>
        </div>
        <div className="flex bg-black relative gap-x-3 flex-row w-full h-full">
          <img src="tm.png" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl absolute text-white -mt-1.5">
              Evaluation Contest
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
            <Mic />{" "}
            <span className="text-blue-200 font-bold text-xl">
              {" "}
              Speech Evaluation Contest - Area Level{" "}
            </span>
            <span className="text-blue-200 flex flex-wrap text-xl"></span>
            <span className="ml-auto flex text-white gap-x-1">
              <Calendar /> November, 2020
            </span>
          </div>
        </div>
        <div className="mt-3 ml-8 w-[70%] text-white text-xl text-justify mb-16">
          <div>
            Winning the Toastmasters International{"'"}s Area level speech
            evaluation contest was an incredible moment for me. The contest
            challenged me to analyze a speech critically and deliver feedback
            that was both constructive and insightful. I prepared rigorously for
            the contest, honing my communication and analytical skills. Winning
            the competition boosted my confidence and validated my hard work. It
            also encouraged me to continue improving and striving for excellence
            in public speaking.
          </div>
        </div>

        <div className="flex bg-black relative gap-x-3 flex-row w-full h-full">
          <img src="tm.png" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl absolute text-white -mt-1.5">
              Evaluation Contest
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
            <Mic />{" "}
            <span className="text-blue-200 font-bold text-xl">
              {" "}
              Speech Evaluation Contest - Club Level{" "}
            </span>
            <span className="text-blue-200 flex flex-wrap text-xl"></span>
            <span className="ml-auto flex text-white gap-x-1">
              <Calendar /> October, 2020
            </span>
          </div>
        </div>
        <div className="mt-3 ml-8 w-[70%] text-white text-xl text-justify mb-16">
          <div>
            Winning the Toastmasters International{"'"}s Club level speech
            evaluation contest was a significant achievement for me. The contest
            tested my ability to provide constructive feedback on a speech and
            improve my listening skills. Preparing for the contest involved
            practicing active listening and developing a critical eye to
            identify areas for improvement. Winning the competition gave me a
            sense of pride and encouraged me to continue refining my
            communication skills. It was a valuable learning experience that
            helped me grow as a public speaker.
          </div>
        </div>
        <div className="flex bg-black relative gap-x-3 flex-row w-full h-full">
          <img src="tm.png" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl absolute text-white -mt-1.5">Speech Contest</span>
            <span className=" ml-auto flex text-white flex-row gap-x-1">
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
            <Mic />{" "}
            <span className="text-blue-200 font-bold text-xl">
              {" "}
              Humourous Speech Contest - Club Level{" "}
            </span>
            <span className="text-blue-200 flex flex-wrap text-xl"></span>
            <span className="ml-auto text-white flex gap-x-1">
              <Calendar /> October, 2019
            </span>
          </div>
        </div>
        <div className="mt-3 ml-8 w-[70%] text-white text-xl text-justify mb-16">
          <div>
            Securing 2nd position in the Toastmasters International{"'"}s Club
            level humorous speech contest was an exciting moment for me. The
            contest required me to deliver a speech that was both humorous and
            engaging while adhering to specific guidelines. I spent hours
            crafting and rehearsing my speech to ensure it was both entertaining
            and polished. The competition was tough, but my dedication paid off.
            This accomplishment has motivated me to continue refining my public
            speaking skills and seeking opportunities to showcase my humor and
            creativity.
          </div>
        </div>
      </section>
    </>
  );
};
export default Competitions;
