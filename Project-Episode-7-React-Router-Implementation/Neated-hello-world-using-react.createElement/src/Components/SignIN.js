import React, { useState } from "react";
import logo from "../utils/logo.png";
import Typewriter from "typewriter-effect";
import Social from "./Social";
import leaf from "../utils/leaf.png";
import google from "../utils/google.png";
import GoogleButton from "./GoogleBUtton";

const SignIN = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="flex  row">
      <div className="bg-white h-screen w-1/2 -mt-2s flex flex-col">
        <div className="flex flex-col">
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
          <div className="font-inter font-thin text-6xl inline-block mt-4 ml-36">
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
          <Social />
        </div>
      </div>
      <div className="bg-pink-50 h-screen  w-1/2 -mt-2 ">
        <div className="bg-white h-2/3 w-2/3 mx-auto mt-[75px] flex flex-col">
          <div className="bg-pink-50 w-full h-[24%] flex flex-row items-center justify-center">
            <img src={leaf} className="h-11 w-11 "></img>
            <p className="ml-1 font-normal text-lg text-black">
              Sign in to your account
            </p>
          </div>
          {toggle ? (
            <div className="bg-pink-50 w-full h-[50%] flex flex-col justify-center items-center">
              <span className="font-thin text-sm -ml-[235px]">
                Email address
              </span>
              <input
                type="text"
                placeholder="example@gmail.com"
                className="border border-solid border-gray-200 shadow-lg rounded-lg mt-2 w-2/3 p-2 placeholder:text-sm"
              ></input>
              <span className="font-thin text-sm -ml-[130px] mt-4">
                Password -{" "}
                <span
                  className="font-black font-normal text-xs cursor-pointer"
                  onClick={handleToggle}
                >
                  New user? SignUP
                </span>
              </span>
              <input
                type="text"
                placeholder="password"
                className="border border-solid border-gray-200 shadow-lg rounded-lg mt-2 w-2/3 p-2 placeholder:text-sm"
              ></input>
              <button className="border border-gray-300 rounded-2xl shadow-lg text-black bg-white m-2 p-2 px-4 mt-5 hover:bg-gray-200  transition:0.3s">
                Sign In
              </button>
            </div>
          ) : (
            <div className="bg-pink-50 w-full h-[50%] flex flex-col justify-center items-center">
              <span className="font-thin text-sm -ml-[280px] -mt-10">Name</span>
              <input
                type="text"
                placeholder="Name"
                className="border border-solid border-gray-200 shadow-lg rounded-lg mt-2 w-2/3 p-2 placeholder:text-sm"
              ></input>
              <span className="font-thin text-sm -ml-[235px] mt-2">
                Email address
              </span>
              <input
                type="text"
                placeholder="example@gmail.com"
                className="border border-solid border-gray-200 shadow-lg rounded-lg mt-2 w-2/3 p-2 placeholder:text-sm"
              ></input>
              <span className="font-thin text-sm -ml-[120px] mt-2">
                Password -
                <span
                  className="font-black font-normal text-xs cursor-pointer"
                  onClick={handleToggle}
                >
                  Existing user? Signin
                </span>
              </span>
              <input
                type="text"
                placeholder="Password"
                className="border border-solid border-gray-200 shadow-lg rounded-lg mt-2 w-2/3 p-2 placeholder:text-sm"
              ></input>
              <button className="border border-gray-300 rounded-2xl shadow-lg text-black bg-white m-2 p-2 px-4 mt-5 hover:bg-gray-200  transition:0.3s">
                Sign Up
              </button>
            </div>
          )}
          <div className="bg-pink-50 w-full h-[26%]">
            <div class="flex items-center my-4">
              <div class="flex-grow border-t border-gray-300"></div>
              <span class="mx-4 text-gray-500 font-medium">
                Or signin with google
              </span>
              <div class="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="flex justify-center ">
              {/* <button className="border border-gray-300 rounded-2xl shadow-lg text-black bg-white m-2 p-2 px-6 mt-2 hover:bg-gray-200  transition:0.3s text-center flex flex-row">
                <img src={google} className="h-5 w-5 mt-1"></img>
                <span className="ml-1 mt-[2px]">Google</span>
              </button> */}
              <GoogleButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIN;
