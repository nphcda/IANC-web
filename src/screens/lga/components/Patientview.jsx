import React, { useState } from "react";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Patientdetailshome from "./Patientdetailshome";
import Patientdetailspersonal from "./Patientdetailspersonal";
import Patientdetailschedule from "./Patientdetailschedule";
import Patientdetailfirst from "./Patientdetailfirst";
import Patientdetailreturn from "./Patientdetailreturn";
import axiosInstance from "../../../utils/axios";
import { useEffect } from "react";
import moment from "moment";

const Patientview = () => {
  const [dates, setDates] = useState();
  const [data, setData] = useState();
  const [firstvisit, setFirstvisit] = useState();
  const [returnvisit, setReturnvisit] = useState();
  const [returnvisit2, setReturnvisit2] = useState(null);
  const [returnvisitparam, setReturnvisitparam] = useState({
    id: "",
    date: "",
  });
  const [lastvisit, setLastvisit] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const currentpage = location.pathname.split("/")[4];
  const getvisitdates = async () => {
    try {
      const res = await axiosInstance.get(
        `/admin/national/data/visitdates/${id}`
      );
      setReturnvisitparam({
        id: res.data?.returnvisit[0]?.id,
        date: res.data?.returnvisit[0]?.returnvisit_date,
      });
      setDates(res.data);
    } catch (error) {}
  };
  const getpatientdetails = async () => {
    try {
      const res = await axiosInstance.get(`/patients/find/${id}`);
      setData(res.data.result.data);
      setFirstvisit(res.data.result.firstvisit);
      setReturnvisit(res.data.result.returnvisit);
      setReturnvisit2(res.data.result.returnvisit[0]);
      setLastvisit(res.data.result.lastvisit[0]);
    } catch (error) {}
  };
  const returnvisitforadate = () => {
    const res = returnvisit?.filter(
      (date) =>
        date.returnvisit_date == returnvisitparam.date &&
        date.id == returnvisitparam.id
    );
    setReturnvisit2(res[0]);
  };

  const handlereturnvisit = (item, index) => {
    setReturnvisitparam({ id: item.id, date: item.returnvisit_date });
  };
  useEffect(() => {
    getvisitdates();
    getpatientdetails();
  }, [id]);

  useEffect(() => {
    returnvisitforadate();
  }, [returnvisitparam]);

  let DOB;
  if (moment().diff(data?.dateofbirth, "months") < 12) {
    DOB = moment().diff(data?.dateofbirth, "months") + " months";
  } else {
    DOB = moment().diff(data?.dateofbirth, "years") + " years";
  }
  return (
    <div className="bg-primary10 min-h-screen">
      <div className="flex items-center justify-between  py-[40px] mx-4">
        {/* arrow */}
        <div
          onClick={() => navigate(-1)}
          className="flex cursor-pointer flex-1 items-center gap-2 font-[600] text-[24px]"
        >
          <IoReturnUpBackOutline />
          <p>Patient View</p>
        </div>
        {/* name section */}
        {data && (
          <div className="border-[1.2px] rounded-[10px] flex flex-[3] items-center p-2 justify-center">
            <div className="flex flex-col gap-1 items-center justify-center">
              <div className="rounded-full flex items-center text-[16px] font-[500] justify-center bg-primary50 text-light10 w-[40px] h-[40px]">
                <span>{data?.firstname.charAt(0).toUpperCase() ?? ""}</span>
              </div>
              <p className="font-[600] text-[24px]">
                {data?.firstname.charAt(0).toUpperCase() +
                  data?.firstname.slice(1) ?? ""}
              </p>
              <div className="flex gap-2 ">
                <p>Tel: {data?.phone ?? ""}</p>
                <p>Age: {DOB}</p>
              </div>
              <div className="flex items-center gap-2">
                <p>Last visit</p>
                <CiCalendarDate />
                <p>{moment(lastvisit?.lastvisit).format("yyyy-MM-DD")}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-full flex justify-between gap-3 mx-3">
        <div className="bg-white flex items-start justify-center min-w-[250px] flex-1 p-3">
          {currentpage == "firstvisit" ? (
            <div className="flex flex-col gap-2 mt-6">
              <p className="font-[600] text-[20px]">Date of Visit</p>
              <p className="text-primary90">First Visit</p>
              {dates?.firstvisit.map((item, index) => (
                <p
                  key={index}
                  className="bg-primary90 p-2 text-center rounded-[10px] text-white"
                >
                  {moment(item.firstvisit_date).format("yyyy-MM-DD")}
                </p>
              ))}
            </div>
          ) : currentpage == "returnvisit" ? (
            <div className="flex flex-col gap-2 mt-6">
              <p className=" text-primary90">Return Visits</p>
              {dates?.returnvisit.map((item, index) => (
                <p
                  onClick={() => handlereturnvisit(item, index)}
                  key={index}
                  className={`rounded-[10px] cursor-pointer ${
                    item.id == returnvisitparam.id
                      ? "bg-primary90 p-2 text-center text-white"
                      : "border-[1.2px] border-primary70 p-2 text-primary70 text-center "
                  }`}
                >
                  {moment(item.returnvisit_date).format("yyyy-MM-DD")}
                </p>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-2 mt-6">
              <p className="font-[600] text-[20px]">Date of Visits</p>
              <p className="text-primary90">First Visit</p>
              {dates?.firstvisit.map((item, index) => (
                <p
                  key={index}
                  className="bg-primary90 p-2 text-center rounded-[10px] text-white"
                >
                  {moment(item.firstvisit_date).format("yyyy-MM-DD")}
                </p>
              ))}
              <p className=" text-primary90">Return Visits</p>
              {/* {dates?.returnvisit.map((item, index) => (
                                        <p key={index} className='bg-primary90 p-2 text-center rounded-[10px] text-white'>{moment(item.returnvisit_date).format('yyyy-MM-DD')}</p>
                                    ))} */}
              <p className="bg-primary90 p-2 text-center rounded-[10px] text-white">
                {dates?.returnvisit.length || 0}
              </p>
            </div>
          )}
        </div>
        <div className="bg-white flex-[3] min-w-[600px] p-3">
          <Routes>
            <Route index path="/" element={<Patientdetailshome />} />
            <Route
              index
              path="/personalinformation"
              element={<Patientdetailspersonal data={data} />}
            />
            <Route
              index
              path="/schedule"
              element={<Patientdetailschedule id={id} />}
            />
            <Route
              index
              path="/firstvisit"
              element={<Patientdetailfirst firstvisit={firstvisit} />}
            />
            <Route
              index
              path="/returnvisit"
              element={<Patientdetailreturn returnvisit={returnvisit2} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Patientview;
