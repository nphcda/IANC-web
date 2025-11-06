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
          to="/mamii"
          className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
            currentPage === "/mamii"
              ? "bg-primary90 text-white drop-shadow-lg"
              : " hover:text-[black] hover:bg-gray-200"
          }`}
        >
          <RxDashboard />
          <p>Dashboard</p>
        </Link>
        {/* Indicators */}
        <Link
          to="/mamii/records"
          className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
            currentPage.includes("records")
              ? "bg-primary90 text-white drop-shadow-lg"
              : " hover:text-[black] hover:bg-gray-200"
          }`}
        >
          <RiArrowUpDownLine />
          <p>Records</p>
        </Link>

        {/* Manage users */}
        <Link
          to="/mamii/clientschedule"
          className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
            currentPage.includes("/mamii/clientschedule")
              ? "bg-primary90 text-white drop-shadow-lg"
              : " hover:text-[black] hover:bg-gray-200"
          }`}
        >
          <LuCalendarDays />

          <p>Client Schedule</p>
        </Link>
        {/* Enumerators */}
        <Link
          to="/mamii/enumerators"
          className={`flex gap-2 my-2 items-center rounded-md  p-2   ${
            currentPage == "/mamii/enumerators"
              ? "bg-primary90 text-white drop-shadow-lg"
              : " hover:text-[black] hover:bg-gray-200"
          }`}
        >
          <HiOutlineUserGroup />
          <p>Enumerators</p>
        </Link>

        {/* Accounts */}
        <Link
          to="/mamii/accounts"
          className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
            currentPage.includes("accounts")
              ? "bg-primary90 text-white drop-shadow-lg"
              : " hover:text-[black] hover:bg-gray-200"
          }`}
        >
          <HiOutlineUserPlus />
          <p>Accounts</p>
        </Link>

        {/* My Profile */}
        <Link
          to="/mamii/profile"
          className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
            currentPage.includes("profile")
              ? "bg-primary90 text-white drop-shadow-lg"
              : " hover:text-[black] hover:bg-gray-200"
          }`}
        >
          <FaRegUser />
          <p>My Profile</p>
        </Link>

        {/* Logout */}
        <div
          onClick={() => setconfirmlogout(true)}
          className={`flex gap-2 my-2 items-center rounded-md cursor-pointer  p-2  ${
            currentPage.includes("logout")
              ? "bg-primary90 text-white drop-shadow-lg"
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
