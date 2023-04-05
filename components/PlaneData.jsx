import React from "react";
import Calendar from "./Calendar";
import Briefcase from "./Briefcase";

const PlaneData = () => {
    return (
      <>
        <div className="flex bg-black relative gap-x-3 flex-row w-full h-full">
          <img src="logo.png" className="w-10 h-10 rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl absolute -mt-1.5">Plane</span>
            <span className=" ml-auto flex flex-row gap-x-1">
              {" "}
              <Calendar />
              October, 2022 - Present{" "}
            </span>
          </div>
        </div>
        <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="flex gap-x-2 flex-wrap mt-5">
          <div className="flex flex-row gap-x-2 w-full ">
            <Briefcase />
            <span className="text-blue-200 text-xl">
              Product <span className="text-xl text-orange-300">Intern</span>
            </span>
            <span className="ml-auto flex gap-x-1">
              <Calendar /> October 15, 2022 - Present
            </span>
          </div>
        </div>
        <div className="mt-3 ml-8 w-[70%] text-xl text-justify mb-16">
          <div>
            Working for a startup requires a next level of skillset, which
            includes over-communication, a next-level mindset, and a next-level
            ability to explore what our market needs. Regarding the fact that
            before entering the market of Project Management Tools, we already
            had many competitors such as Linear, JIRA, Trello, and others.
            <br />
            We explored our competitors and understood the solutions they
            provided, as well as what we could add to Plane, which is an
            Open-source Project Management Tool that offers a fresh perspective
            for our users.
            <br />
            I served as the product manager, and thinking about new features was
            a daily routine for me.
            <br />
            At times, working with certain team members can be challenging due
            to differences in their working styles and their ways of
            understanding things. However, I believe that I did an excellent job
            acting as the alpha female within the team.
          </div>
        </div>
      </>
    );
}

export default PlaneData;

