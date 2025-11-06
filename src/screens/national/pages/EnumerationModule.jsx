import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineUserPlus } from "react-icons/hi2";
import UsersList from "../components/UsersList";
import CreateStateAccount from "../components/CreateStateAccount";
import CreateStateUserAccount from "../components/CreateStateUserAccount";
import StateList from "../components/StateList";
import axiosInstance from "../../../utils/axios";
import CreateWards from "../components/CreateWards";
import thumb from "../../../assets/Avatars.svg";
import EnumerationSubmissions from "../components/EnumerationSubmissions";
import EnumerationStates from "../components/EnumerationStates";
import EnumeratorList from "../components/EnumeratorList";
import CreateEnumeratorAccount from "../components/CreateEnumeratorAccount";
import EnumeratorLoginCredentials from "../components/EnumeratorLoginCredentials";
import EnumerationFilter from "../components/EnumerationFilter";
import { useGetEnumerationWidgetData } from "../queries/enumeration";
import EnumerationDataDownload from "../components/EnumerationDataDownload";

const EnumerationModule = () => {
  const [stateAccounts, setStateAccounts] = useState();

  const [navigatorSlide, setNavigatorSlide] = useState(1);

  const { widgetdata } = useGetEnumerationWidgetData();
  let componentToRender;

  switch (navigatorSlide) {
    case 1:
      componentToRender = <EnumerationSubmissions />;
      break;
    case 2:
      componentToRender = <EnumerationStates />;
      break;
    case 3:
      componentToRender = <EnumeratorList />;
      break;
    case 4:
      componentToRender = <CreateEnumeratorAccount />;
      break;
    case 5:
      componentToRender = <EnumeratorLoginCredentials />;
      break;
    case 6:
      componentToRender = <EnumerationDataDownload />;
      break;

    default:
      componentToRender = null;
      break;
  }

  return (
    <div className="">
      <div className="bg-primary10 min-w-[1000px] w-full p-10">
        {/* metrics */}
        <div className="flex items-center">
          <div className="flex justify-between w-full gap-[35px]">
            <div className="bg-[#027D52] p-4 rounded-[8px] text-white flex flex-col gap-3 min-w-[360px] flex-1">
              <div>
                <img src={thumb} alt="avatar" />
              </div>
              <div>
                <h1 className="font-inter text-4xl font-[600]">
                  {widgetdata?.totalSubmissions}
                </h1>
                <h3 className="text-sm">Total Submission</h3>
              </div>
            </div>
            <div className="bg-[#C4FF34] p-4 rounded-[8px] text-[#027D52] flex flex-col gap-3 min-w-[360px] flex-1">
              <div>
                <img src={thumb} alt="avatar" />
              </div>
              <div>
                <h1 className="font-inter text-4xl font-[600]">
                  {widgetdata?.totalClientNumber}
                </h1>
                <h3 className="text-sm">Total Number Client</h3>
              </div>
            </div>
            <div className="bg-[#EE6471] p-4 rounded-[8px] text-white flex flex-col gap-3 min-w-[360px] flex-1">
              <div>
                <img src={thumb} alt="avatar" />
              </div>
              <div>
                <h1 className="font-inter text-4xl font-[600]">
                  {widgetdata?.totalActiveStates}
                </h1>
                <h3 className="text-sm">Active States</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white mt-5 flex flex-col gap-[21px]">
          <h1 className="font-pop text-2xl font-[600] text-[#3B4250]">
            Enumeration Module
          </h1>
          <div className="flex items-center justify-evenly w-full gap-4">
            <div
              onClick={() => setNavigatorSlide(1)}
              className={`cursor-pointer text-center ${
                navigatorSlide === 1
                  ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                  : "text-light90 pb-2 font-[500]"
              }`}
            >
              Submissions Table
            </div>
            <div
              onClick={() => setNavigatorSlide(2)}
              className={`cursor-pointer text-center ${
                navigatorSlide === 2
                  ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                  : "text-light90 pb-2 font-[500]"
              }`}
            >
              Active State
            </div>
            <div
              onClick={() => setNavigatorSlide(3)}
              className={`cursor-pointer text-center ${
                navigatorSlide === 3
                  ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                  : "text-light90 pb-2 font-[500]"
              }`}
            >
              Enumerator List
            </div>
            <div
              onClick={() => setNavigatorSlide(4)}
              className={`cursor-pointer text-center ${
                navigatorSlide === 4
                  ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                  : "text-light90 pb-2 font-[500]"
              }`}
            >
              Create Enumerator Account
            </div>
            <div
              onClick={() => setNavigatorSlide(5)}
              className={`cursor-pointer text-center ${
                navigatorSlide === 5
                  ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                  : "text-light90 pb-2 font-[500]"
              }`}
            >
              Login Credentials
            </div>
            <div
              onClick={() => setNavigatorSlide(6)}
              className={`cursor-pointer text-center ${
                navigatorSlide === 6
                  ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                  : "text-light90 pb-2 font-[500]"
              }`}
            >
              Download Data
            </div>
          </div>
        </div>
        {/* filter */}
        {/* <EnumerationFilter /> */}
        <div className="w-full flex items-center justify-center font-inter my-5">
          <div className="bg-white w-full  flex flex-col items-center justify-start px-3 py-4">
            {/* navigator */}

            {componentToRender}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnumerationModule;
