import React from "react";
import  Head  from 'next/head';

const Certificates = () => {
  return (
    <>
      <Head>
        <title>Certificates</title>
      </Head>
      <section className="bg-black w-full h-full overflow-auto pb-24">
        <h1 className="text-blue-400 text-center text-4xl pt-6">
          Certificates
        </h1>
        <div className="pt-8 px-8 overflow-auto ">
          <div class="flex w-full flex-wrap  bg-black justify-between py-6">
            <div class="w-full lg:w-[50%] mr-auto pr-11 justify-center items-center ">
              <div className="text-left w-full flex flex-col lg:flex-row items-center font-bold text-white">
                <a href="/uc.png" rel="noreferrer" target="_blank">
                  <img
                    className="scale-100 hover:scale-110 ease-in duration-500"
                    src={"/uc.png"}
                  width={550}
                  height={550}      
                  />
                </a>
                <div>
                  
                  </div>
              </div>
              <div className="text-left text-2xl  pt-8 w-full items-center font-semibold text-white"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Certificates;
