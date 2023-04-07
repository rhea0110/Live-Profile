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
          <button className="ml-3 mt-2 sm:flex text-orange-400 text-4xl font-bold">
            {props.name}
          </button>
        </Link>
        <div className="sm:flex ml-auto w-fit gap-x-5">
          <Link href="/">
            <button
              className={`text-sky-400 mx-2 text-lg font-semibold hover:underline hover:text-orange-400 ${
                router.asPath == "/" && "text-orange-400 underline"
              }`}
            >
              {props.tabs1}
            </button>
          </Link>
          <Link href="internships">
            
              <button
                className={`text-sky-400 text-lg mx-2 font-semibold hover:underline hover:text-orange-400 ${
                  router.asPath == "/internships" && "text-orange-400 underline"
                }`}
              >
                {props.tabs2}
              </button>
            
          </Link>

          <Link href="certificates">
            
            <button
              className={`text-sky-400 text-lg mx-2 font-semibold hover:underline  hover:text-orange-400 ${
                router.asPath == "/certificates" && "text-orange-400 underline"
              }`}
            >
              {props.tabs3}
            </button>
            
          </Link>
          <Link href="competitions">
            

            <button
              className={`text-sky-400 text-lg mx-2 font-semibold hover:underline  hover:text-orange-400 ${
                router.asPath == "/competitions" && "text-orange-400 underline"
              }`}
            >
              {props.tabs4}
            </button>
            

          </Link>
          <Link href="practices">
            

            <button
              className={`text-sky-400 text-lg mx-2 font-semibold hover:underline  hover:text-orange-400 ${
                router.asPath == "/practices" && "text-orange-400 underline"
              } `}
            >
              {props.tabs5}
            </button>
            

          </Link>
          <Link href="awards">
            

            <button
              className={`text-sky-400 text-lg mx-2 font-semibold hover:underline  hover:text-orange-400 ${
                router.asPath == "/awards" && "text-orange-400 underline"
              }  `}
            >
              {props.tabs6}
            </button>
            

          </Link>
          <Link href="trainings">
            

            <button
              className={`text-sky-400 text-lg mx-2 font-semibold hover:underline  hover:text-orange-400 ${
                router.asPath == "/trainings" && "text-orange-400 underline"
              } `}
            >
              {props.tabs7}
            </button>
            

          </Link>
          {/*  <Link href="resume">
            <button
              className={`text-orange-400 text-lg mx-2 font-semibold hover:underline  hover:text-white ${
                router.asPath == "/resume" && "text-white underline"
              } `}
            >
              {props.tabs8}
          </button>
          </Link> */}
          <Link href="newprojects">
            

            <button
              className={`text-red-500 animate-pulse underline text-lg mx-2 font-semibold hover:underline  hover:text-white ${
                router.asPath == "/newprojects" && "text-white underline"
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
