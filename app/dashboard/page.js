"use client";
import React from "react";
import { CiHome } from "react-icons/ci";
import { FaRegChartBar } from "react-icons/fa6";
import { PiStudentLight } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { HiOutlineSupport } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { LuBarChart } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
// import Image from "next/image";

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
            <div className="home bg-[#27779B] flex items-center pl-3 w-full h-[20px] rounded-md mb-3">
              <HiOutlineSupport className="text-white" />{" "}
              <small className="text-white pl-3">Support</small>
            </div>
            <div className="home bg-[#27779B] flex items-center pl-3 w-full h-[20px] rounded-md mb-3">
              <IoSettingsOutline className="text-white" />{" "}
              <small className="text-white pl-3">Settings</small>
            </div>
            <div className="mb-5 mt-10 bg-[#27779B] flex items-center pl-3 w-full h-[20px] rounded-md mb-3">
              <img
                src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg"
                alt="avatar"
                className="rounded-[50px] img-fluid rounded-circle me-3"
                width={35}
                height={35}
              />
              <small className="text-white pl-3">
                Ayele Tutor Center <br /> ayele@tutot.com
              </small>
              <LuLogOut className="text-white pl-3 text-[33px]" />
            </div>
          </div>
        </div>
        <div className="bg-slate-50 rounded-tl-xl p-5 text-black w-10/12">
          <div className="titleHead text-black">
            <h2 className="font-bold">Course Overview</h2>
            <hr />
          </div>
          <div className="md:flex w-full h-screen mt-4">
            <div className="w-8/12 mr-2">
              <div
                className="bg-cover bg-center mb-3"
                style={{
                  backgroundImage: 'url("/Image.png")',
                  width: "100%",
                  height: "45%",
                }}
              ></div>
              <div className="contents mt-4">
                <h3 className="font-bold">Course Overview</h3>
                <p className="text-sm font-light leading-snug tracking-wide text-[9px]">
                  About the Course
                </p>
                <p className="mt-6 break-words text-[11px] font-normal leading-relaxed text-gray-700 dark:text-gray-400">
                  Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
                  nulla odio nisl vitae. In aliquet pellentesque aenean hac
                  vestibulum turpis mi bibendum diam. Tempor integer aliquam in
                  itae malesuada fringilla. Elit nisi in eleifend sed nisi.
                  Pulvinar at orci, proin imperdiet commodo consectetur
                  convallis risus. Ipsum sit mattis nulla quam nulla. Gravida id
                  gravida ac enim mauris id.Diam elit, orci, tincidunt aenean
                  tempus. Quis velit eget ut tortor tellus. Sed vel, congue
                  felis elit erat nam nibh orci. Non pellentesque congue eget
                  consectetur turpis. Sapien, dictum molestie sem tempor. Diam
                  elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor
                  tellus. Sed vel, congue felis elit erat nam nibh orci.
                </p>
                <div className="mt-5">
                  <h6>Duration</h6>
                  <small>3 Weeks</small>
                </div>
              </div>
            </div>
            <div className="w-4/12 mr-2">

              <div className="shadow-lg w-full bg-[#FFFFFF] h-[285px] rounded-t-2xl pt-2">
                <h1 className="text-center text-[25px]">N35,000.00</h1>
                <hr />
                <div className="md:flex mt-2 pl-3 text-[19px]">
                  <div className="w-2/12">
                    <IoMdTime className="text-black mt-2" />
                  </div>
                  <div className="w-7/12">
                    <small>Course Duration</small>
                  </div>
                  <div className="w-3/12">
                    <small>4 Weeks</small>
                  </div>
                </div>
                <div className="md:flex mt-2 pl-3 text-[19px]">
                  <div className="w-2/12">
                    <LuBarChart className="text-black mt-2" />
                  </div>
                  <div className="w-7/12">
                    <small>Course Level</small>
                  </div>
                  <div className="w-3/12">
                    <small>Beginner</small>
                  </div>
                </div>
                <div className="md:flex mt-2 pl-3 text-[19px]">
                  <div className="w-2/12">
                    <LuUsers className="text-black mt-2" />
                  </div>
                  <div className="w-7/12">
                    <small>Students Enrolled</small>
                  </div>
                  <div className="w-3/12">
                    <small>75</small>
                  </div>
                </div>
                <div className="md:flex mt-2 pl-3 text-[19px]">
                  <div className="w-2/12">
                    <IoDocumentTextOutline className="text-black mt-2" />
                  </div>
                  <div className="w-7/12">
                    <small>Subtittle Language</small>
                  </div>
                  <div className="w-3/12">
                    <small>English</small>
                  </div>
                </div>
                <hr className="mt-3" />
                <div className="pl-8">
                  <button class="bg-[#27779B] mt-4 w-[90%] text-center text-white hover:bg-blue-400 font-bold px-4 rounded items-center h-[40px]">
                    <span>Edit Price</span>
                  </button>
                </div>
              </div>
              <div className="w-full bg-[#FFFFFF] h-[285px] pt-2 mt-5">
                <h1 className="text-center text-[25px]">N35,000.00</h1>
                <hr />
                <div className="md:flex mt-2 pl-3 text-[19px]">
                  <div className="w-2/12">
                    <IoMdTime className="text-black mt-2" />
                  </div>
                  <div className="w-7/12">
                    <small>Course Duration</small>
                  </div>
                  <div className="w-3/12">
                    <small>4 Weeks</small>
                  </div>
                </div>
                <div className="md:flex mt-2 pl-3 text-[19px]">
                  <div className="w-2/12">
                    <LuBarChart className="text-black mt-2" />
                  </div>
                  <div className="w-7/12">
                    <small>Course Level</small>
                  </div>
                  <div className="w-3/12">
                    <small>Beginner</small>
                  </div>
                </div>
                <div className="md:flex mt-2 pl-3 text-[19px]">
                  <div className="w-2/12">
                    <LuUsers className="text-black mt-2" />
                  </div>
                  <div className="w-7/12">
                    <small>Students Enrolled</small>
                  </div>
                  <div className="w-3/12">
                    <small>75</small>
                  </div>
                </div>
                <div className="md:flex mt-2 pl-3 text-[19px]">
                  <div className="w-2/12">
                    <IoDocumentTextOutline className="text-black mt-2" />
                  </div>
                  <div className="w-7/12">
                    <small>Subtittle Language</small>
                  </div>
                  <div className="w-3/12">
                    <small>English</small>
                  </div>
                </div>
                <hr className="mt-3" />
                <div className="pl-8">
                  <button class="bg-[#27779B] mt-4 w-[90%] text-center text-white hover:bg-blue-400 font-bold px-4 rounded items-center h-[40px]">
                    <span>Edit Price</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
