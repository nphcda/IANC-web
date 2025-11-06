import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineUserPlus } from "react-icons/hi2";
import UsersList from "../components/UsersList";
import CreateStateAccount from "../components/CreateStateAccount";
import CreateStateUserAccount from "../components/CreateStateUserAccount";
import StateList from "../components/StateList";
import axiosInstance from "../../../utils/axios";
import CreateWards from "../components/CreateWards";

const Accounts = () => {
  const [stateAccounts, setStateAccounts] = useState();

  const [navigatorSlide, setNavigatorSlide] = useState(1);

  useEffect(() => {
    const getAllStates = async () => {
      const result = await axiosInstance.get("/admin/state/data/find/states");
      setStateAccounts(result.data);
    };
    getAllStates();
  }, []);
  let componentToRender;

  switch (navigatorSlide) {
    case 1:
      componentToRender = <UsersList />;
      break;
    case 2:
      componentToRender = <CreateStateAccount />;
      break;
    case 3:
      componentToRender = <CreateStateUserAccount states={stateAccounts} />;
      break;
    case 4:
      componentToRender = <StateList />;
      break;

    default:
      componentToRender = null;
      break;
  }

  return (
    <div className="">
      <div className="bg-primary10 min-w-[1000px] w-full">
        {/* dashboard */}
        <div className="flex w-full items-center justify-between px-3 py-3">
          <div className="flex gap-2 items-center p-2">
            <HiOutlineUserPlus />
            <p className="text-secondary400 text-[18px] font-[600]">Accounts</p>
          </div>
        </div>

        <div className="w-full flex items-center justify-center font-inter my-5">
          <div className="bg-white min-w-[1000px]  flex flex-col items-center justify-start px-3 py-4">
            {/* navigator */}
            <div className="flex items-center justify-evenly w-full gap-4">
              <div
                onClick={() => setNavigatorSlide(1)}
                className={`cursor-pointer text-center ${
                  navigatorSlide === 1
                    ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                    : "text-light90 pb-2 font-[500]"
                }`}
              >
                User List
              </div>
              <div
                onClick={() => setNavigatorSlide(2)}
                className={`cursor-pointer text-center ${
                  navigatorSlide === 2
                    ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                    : "text-light90 pb-2 font-[500]"
                }`}
              >
                Create State Account
              </div>
              <div
                onClick={() => setNavigatorSlide(3)}
                className={`cursor-pointer text-center ${
                  navigatorSlide === 3
                    ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                    : "text-light90 pb-2 font-[500]"
                }`}
              >
                Create State User Account{" "}
              </div>
              <div
                onClick={() => setNavigatorSlide(4)}
                className={`cursor-pointer text-center ${
                  navigatorSlide === 4
                    ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                    : "text-light90 pb-2 font-[500]"
                }`}
              >
                State List
              </div>
            </div>

            {componentToRender}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
