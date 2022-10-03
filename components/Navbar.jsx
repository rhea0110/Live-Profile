import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Navbar = (props) => {
  const router = useRouter();
  return (
    <>
      <div className="w-full md:auto md:static  h-[15vh] lg:h-[8vh]"></div>
      <div className="fixed top-0 left-0 w-full z-[2] min-h-[60px] bg-black px-5 md:flex ">
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
          <button className="ml-3 mt-2 sm:flex text-[#D891EF] text-4xl font-bold">
            {props.name}
          </button>
        </Link>
        <div className="sm:flex ml-auto w-fit gap-x-5">
          <Link href="/">
            <button
              className={`text-[#D891EF] text-lg font-semibold hover:underline hover:text-white ${
                router.asPath == "/" && "text-white underline"
              }`}
            >
              {props.tabs1}
            </button>
          </Link>
          <Link href="internships">
            <button
              className={`text-[#D891EF] text-lg font-semibold hover:underline hover:text-white ${
                router.asPath == "/internships" && "text-white underline"
              }`}
            >
              {props.tabs2}
            </button>
          </Link>

          <Link href="certificates">
            <button
              className={`text-[#D891EF] text-lg font-semibold hover:underline  hover:text-white ${
                router.asPath == "/certificates" && "text-white underline"
              }`}
            >
              {props.tabs3}
            </button>
          </Link>
          <Link href="competitions">
            <button
              className={`text-[#D891EF] text-lg font-semibold hover:underline  hover:text-white ${
                router.asPath == "/competitions" && "text-white underline"
              }`}
            >
              {props.tabs4}
            </button>
          </Link>
          <Link href="practices">
            <button
              className={`text-[#D891EF] text-lg font-semibold hover:underline  hover:text-white ${
                router.asPath == "/practices" && "text-white underline"
              } `}
            >
              {props.tabs5}
            </button>
          </Link>
          <Link href="awards">
            <button
              className={`text-[#D891EF] text-lg font-semibold hover:underline  hover:text-white ${
                router.asPath == "/awards" && "text-white underline"
              }  `}
            >
              {props.tabs6}
            </button>
          </Link>
          <Link href="trainings">
            <button
              className={`text-[#D891EF] text-lg font-semibold hover:underline  hover:text-white ${
                router.asPath == "/trainings" && "text-white underline"
              } `}
            >
              {props.tabs7}
            </button>
          </Link>
          <Link href="resume">
            <button
              className={`text-[#D891EF] text-lg font-semibold hover:underline  hover:text-white ${
                router.asPath == "/resume" && "text-white underline"
              } `}
            >
              {props.tabs8}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;