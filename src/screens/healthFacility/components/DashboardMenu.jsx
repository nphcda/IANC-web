import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaRegUser,
  FaUserCircle,
  FaDownload,
  FaUpload,
  FaUserAlt,
  FaUserAltSlash,
} from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoBagAddOutline } from "react-icons/io5";
import { BsFillInfoCircleFill, BsBookmarkDash } from "react-icons/bs";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { BiLogOut } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { RiArrowUpDownLine } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import {
  HiArrowsUpDown,
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlineUserPlus,
} from "react-icons/hi2";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineGroup } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { useAuth } from "../../../utils/hooks/useAuth";
import PartnerLogo from "../../../components/PartnerLogo";

const DashboardMenu = ({ confirmlogout, setconfirmlogout }) => {
  const [currentPage, setCurrentPage] = useState("");
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <div className="text-[#5a5b5c]  h-auto min-h-screen px-2">
      <div className="flex w-full items-center justify-center">
        <Link
          to="/"
          className="w-[80px] h-[80px] flex items-center justify-center"
        >
          <img
            src="/images/Logo.svg"
            alt="logo"
            className="max-w-full max-h-full"
          />
        </Link>
      </div>
      <div className="">
        {/* dashboard */}
        <Link
          to="/healthfacility"
          className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
            currentPage === "/healthfacility"
              ? "bg-[#F3722C] text-white drop-shadow-lg"
              : " hover:text-[black] hover:bg-gray-200"
          }`}
        >
          <RxDashboard />
          <p>Dashboard</p>
        </Link>
        {/* Indicators */}
        <Link
          to="/healthfacility/indicators"
          className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
            currentPage.includes("indicators")
              ? "bg-[#F3722C] text-white drop-shadow-lg"
              : " hover:text-[black] hover:bg-gray-200"
          }`}
        >
          <RiArrowUpDownLine />
          <p>Indicators</p>
        </Link>

        {/* Manage users */}
        <Link
          to="/healthfacility/patients"
          className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
            currentPage.includes("/healthfacility/patients")
              ? "bg-[#F3722C] text-white drop-shadow-lg"
              : " hover:text-[black] hover:bg-gray-200"
          }`}
        >
          <HiOutlineUserGroup />
          <p>Patients</p>
        </Link>
        {/* Patients Schedule */}
        <Link
          to="/healthfacility/schedule"
          className={`flex gap-2 my-2 items-center rounded-md  p-2   ${
            currentPage == "/healthfacility/schedule"
              ? "bg-[#F3722C] text-white drop-shadow-lg"
              : " hover:text-[black] hover:bg-gray-200"
          }`}
        >
          <LuCalendarDays />
          <p>Patients Schedule</p>
        </Link>
        {/* Health Worker */}
        <Link
          to="/healthfacility/health-worker"
          className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
            currentPage.includes("health-worker")
              ? "bg-[#F3722C] text-white drop-shadow-lg"
              : " hover:text-[black] hover:bg-gray-200"
          }`}
        >
          <MdOutlineGroup />
          <p>Health Worker</p>
        </Link>

        {/* Accounts */}
        <Link
          to="/healthfacility/accounts"
          className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
            currentPage.includes("accounts")
              ? "bg-[#F3722C] text-white drop-shadow-lg"
              : " hover:text-[black] hover:bg-gray-200"
          }`}
        >
          <HiOutlineUserPlus />
          <p>Accounts</p>
        </Link>
        {/* Message */}
        {/* <Link
                    to="/healthfacility/message"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage.includes("message")
                        ? "bg-[#F3722C] text-white drop-shadow-lg"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <HiOutlineChatBubbleOvalLeftEllipsis />
                    <p>Message</p>
                </Link> */}
        {/* Settings */}
        <Link
          to="/healthfacility/settings"
          className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
            currentPage.includes("settings")
              ? "bg-[#F3722C] text-white drop-shadow-lg"
              : " hover:text-[black] hover:bg-gray-200"
          }`}
        >
          <FiSettings />
          <p>Settings</p>
        </Link>
        {/* My Profile */}
        <Link
          to="/healthfacility/profile"
          className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
            currentPage.includes("profile")
              ? "bg-[#F3722C] text-white drop-shadow-lg"
              : " hover:text-[black] hover:bg-gray-200"
          }`}
        >
          <FaRegUser />
          <p>My Profile</p>
        </Link>
        {/* Usage */}
        <Link
          to="/healthfacility/usage"
          className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
            currentPage.includes("usage")
              ? "bg-[#F3722C] text-white drop-shadow-lg"
              : " hover:text-[black] hover:bg-gray-200"
          }`}
        >
          <HiArrowsUpDown />
          <p>Usage Analytics</p>
        </Link>
        {/* Logout */}
        <div
          onClick={() => setconfirmlogout(true)}
          className={`flex gap-2 my-2 items-center rounded-md cursor-pointer  p-2  ${
            currentPage.includes("logout")
              ? "bg-[#F3722C] text-white drop-shadow-lg"
              : " hover:text-[black] hover:bg-gray-200"
          }`}
        >
          <BiLogOut />
          <p>Logout</p>
        </div>
        <div className="w-full flex py-4 items-center justify-center">
          <PartnerLogo />
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;
