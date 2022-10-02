import Link from "next/link";
import React from "react";

const Navbar = (props) => {
  return (
    <>
      <div className="w-full md:auto md:static  h-[8vh]"></div>
      <div className="fixed top-0 left-0 w-full bg-white z-[2] h-[60px] bg-gradient-to-b from-blue-700 via-blue-800 to-gray-900 px-5 md:flex ">
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
          <button className="ml-3 mt-2 sm:flex text-white  text-4xl font-bold">
            {props.name}
          </button>
        </Link>
        <div className="sm:flex ml-auto w-fit gap-x-5">
          <Link href="/">
            <button className=" text-white text-lg font-semibold hover:underline focus:underline hover:text-white focus:text-white ">
              {props.tabs1}
            </button>
          </Link>
          <Link href="internships">
            <button className="  text-white text-lg font-semibold hover:underline focus:underline hover:text-white focus:text-white ">
              {props.tabs2}
            </button>
          </Link>

          <Link href="certificates">
            <button className="  text-white text-lg font-semibold hover:underline focus:underline hover:text-white focus:text-white">
              {props.tabs3}
            </button>
          </Link>
          <Link href="competitions">
            <button className="  text-white text-lg font-semibold hover:underline focus:underline hover:text-white focus:text-white">
              {props.tabs4}
            </button>
          </Link>
          <Link href="practices">
            <button className="  text-white text-lg font-semibold hover:underline focus:underline hover:text-white focus:text-white">
              {props.tabs5}
            </button>
          </Link>
          <Link href="awards">
            <button className="  text-white text-lg font-semibold hover:underline focus:underline hover:text-white focus:text-white">
              {props.tabs6}
            </button>
          </Link>
          <Link href="trainings">
            <button className="  text-white text-lg font-semibold hover:underline focus:underline hover:text-white focus:text-whitefocus-within:underline ">
              {props.tabs7}
            </button>
          </Link>
          <Link href="resume">
            <button className="  text-white text-lg font-semibold hover:underline focus:underline hover:text-white focus:text-white">
              {props.tabs8}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
