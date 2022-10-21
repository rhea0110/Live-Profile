import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Navbar = (props) => {
  const router = useRouter();
  return (
    <>
      <div className="w-full md:auto md:static  h-[15vh] lg:h-[8vh]"></div>
      <div className="fixed top-0 left-0 w-full z-[2] min-h-[60px] bg-black px-5 md:flex">
        <Link href="/">
          <button className="ml-3 mt-2 sm:flex text-[#D891EF] text-4xl font-bold">
            {props.name}
          </button>
        </Link>
        <div className="sm:flex ml-auto w-fit gap-x-5">
          <Link href="/">
            <button
              className={`text-[#D891EF] mx-2 text-lg font-semibold hover:underline hover:text-white ${
                router.asPath == "/" && "text-white underline"
              }`}
            >
              {props.tabs1}
            </button>
          </Link>
          <Link href="internships">
            <a target="_blank" rel="noopener noreferrer" className="link-item my-auto">
              <button
                className={`text-[#D891EF] text-lg mx-2 font-semibold hover:underline hover:text-white ${
                  router.asPath == "/internships" && "text-white underline"
                }`}
              >
                {props.tabs2}
              </button>
            </a>
          </Link>

          <Link href="certificates">
            <a target="_blank" rel="noopener noreferrer" className="link-item my-auto">
            <button
              className={`text-[#D891EF] text-lg mx-2 font-semibold hover:underline  hover:text-white ${
                router.asPath == "/certificates" && "text-white underline"
              }`}
            >
              {props.tabs3}
            </button>
            </a>
          </Link>
          <Link href="competitions">
            <a target="_blank" rel="noopener noreferrer" className="link-item my-auto">

            <button
              className={`text-[#D891EF] text-lg mx-2 font-semibold hover:underline  hover:text-white ${
                router.asPath == "/competitions" && "text-white underline"
              }`}
            >
              {props.tabs4}
            </button>
            </a>

          </Link>
          <Link href="practices">
            <a target="_blank" rel="noopener noreferrer" className="link-item my-auto">

            <button
              className={`text-[#D891EF] text-lg mx-2 font-semibold hover:underline  hover:text-white ${
                router.asPath == "/practices" && "text-white underline"
              } `}
            >
              {props.tabs5}
            </button>
            </a>

          </Link>
          <Link href="awards">
            <a target="_blank" rel="noopener noreferrer" className="link-item my-auto">

            <button
              className={`text-[#D891EF] text-lg mx-2 font-semibold hover:underline  hover:text-white ${
                router.asPath == "/awards" && "text-white underline"
              }  `}
            >
              {props.tabs6}
            </button>
            </a>

          </Link>
          <Link href="trainings">
            <a target="_blank" rel="noopener noreferrer" className="link-item my-auto">

            <button
              className={`text-[#D891EF] text-lg mx-2 font-semibold hover:underline  hover:text-white ${
                router.asPath == "/trainings" && "text-white underline"
              } `}
            >
              {props.tabs7}
            </button>
            </a>

          </Link>
          {/*  <Link href="resume">
            <button
              className={`text-[#D891EF] text-lg mx-2 font-semibold hover:underline  hover:text-white ${
                router.asPath == "/resume" && "text-white underline"
              } `}
            >
              {props.tabs8}
          </button>
          </Link> */}
          <Link href="newprojects">
            <a target="_blank" rel="noopener noreferrer" className="link-item my-auto">

            <button
              className={`text-red-500 animate-pulse underline text-lg mx-2 font-semibold hover:underline  hover:text-white ${
                router.asPath == "/newprojects" && "text-white underline"
              } `}
            >
              {props.tabs8}
            </button>
            </a>

          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
