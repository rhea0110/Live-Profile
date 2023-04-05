import React from "react";
import Briefcase from "./Briefcase";
import Calendar from "./Calendar";

const InternshipData = () => {
    return (
      <div className="w-full bg-black h-full">
        <div className="flex relative gap-x-3 flex-row w-full h-full">
            <img src="caravelpng.png" className="w-10 h-10 rounded-full" />
            <div className="my-auto w-full flex flex-wrap h-full">
              <span className="text-2xl absolute -mt-1.5">Caravel Tech</span>
              <span className=" ml-auto flex flex-row gap-x-1">
                {" "}
                <Calendar /> June 2022 - October, 2022{" "}
              </span>
            </div>
          </div>
          <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="flex gap-x-2 flex-wrap mt-5">
          <div className="flex flex-row gap-x-2 w-full ">
            <Briefcase />
            <span className="text-blue-200 text-xl">
              SDE <span className="text-xl text-orange-300">Intern</span>
            </span>
            <span className="ml-auto flex gap-x-1">
              <Calendar /> July 8, 2022 - August 31, 2022
            </span>
          </div>
        </div>

        <div className="mt-3 ml-8 w-[70%] text-xl text-justify">
          <div>
            Let me tell you about the wild ride I had working on an EdTech
            Platform! As a designer, I had the honor of creating a variety of
            Global Components like Dropdowns, Modals, Cards, and more. My
            mission? To optimize them to perfection, delivering only the best
            quality code to the platform.
            <br />
            <span>
              But hold on to your hats, folks, because working on this project
              was no easy feat! The clients were on high alert, constantly on
              the lookout for any pesky bugs. This made for a thrilling
              experience as I had to stay on my toes and react at lightning
              speed to their feedback. It was like a game of whack-a-mole, but
              with lines of code!{" "}
            </span>
            <br />
            Not only did I get to flex my design skills, but I also got to dive
            headfirst into React JS Hooks, which was an absolute blast. And let
            {"'s"} not forget about Tailwind CSS! I had a blast playing around
            with all of its cool features and discovering new tricks to make my
            designs even more amazing.
            <br />
            Overall, my time working on this EdTech Platform was a wild
            adventure filled with learning, growth, and exciting challenges. I
            wouldn{"'t"} trade it for the world!
          </div>
        </div>

        <div className="flex gap-x-2 flex-wrap mt-16">
          <div className="flex flex-row gap-x-2 w-full ">
            <Briefcase />
            <span className="text-blue-200 text-xl">
              Product <span className="text-xl text-orange-300">Intern</span>
            </span>
            <span className="ml-auto flex gap-x-1">
              <Calendar /> September 1, 2022 - October 15, 2022
            </span>
          </div>
        </div>

        <div className="mt-3 ml-8 w-[70%] text-xl text-justify">
          During my tenure, I was entrusted with managing four projects, two of
          which were EdTech web projects, one was an EdTech mobile app project,
          and the fourth was a universal Web Portal that offered multiple
          solutions to its users. As the Product person, it was my
                responsibility to comprehend the clients{"'"} requirements to deliver the
          most appropriate solution and serve as the mediator between the three
                D{"'"}s: Design, Development, and Delivery.
                <br />
                Additionally, I diligently
          checked for any significant roadblocks or bugs to ensure that the team
          could overcome them by providing the best possible solutions. My
          experience working on these projects was incredible, and it provided
          me with the opportunity to interact with clients and understand their
          perspectives regarding the products.
            </div>
            
      </div>
    );
}

export default InternshipData;