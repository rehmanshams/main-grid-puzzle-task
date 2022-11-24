import React from "react";
import Taskone from "./taskone";
import Tasktwo from "./tasktwo";
import Taskthree from "./taskthree";
import Taskfour from "./taskfour";
import { Link } from "react-router-dom";
export const mainpage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-[1920px] mx-auto my-auto pt-10 px-4 sm:p-20 align-middle items-center">
      {/* Main Page Title and Description */}
      <h1 className="text-4xl md:text-5xl text-center font-extrabold md:font-bold mb-6 text-gray-800">
        Alphasquad Tasks for Dev’s
      </h1>
      <p className="text-center text-sm sm:text-base leading-4 font-normal text-gray-600 mb-8 sm:md-0">
        Here are list of task that dev’s will perform for the practice of their
        frontend.
      </p>

      <div className="flex jsutify-center gap-7">
        <div className="w-[296px] h-[388px] rounded-xl border-2 border-gray-100">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/2%201.svg" />
          <div className="">
            <p className="font-bold text-gray-800 left-0 ml-[-17px] text-base text-center mt-2 ">
              Num detector via color in grid
            </p>
            <p className="text-gray-600 text-sm mt-1 left-0 text-center">
              Upon entering number the grid will sort
              <br /> it self by prime, even and odd numbers.
            </p>
          </div>
          <div className="flex justify-center">
            <Link to="/taskone">
              <button className="flex py-[10px] my-[10px] self-end justify-center text-center text-sm font-semibold text-blue-600 leading-[21px] border border-blue-600 rounded-[4px] hover:text-white hover:bg-blue-600 w-[250px]">
                View Task
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[296px] h-[388px] rounded-xl border-2 border-gray-100">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/2%201%20%281%29.svg" />
          <div className="">
            <p className="font-bold text-gray-800 left-0 ml-[-160px] text-base text-center mt-2 ">
              Puzzel Grid{" "}
            </p>
            <p className="text-gray-600 text-sm mt-1 left-0 text-center">
              Upon entering number the grid will sort
              <br /> it self by prime, even and odd numbers.
            </p>
          </div>
          <div className="flex justify-center">
            <Link to="/tasktwo">
              <button className="flex py-[10px] my-[10px] self-end justify-center text-center text-sm font-semibold text-blue-600 leading-[21px] border border-blue-600 rounded-[4px] hover:text-white hover:bg-blue-600 w-[250px]">
                View Task
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[296px] h-[388px] rounded-xl border-2 border-gray-100">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/2%201%20%282%29.svg" />
          <div className="">
            <p className="font-bold text-gray-800 left-0  ml-[-131px] text-base text-center mt-2 ">
              Number Group{" "}
            </p>
            <p className="text-gray-600 text-sm mt-1 left-0 text-center">
              Upon entering number the grid will sort
              <br /> it self by prime, even and odd numbers.
            </p>
          </div>
          <div className="flex justify-center">
            <Link to="taskthree">
              <button className="flex py-[10px] my-[10px] self-end justify-center text-center text-sm font-semibold text-blue-600 leading-[21px] border border-blue-600 rounded-[4px] hover:text-white hover:bg-blue-600 w-[250px]">
                View Task
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[296px] h-[388px] rounded-xl border-2 border-gray-100">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/2%201%20%283%29.svg" />
          <div className="">
            <p className="font-bold text-gray-800 left-0 ml-[-113px] text-base text-center mt-2 ">
              Number Remover{" "}
            </p>
            <p className="text-gray-600 text-sm mt-1 left-0 text-center">
              Upon entering number the grid will sort
              <br /> it self by prime, even and odd numbers.
            </p>
          </div>
          <div className="flex justify-center">
            <Link to="/taskfour">
              <button className="flex py-[10px] my-[10px] self-end justify-center text-center text-sm font-semibold text-blue-600 leading-[21px] border border-blue-600 rounded-[4px] hover:text-white hover:bg-blue-600 w-[250px]">
                View Task
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default mainpage;
