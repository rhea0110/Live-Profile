import React from "react";
import Head from "next/head";

const Resume = () => {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <div>
        <section className="bg-black w-full overflow-auto py-5">
          <h1 className="text-[#D891EF] text-center text-4xl pt-6">Resume</h1>
          <div className="px-8 pt-32 flex justify-center items-center animate-bounce">
            <a href="https://drive.google.com/drive/folders/1oSM564-ijW00EJNbjqMi4wkdZW7TvoB6?usp=sharing">
              <img src={"/pdf.png"} height={100} width={150} />
            </a>
          </div>
          <h1 className="px-8 pt-12 text-white flex justify-center items-center text-3xl">
            <a href="https://drive.google.com/drive/folders/1oSM564-ijW00EJNbjqMi4wkdZW7TvoB6?usp=sharing">
              Please click to see my{" "}
              <text className="text-[#D891EF]">resume</text>!
            </a>
          </h1>
        </section>
      </div>
    </>
  );
};

export default Resume;
