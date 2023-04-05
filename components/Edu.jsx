import React from "react";
import Cap from "./Cap";

const Educations = () => {
  return (
    <div className="h-full w-full flex flex-wrap border">
      <div className="flex flex-col max-w-fit border border-pink-600">
        <div className="gap-x-2 flex w-full lg:w-1/3 flex-wrap">
          <Cap />
          <span> Bachelor of Technology </span>
          <span className="ml-8">Computer Science & Eng.</span>
          <span className="ml-8">Aggregate 78.24%</span>
          <span className="ml-8">Class of {"'"}23 </span>
        </div>
      </div>

      <div className="flex flex-col w-fit border border-pink-600">
        <div className="gap-x-2 flex w-full lg:w-1/3 flex-wrap">
          <Cap />
          <span> Class XII </span>
          <span className="ml-8">Science with Maths</span>
          <span className="ml-8">Scored 67.20%</span>
          <span className="ml-8">Class of {"'"}19</span>
        </div>
      </div>

      <div className="flex flex-col border border-pink-600">
        <div className="gap-x-2 flex lg:w-1/3  border border-blue-400 w-full flex-wrap">
          <Cap />
          <span> Class X </span>
          <span className="ml-8">CBSE Subjects</span>
          <span className="ml-8">Scored 74.10%</span>
          <span className="ml-8">Class of {"'"}17</span>
        </div>
      </div>
    </div>
  );
};

export default Educations;
