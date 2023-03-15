import Link from "next/link";
import React from "react";
import Tooltip from "./Tooltip";

const Profiles = () => {
  const stack = [
    {
      title: "GitHub",
          profile: "https://github.com/rhea0110",
          src: "gitgit",
      btn:'See Profile',
    },
    {
      title: "HackerRank",
        profile: "https://www.hackerrank.com/j_rhea0110",
      src: "rank",
      btn:'See Profile',

    },
    {
      title: "CodeChef",
        profile: "https://www.codechef.com/users/rheajain0110",
      src: "codechef",
      btn:'See Profile',

    },
    {
      title: "LeetCode",
        profile: "https://leetcode.com/rhea0110/",
      src: "leet",
      btn:'See Profile',

    },
    {
      title: "HackerEarth",
        profile: "https://www.hackerearth.com/@j.rhea0110",
      src: "earth",
      btn:'See Profile',

    },
  ];
    
  return (
    <div className="w-full h-[100%] grid grid-cols-3 text-white flex-col gap-48 lg:flex-row justify-around">
      {stack.map((show, index) => (
        <div key={index} className="flex flex-col items-center justify-center ">
          <img
            src={`${show.src}.png`}
            className="w-[55px] h-[55px]  flex justify-center items-center"
          />
          <Tooltip>
            <button className="px-2 py-1.5 text-white rounded mt-5 bg-[#157DEC]">
              <Link href={`${show.profile}`}>{show.btn}</Link>
            </button>
            {show.title}
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default Profiles;
