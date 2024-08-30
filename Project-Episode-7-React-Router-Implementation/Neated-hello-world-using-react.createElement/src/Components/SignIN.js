import React from "react";
import logo from "../utils/logo.png";
import Typewriter from "typewriter-effect";

const SignIN = () => {
  return (
    <div className="flex  row">
      <div className="bg-white h-screen w-1/2 -mt-2    ">
        <div className="flex flex-col ">
          <img src={logo} className="h-[270] w-[450] m-auto p-2"></img>

          <div className="font-inter font-thin text-6xl inline-block mt-4 ml-36">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Gupta Eats")
                  .pauseFor(1000)

                  .start();
              }}
            />
          </div>
          <div className="font-inter font-thin text-6xl inline-block mt-4 ml-[160px]">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Cravings Satisfied!")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Hunger Conquered!")
                  .start();
              }}
            />
          </div>
        </div>
      </div>
      <div className="bg-pink-50 h-screen  w-1/2 -mt-2"></div>
    </div>
  );
};

export default SignIN;
