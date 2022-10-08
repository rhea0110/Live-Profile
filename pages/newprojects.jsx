import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

const NewProject = () => {
  return (
    <>
      <Head>
        <title>New Project</title>
      </Head>
      <section className="bg-black  w-full h-full overflow-auto py-5">
              <h1 className="text-[#D891EF] text-center text-4xl pt-6">
                  Project
              </h1>
              <div className="py-10  justify-center flex font-mono text-md w-full h-full items-center">
                  {"Check out my another project. Click on my link to see what I made".toUpperCase()}&nbsp;<a className="text-red-600 underline" href="https://rheanetclone.netlify.app/">{"Netflix by Rhea".toUpperCase()}</a>
                  </div>
      </section>
    </>
  );
};

export default NewProject;
