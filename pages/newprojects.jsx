import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Link from "next/link"

const NewProject = () => {
  return (
    <>
      <Head>
        <title>New Project</title>
      </Head>
      <div className="w-full flex-col justify-center items-center min-h-screen flex p-20 h-full bg-black">
        <div className=" mt-12 text-3xl text-white font-mono  ">
          {"Please click on the link to visit my next project! "}
          <a
            className="text-red-500 text-3xl underline"
            href="https://rheanetclone.netlify.app/"
          >
            {"Netflix clone by Rhea"}
          </a>
        </div>

        
      </div>
    </>
  );
};

export default NewProject;
