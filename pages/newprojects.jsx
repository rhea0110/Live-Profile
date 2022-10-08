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
      <div className="w-full flex-col justify-center items-center flex p-20 h-screen bg-black">
        <div>
          <h1 className="w-full h-full text-white font-mono text-5xl justify-center items-center flex">
            {"Thankyou for watching my project!".toUpperCase()}
          </h1>
        </div>
        <div className=" mt-12 text-white font-mono text-xl ">
          {"Click on the link to visit my another project! ".toUpperCase()}
          <a
            className="text-red-500 text-xl underline"
            href="https://rheanetclone.netlify.app/"
          >
            Netflix clone by Rhea 
          </a>
        </div>

        
      </div>
    </>
  );
};

export default NewProject;
