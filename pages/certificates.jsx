import React from "react";
import  Head  from 'next/head';
import Calendar from "../components/Calendar";
import Briefcase from "../components/Briefcase"; 
import Arrow from "../components/Arrow";
import CodeArrow from "../components/CodeArrow";

const Certificates = () => {
  return (
    <>
      <Head>
        <title>Certificates</title>
      </Head>
      <section className="bg-black w-full h-full pt-8 px-8 overflow-auto pb-24">
        <h1 className="text-blue-400 text-center text-4xl pt-6">
          Certificates
        </h1>
        <div className="flex bg-black relative gap-x-3 mt-5 flex-row w-full h-full">
          <img src="javascript.png" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl absolute -mt-1.5">JavaScript Course</span>
            <span className=" ml-auto flex flex-row gap-x-1">
              {" "}
              <Briefcase />
              Issuer <Arrow /> Udemy
            </span>
          </div>
        </div>
        <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="flex gap-x-2 flex-wrap mt-5">
          <div className="flex flex-row gap-x-2 w-full ">
            {" "}
            <CodeArrow />{" "}
            <span className="text-blue-200 font-bold text-xl">
              {" "}
              The Complete JavaScript Course 2022: From Zero to Expert{" "}
            </span>
            <span className="text-blue-200 flex flex-wrap text-xl"></span>
            <span className="ml-auto flex gap-x-1">
              <Calendar /> June 28, 2022
            </span>
          </div>
        </div>
        <div className="mt-3 ml-8 w-[70%] text-xl text-justify mb-16">
          <div>
            My experience with this JavaScript course was invaluable in
            expanding my knowledge in web development. Through learning the
            fundamentals of programming, I was able to build interactive web
            applications, utilizing the front-end techniques. It provided me
            with a foundation of skills, enabling me to solve programming
            problems and develop a few responsive web projects. You can verify
            the course by clicking
            <a
              href="https://www.udemy.com/certificate/UC-a31b880d-55d2-42f3-9b2e-bd9fb6f682f5/"
              rel="noreferrer"
              target="_blank"
            >
              <span className="text-blue-600 animate-pulse"> here</span>
            </a>
            !
          </div>
        </div>
        <div className="flex bg-black relative gap-x-3 flex-row w-full h-full">
          <img src="javascript.png" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl absolute -mt-1.5">JavaScript Course</span>
            <span className=" ml-auto flex flex-row gap-x-1">
              {" "}
              <Briefcase />
              Issuer <Arrow /> LinkedIn Learning
            </span>
          </div>
        </div>
        <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="flex gap-x-2 flex-wrap mt-5">
          <div className="flex flex-row gap-x-2 w-full ">
            {" "}
            <CodeArrow />{" "}
            <span className="text-blue-200 font-bold text-xl">
              {" "}
              JavaScript Essential Training{" "}
            </span>
            <span className="text-blue-200 flex flex-wrap text-xl"></span>
            <span className="ml-auto flex gap-x-1">
              <Calendar /> May 30, 2022
            </span>
          </div>
        </div>
        <div className="mt-3 ml-8 w-[70%] text-xl text-justify mb-16">
          <div>
            My introductory JavaScript course has been a fantastic experience
            that taught me the basics of programming. It has also provided me
            with the necessary skills to understand programming concepts, such
            as variables, functions, loops, and more. Overall, the course has
            helped me establish a solid foundation in programming that I can
            build upon. You can verify the course by clicking
            <a
              href="https://www.linkedin.com/learning/certificates/bd10939418c2915a1416579ff455e3509e10901cdc3fc9b9454efa56e88f7c18?trk=share_certificate"
              rel="noreferrer"
              target="_blank"
            >
              <span className="text-blue-600 animate-pulse"> here</span>
            </a>
            !
          </div>
        </div>
        <div className="flex bg-black relative gap-x-3 flex-row w-full h-full">
          <img src="html5.png" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl absolute -mt-1.5">HTML Course</span>
            <span className=" ml-auto flex flex-row gap-x-1">
              {" "}
              <Briefcase />
              Issuer <Arrow /> LinkedIn Learning
            </span>
          </div>
        </div>
        <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="flex gap-x-2 flex-wrap mt-5">
          <div className="flex flex-row gap-x-2 w-full ">
            {" "}
            <CodeArrow />{" "}
            <span className="text-blue-200 font-bold text-xl">
              HTML Essential Training{" "}
            </span>
            <span className="text-blue-200 flex flex-wrap text-xl"></span>
            <span className="ml-auto flex gap-x-1">
              <Calendar />
              June 26, 2020
            </span>
          </div>
        </div>
        <div className="mt-3 ml-8 w-[70%] text-xl text-justify mb-16">
          <div>
            Taking an introductory HTML5 course was a great experience that
            taught me the basics of web development. I learned the fundamentals
            of creating web pages, including working with HTML tags, CSS styles,
            and page layout. Overall, the course has given me a solid foundation
            in web development that I can build upon in the future. You can
            verify the course by clicking
            <a
              href="https://www.linkedin.com/learning/certificates/778fb0b33ea5ff3d9dbd6d54fe6369849f0aac38ebe917b79d8827e8571fdf12?trk=share_certificate"
              rel="noreferrer"
              target="_blank"
            >
              <span className="text-blue-600 animate-pulse"> here</span>
            </a>
            !
          </div>
        </div>
        <div className="flex bg-black relative gap-x-3 flex-row w-full h-full">
          <img src="javascript.png" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl absolute -mt-1.5">
              JavaScript Assessment
            </span>
            <span className=" ml-auto flex flex-row gap-x-1">
              {" "}
              <Briefcase />
              Issuer <Arrow /> HackerRank
            </span>
          </div>
        </div>
        <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="flex gap-x-2 flex-wrap mt-5">
          <div className="flex flex-row gap-x-2 w-full ">
            {" "}
            <CodeArrow />{" "}
            <span className="text-blue-200 font-bold text-xl">
              JavaScript (Basics){" "}
            </span>
            <span className="text-blue-200 flex flex-wrap text-xl"></span>
            <span className="ml-auto flex gap-x-1">
              <Calendar />
              June 26, 2020
            </span>
          </div>
        </div>
        <div className="mt-3 ml-8 w-[70%] text-xl text-justify mb-16">
          <div>
            Taking a JavaScript basics assessment has been a great opportunity
            to assess my knowledge in programming. The assessment covered
            fundamental programming concepts such as variables, functions,
            loops, and conditional statements. It provided me with an insight
            into my strengths and weaknesses and highlighted areas that require
            more practice. Overall, the assessment has been an excellent way to
            measure my knowledge and identify areas for further improvement. You
            can verify the course by clicking
            <a
              href="https://www.hackerrank.com/certificates/3d22bb8f0be6"
              rel="noreferrer"
              target="_blank"
            >
              <span className="text-blue-600 animate-pulse"> here</span>
            </a>
            !
          </div>
        </div>
        <div className="flex bg-black relative gap-x-3 flex-row w-full h-full">
          <img src="java.png" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl absolute -mt-1.5">Java Assessment</span>
            <span className=" ml-auto flex flex-row gap-x-1">
              {" "}
              <Briefcase />
              Issuer <Arrow /> HackerRank
            </span>
          </div>
        </div>
        <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="flex gap-x-2 flex-wrap mt-5">
          <div className="flex flex-row gap-x-2 w-full ">
            {" "}
            <CodeArrow />{" "}
            <span className="text-blue-200 font-bold text-xl">
              Java (Basics){" "}
            </span>
            <span className="text-blue-200 flex flex-wrap text-xl"></span>
            <span className="ml-auto flex gap-x-1">
              <Calendar />
              December 5, 2021
            </span>
          </div>
        </div>
        <div className="mt-3 ml-8 w-[70%] text-xl text-justify mb-16">
          <div>
            Taking a Java basics assessment has been an insightful experience
            that allowed me to evaluate my knowledge in programming. The
            assessment covered fundamental concepts such as data types, arrays,
            loops, and conditional statements. It helped me identify my
            strengths and weaknesses and highlighted areas that require more
            practice. Overall, the assessment has been a valuable tool to
            measure my proficiency in Java programming and identify areas that
            require further improvement.You can verify the course by clicking
            <a
              href="https://www.hackerrank.com/certificates/76122d8af239"
              rel="noreferrer"
              target="_blank"
            >
              <span className="text-blue-600 animate-pulse"> here</span>
            </a>
            !
          </div>
        </div>
        <div className="flex bg-black relative gap-x-3 flex-row w-full h-full">
          <img src="css3.png" className="w-10 h-10  rounded-full" />
          <div className="my-auto w-full flex flex-wrap h-full">
            <span className="text-2xl absolute -mt-1.5">CSS Course</span>
            <span className=" ml-auto flex flex-row gap-x-1">
              {" "}
              <Briefcase />
              Issuer <Arrow /> LinkedIn Learning
            </span>
          </div>
        </div>
        <hr className="mt-[5px] bg-[D891EF]"></hr>
        <div className="flex gap-x-2 flex-wrap mt-5">
          <div className="flex flex-row gap-x-2 w-full ">
            {" "}
            <CodeArrow />{" "}
            <span className="text-blue-200 font-bold text-xl">
             CSS Essential Training{" "}
            </span>
            <span className="text-blue-200 flex flex-wrap text-xl"></span>
            <span className="ml-auto flex gap-x-1">
              <Calendar />
             June 29, 2020
            </span>
          </div>
        </div>
        <div className="mt-3 ml-8 w-[70%] text-xl text-justify mb-16">
          <div>
            My introductory CSS course has been a great learning experience that taught me the fundamentals of web styling. With the course, I learned how to use CSS to add visual styles, such as colors, fonts, and layouts, to web pages. It also covered responsive design techniques, enabling me to create websites that adapt to different screen sizes. Overall, the course has helped me establish a strong foundation in CSS, which is an essential skill for anyone interested in web design. You can verify the course by clicking
            <a
              href="https://www.linkedin.com/learning/certificates/78b83a8fe9ebe504b999e15f275e9a3fcfe34429c39e53e2d47a37d01ccaa5dd?trk=share_certificate"
              rel="noreferrer"
              target="_blank"
            >
              <span className="text-blue-600 animate-pulse"> here</span>
            </a>
            !
          </div>
        </div>
      </section>
    </>
  );
};
export default Certificates;
