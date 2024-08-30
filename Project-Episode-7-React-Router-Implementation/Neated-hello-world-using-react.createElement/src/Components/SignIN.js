import React from "react";
import logo from "../utils/logo.png";

const SignIN = () => {
  return (
    <div className="flex  row">
      <div className="bg-white h-screen w-1/2 -mt-2    ">
        <div className="flex flex-col ">
          <img src={logo} className="h-[270] w-[450] m-auto "></img>
          <span
            className="font-inter font-thin text-6xl w-auto mt-7 ml-32 "
            style={{ width: "max-content" }}
          >
            Gupta Eats,
          </span>
          <br />
          <span
            className="font-inter font-thin text-6xl inline-block mt-2 ml-36"
            style={{ width: "max-content" }}
          >
            Cravings Satisfied.
          </span>
        </div>
      </div>
      <div className="bg-pink-50 h-screen  w-1/2 -mt-2"></div>
    </div>
  );
};

export default SignIN;
