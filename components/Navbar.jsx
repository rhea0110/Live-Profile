import Link from "next/link";
import React from "react";

const Navbar = (props) => {
  return (
    <>
      <div className="w-screen h-[8vh]"></div>
      <div className="fixed top-0 left-0 w-full bg-white z-[2] h-[60px] bg-conic-to-r from-gray-900 via-gray-100 to-gray-900 px-5">
        {/*  <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 -1 24 24"
            strokeWidth="2"
            stroke="#6C2DC7"
            className="w-15 h-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg> */}

        <Link href="/">
          <button className="ml-3 mt-2 text-transparent  bg-clip-text bg-gradient-to-l from-blue-900 to-purple-800 text-4xl font-bold">
            {props.name}
          </button>
        </Link>
        <div className="flex flex-col lg:flex-row-reverse  min-w-full -mt-[32px] gap-x-5">
          <Link href="resume">
            <button className="text-transparent  bg-clip-text bg-gradient-to-l from-blue-900 to-purple-800 text-lg font-semibold hover:underline hover:text-[#F02285]">
              {props.tabs5}
            </button>
          </Link>
          <Link href="trainings">
            <button className="text-transparent  bg-clip-text bg-gradient-to-l from-blue-900 to-purple-800 text-lg font-semibold hover:underline hover:text-[#F02285]">
              {props.tabs7}
            </button>
          </Link>

          <Link href="awards">
            <button className="text-transparent  bg-clip-text bg-gradient-to-l from-blue-900 to-purple-800 text-lg font-semibold hover:underline hover:text-[#F02285]">
              {props.tabs6}
            </button>
          </Link>
          <Link href="practices">
            <button className="text-transparent  bg-clip-text bg-gradient-to-l from-blue-900 to-purple-800 text-lg font-semibold hover:underline hover:text-[#F02285]">
              {props.tabs4}
            </button>
          </Link>
          <Link href="competitions">
            <button className="text-transparent  bg-clip-text bg-gradient-to-l from-blue-900 to-purple-800 text-lg font-semibold hover:underline hover:text-[#F02285]">
              {props.tabs8}
            </button>
          </Link>
          <Link href="certificates">
            <button className="text-transparent  bg-clip-text bg-gradient-to-l from-blue-900 to-purple-800 text-lg font-semibold hover:underline hover:text-[#F02285]">
              {props.tabs3}
            </button>
          </Link>
          <Link href="internships">
            <button className="text-transparent  bg-clip-text bg-gradient-to-l from-blue-900 to-purple-800 text-lg font-semibold hover:underline hover:text-[#F02285]">
              {props.tabs2}
            </button>
          </Link>
          <Link href="/">
            <button className="text-transparent  bg-clip-text bg-gradient-to-l from-blue-900 to-purple-800 text-lg font-semibold hover:underline hover:text-[#F02285]">
              {props.tabs1}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
