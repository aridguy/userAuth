"use client";
import React from "react";
import { CiHome } from "react-icons/ci";
import { FaRegChartBar } from "react-icons/fa6";
import { PiStudentLight } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { HiOutlineSupport } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

const page = () => {
  return (
    <div>
      <div className="md:flex bg-[#27779B] gap-2 w-full h-screen ">
        <div className="w-2/12">
          <div className="p-3 ">
            <input
              className="rounded-md text-white p-2 bg-gray-600 w-full border-none outline-none text-[11px] h-[33px]"
              type="search"
              placeholder="search here"
            />
          </div>
          <div className="p-3 all-pages">
            <div className="home bg-[#27779B] hover:bg-gray-700 flex items-center pl-3 w-full h-[33px] rounded-md mb-3">
              <CiHome className="text-white" />{" "}
              <small className="text-white pl-3">Home</small>
            </div>
            <div className="home bg-[#27779B] hover:bg-gray-700 flex items-center pl-3 w-full h-[33px] rounded-md mb-3">
              <FaRegChartBar className="text-white" />
              <small className="text-white pl-3">Courses</small>
            </div>
            <div className="home bg-[#27779B] hover:bg-gray-700 flex items-center pl-3 w-full h-[33px] rounded-md mb-3">
              <PiStudentLight className="text-white" />
              <small className="text-white pl-3">Student</small>
            </div>
            <div className="home bg-[#27779B] hover:bg-gray-700 flex items-center pl-3 w-full h-[33px] rounded-md mb-3">
              <IoWalletOutline className="text-white" />{" "}
              <small className="text-white pl-3">Wallet</small>
            </div>
          </div>
          <div className="nav-foot absolute bottom-0 text-[16px]">
            <div className="home bg-[#27779B] flex items-center pl-3 w-full h-[33px] rounded-md mb-3">
              <HiOutlineSupport className="text-white" />{" "}
              <small className="text-white pl-3">Support</small>
            </div>
            <div className="home bg-[#27779B] flex items-center pl-3 w-full h-[33px] rounded-md mb-3">
              <IoSettingsOutline className="text-white" />{" "}
              <small className="text-white pl-3">Settings</small>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 rounded-tl-xl p-5 text-black w-10/12">
          dddd
        </div>
      </div>
    </div>
  );
};

export default page;
