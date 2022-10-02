import React from "react";
import  Head  from 'next/head';

const Certificates = () => {
  return (
    <>
     <Head>
        <title>Certificates</title>
        </Head>
    <section className="bg-gradient-to-b from-gray-700 via-gray-900 to-black w-full h-full overflow-auto pb-24">
      <h1 className="text-[#D891EF] text-center text-4xl pt-6">Certificates</h1>
      <div className="pt-8 px-8 overflow-auto ">
        <div>
          <table className="table w-full h-full">
            <thead className="border border-[#D891EF] text-white h-[60px]">
              <tr>
                <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                  Name
                </th>
                <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                  Issuing Organisation
                </th>
                <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                  Verification Link
                </th>
                <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                  Image
                </th>
                <th className="border border-[#D891EF] text-[#D891EF] text-lg">
                  Date of Completion
                </th>
              </tr>
            </thead>
            <tbody className="border text-white">
              <tr className="border text-white">
                <td className="border border-[#D891EF] py-2  text-white text-center px-3">
                  The Complete JavaScript Course 2022: From Zero to Expert
                </td>
                <td className="border border-[#D891EF] py-2  text-white text-center px-3">
                  Udemy
                </td>
                <td className="border border-[#D891EF] text-white text-center py-2  mx-auto">
                  <a href="https://www.udemy.com/certificate/UC-a31b880d-55d2-42f3-9b2e-bd9fb6f682f5/">
                    <text className="text-[#D891EF] underline font-bold animate-pulse ">
                      Verify here!
                    </text>
                  </a>
                </td>
                <td className="border border-[#D891EF] text-white text-center py-8 flex items-center justify-center align-senter">
                  <a href="/uc.png">
                    <img
                      className="scale-100 hover:scale-125 ease-in duration-500"
                      src={"/uc.png"}
                      height={300}
                      width={350}
                    />
                  </a>
                </td>
                <td className="border border-[#D891EF] text-white text-center py-2 px-3">
                  June 28, 2022
                </td>
              </tr>
              <tr className="border text-white">
                <td className="border border-[#D891EF] py-2  text-white text-center px-3">
                  JavaScript Essential Training
                </td>
                <td className="border border-[#D891EF] py-2  text-white text-center px-3">
                  LinkedIn Learning
                </td>
                <td className="border border-[#D891EF] text-white text-center py-2  mx-auto">
                  <a href="https://www.linkedin.com/learning/certificates/bd10939418c2915a1416579ff455e3509e10901cdc3fc9b9454efa56e88f7c18?trk=share_certificate">
                    <text className="text-[#D891EF] underline font-bold animate-pulse ">
                      Verify here!
                    </text>
                  </a>
                </td>
                <td className="border border-[#D891EF] text-white text-center py-8 flex items-center justify-center align-senter">
                  <a href="/js.png">
                    <img
                      className="scale-100 hover:scale-125 ease-in duration-500"
                      src={"/js.png"}
                      height={300}
                      width={350}
                    />
                  </a>
                </td>
                <td className="border border-[#D891EF] text-white text-center py-2 px-3">
                  May 30, 2022
                </td>
              </tr>
              <tr className="border border-[#D891EF] text-white">
                <td className=" py-2 border border-[#D891EF] text-white text-center px-3">
                  HTML Essential Training
                </td>
                <td className="border border-[#D891EF] py-2  text-white text-center px-3">
                  LinkedIn Learning
                </td>
                <td className="border border-[#D891EF] text-white text-center py-2  px-3">
                  {" "}
                  <a href="https://www.linkedin.com/learning/certificates/778fb0b33ea5ff3d9dbd6d54fe6369849f0aac38ebe917b79d8827e8571fdf12?trk=share_certificate">
                    <text className="text-[#D891EF] underline font-bold animate-pulse ">
                      Verify here!
                    </text>
                  </a>
                </td>
                <td className="border border-[#D891EF] text-white text-left py-8 flex items-center justify-center">
                  <a href="/html.png">
                    <img
                      className="scale-100 hover:scale-125 ease-in duration-500 z-auto"
                      src={"/html.png"}
                      height={300}
                      width={350}
                    />
                  </a>
                </td>
                <td className="border border-[#D891EF] text-white text-center py-2 px-3">
                  June 26, 2020
                </td>
              </tr>

              <tr className="border border-[#D891EF] text-white">
                <td className=" py-2 border border-[#D891EF] text-white text-center px-3">
                  JavaScript - Basics
                </td>
                <td className="border border-[#D891EF] py-2  text-white text-center px-3">
                  HackerRank
                </td>
                <td className="border border-[#D891EF] text-white text-center py-2  px-3">
                  <a href="https://www.hackerrank.com/certificates/3d22bb8f0be6">
                    <text className="text-[#D891EF] underline font-bold animate-pulse ">
                      Verify here!
                    </text>
                  </a>
                </td>
                <td className="border border-[#D891EF] text-white text-left py-8 flex items-center justify-center">
                  <a href="/jsbase.png">
                    <img
                      className="scale-100 hover:scale-125 ease-in duration-500 z-auto"
                      src={"/jsbase.png"}
                      height={300}
                      width={350}
                    />
                  </a>
                </td>
                <td className="border border-[#D891EF] text-white text-center py-2 px-3">
                  June 15, 2022
                </td>
              </tr>
              <tr className="border border-[#D891EF] text-white">
                <td className=" py-2 border border-[#D891EF] text-white text-center px-3">
                  Java - Basics
                </td>
                <td className="border border-[#D891EF] py-2  text-white text-center px-3">
                  HackerRank
                </td>
                <td className="border border-[#D891EF] text-white text-center py-2  px-3">
                  <a href=" https://www.hackerrank.com/certificates/76122d8af239">
                    <text className="text-[#D891EF] underline font-bold animate-pulse ">
                      Verify here!
                    </text>
                  </a>
                </td>
                <td className="border border-[#D891EF] text-white text-left py-8 flex items-center justify-center">
                  <a href="/javabase.png">
                    <img
                      className="scale-100 hover:scale-125 ease-in duration-500 z-auto"
                      src={"/javabase.png"}
                      height={300}
                      width={350}
                    />
                  </a>
                </td>
                <td className="border border-[#D891EF] text-white text-center py-2 px-3">
                  December 5, 2021
                </td>
              </tr>
              <tr className="border border-[#D891EF] text-white">
                <td className=" py-2 border border-[#D891EF] text-white text-center px-3">
                  CSS Essential Training
                </td>
                <td className="border border-[#D891EF] py-2  text-white text-center px-3">
                  LinkedIn Learning
                </td>
                <td className="border border-[#D891EF] text-white text-center py-2 px-3">
                  {" "}
                  <a href="https://www.linkedin.com/learning/certificates/78b83a8fe9ebe504b999e15f275e9a3fcfe34429c39e53e2d47a37d01ccaa5dd?trk=share_certificate">
                    <text className="text-[#D891EF] underline font-bold animate-pulse  ">
                      Verify here!
                    </text>
                  </a>
                </td>
                <td className="border border-[#D891EF] text-white text-left py-8 flex items-center justify-center">
                  <a href="/css.png">
                    <img
                      className="scale-100 hover:scale-125 ease-in duration-500 z-auto"
                      src={"/css.png"}
                      height={300}
                      width={350}
                    />
                  </a>
                </td>
                <td className="border border-[#D891EF] text-white text-center py-2 px-3">
                  June 29, 2020
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    </>
  );
};
export default Certificates;
