import React from "react";

const Skills = () => {
    const stack = [
      {
        title: "HTML 5",
        src: "html5",
      },
      {
        title: "CSS 3",
        src: "css3",
      },
      {
        title: "JavaScript",
        src: "javascript",
      },
      {
        title: "Jira",
        src: "jira",
      },
      {
        title: "Java",
        src: "java",
      },
      {
        title: "Tailwind CSS",
        src: "tail",
      },
      {
        title: "TypeScript",
        src: "typescript",
      },
      {
        title: "React JS",
        src: "react",
      },
      {
        title: "Git & GitHub",
        src: "git",
      },
    ];
    return (
      <div className="w-full h-full flex text-white flex-grow gap-x-12 items-center justify-center">
        {stack.map((show, index) => (
          <div
            key={index}
            className="flex  flex-col items-center justify-center "
          >
            <img
              src={`${show.src}.png`}
              className="w-[55px] h-[55px] flex justify-center items-center"
                />
                <div className=" text-white text-center">
                {show.title}
                    </div>
          </div>
        ))}
      </div>
    );
}

export default Skills;