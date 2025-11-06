import React, { useEffect, useState } from "react";
import { IoMdInformationCircle } from "react-icons/io";
import PieChart from "../charts/Piechart";
import ExpectedDelivery from "../charts/ExpectedDelivery";
import { motion } from "framer-motion";
import axiosInstance from "../../../utils/axios";
import Gravidity from "../charts/Gravidity";
import Parity from "../charts/Parity";
import BabysMovement from "../charts/BabysMovement";
import FirstBabyMovement from "../charts/FirstBabyMovement";
import WorkOutsideHome from "../charts/WorkOutsideHome";
import WalkLong from "../charts/WalkLong";
import HeavyLoads from "../charts/HeavyLoads";
import BabyLessAYear from "../charts/BabyLessAYear";
import Livewith from "../charts/Livewith";
import Frightened from "../charts/Frightened";
import GenericPie from "../charts/GenericPie";
import BreastfeedindDuration from "../charts/BreastfeedingDuration";

const IndicatorNavigatorScreen2 = () => {
  const [graviditygreater, setGraviditygreater] = useState(0);
  const [graviditylesser, setGraviditylesser] = useState(0);
  const [edd, setEdd] = useState([]);
  const graviditygreaterthan8 = async () => {
    try {
      const res = await axiosInstance.get("/patients/gravidity/find/greater");
      setGraviditygreater(res.data.length);
    } catch (error) {}
  };
  const graviditylessthan8 = async () => {
    try {
      const res = await axiosInstance.get("/patients/gravidity/find/lesser");
      setGraviditylesser(res.data.length);
    } catch (error) {}
  };
  const [datainfo, setDatainfo] = useState();
  console.log(datainfo);

  const getIndicatordata = async () => {
    try {
      const res = await axiosInstance.get(
        "/admin/national/data/general/return"
      );
      setDatainfo(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    graviditygreaterthan8();
    graviditylessthan8();
    getIndicatordata();
  }, []);
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="w-full"
    >
      <div>
        <p className="text-primary90 font-[500] my-5">Personal Information</p>
        {/* chart 1 */}
        <div className="grid grid-cols-2 gap-5">
          {/* Pie chart (Gravidity) */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Gravidity</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">Rate</p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* Gravidity diagram */}
            <Gravidity
              colors={["#14A673", "#D1FF60"]}
              series={[graviditylesser, graviditygreater]}
            />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>1 - 7</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>Above 8</span>
              </div>
            </div>
          </div>
          {/* expected delivery */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Expected Delivery </p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Number of EDD
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD]" />
            </div>
            {/* The bar chart diagram */}
            <ExpectedDelivery series={edd} />
          </div>
          {/* parity */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Parity</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">Rate</p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The pie chart diagram */}
            <Parity colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>24 weeks</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>Above 24 weeks</span>
              </div>
            </div>
          </div>
          {/* babys movement */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Baby's movement</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  client felt the baby's movement
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The pie chart diagram */}
            <BabysMovement
              colors={["#14A673", "#14A673", "#2FCF97", "#52F7BE"]}
              series={[25, 25, 25, 25]}
            />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary90"></div>
                <span>Yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>No</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#2FCF97]"></div>
                <span>I don't Know</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#52F7BE]"></div>
                <span>Not Applicable</span>
              </div>
            </div>
          </div>
          {/* first baby movement */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Parity</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">Rate</p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The pie chart diagram */}
            <FirstBabyMovement
              colors={["#14A673", "#D1FF60"]}
              series={[70, 30]}
            />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>24 weeks</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>Above 24 weeks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* daily habits and lifestyle */}
      <div>
        <p className="text-primary90 font-[500] my-5">
          Daily Habits and Lifestyle{" "}
        </p>
        {/* chart 1 */}
        <div className="grid grid-cols-2 gap-5">
          {/* Pie chart (work outside home) */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Work outside the home</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Do you work outside the home?
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The chart diagram */}
            <WorkOutsideHome
              colors={["#14A673", "#D1FF60"]}
              series={[60, 40]}
            />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>Yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          {/* Pie chart (long distances) */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Walk long distances</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Do you walk long distances?
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The pie chart diagram */}
            <WalkLong colors={["#14A673", "#D1FF60"]} series={[60, 40]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary90"></div>
                <span>Yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          {/* Pie chart (heavy loads) */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Heavy loads</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Do you carry heavy loads or do heavy physical labour
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The pie chart diagram */}
            <HeavyLoads colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Baby less than 1yr</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Do you have a baby that is currently less than one year old?
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The pie chart diagram */}
            <BabyLessAYear colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Live with</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Who do you Live with?
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The pie chart diagram */}
            <Livewith
              colors={["#F94144", "#F3722C", "#F8961E", "#F9C74F", "#90BE6D"]}
              series={[20, 10, 20, 25, 25]}
            />
            {/* info about chart */}
            <div className="flex flex-wrap gap-7 w-full px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#F94144]"></div>
                <span>Partner</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#F3722C]"></div>
                <span>Relative</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#F8961E]"></div>
                <span>Alone</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#F9C74F]"></div>
                <span>Friend</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#90BE6D]"></div>
                <span>Others</span>
              </div>
            </div>
          </div>
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Frightened by anyone</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Do you feel frightened by anyone?
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The pie chart diagram */}
            <Frightened colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* obstetric history */}
      <div>
        <p className="text-primary90 font-[500] my-5">Obstetric History</p>
        {/* chart 1 */}
        <div className="grid grid-cols-2 gap-5">
          {/* Pie chart (convulsions) */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Convulsions</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Convulsions during pregnancy or during/after childbirth
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The chart diagram */}
            <GenericPie colors={["#14A673", "#D1FF60"]} series={[60, 40]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>Yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Medical history */}
      <div>
        <p className="text-primary90 font-[500] my-5">Medical History</p>
        {/* chart 1 */}
        <div className="grid grid-cols-2 gap-5">
          {/* Pie chart */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Pulmonary</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">Cough</p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The chart diagram */}
            <GenericPie colors={["#14A673", "#D1FF60"]} series={[60, 40]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>Yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          {/* Pie chart */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Pulmonary</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Difficulty in breathing
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The chart diagram */}
            <GenericPie colors={["#14A673", "#D1FF60"]} series={[60, 40]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary90"></div>
                <span>Yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          {/* Pie chart */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Cardiovascular</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Palpitations
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The pie chart diagram */}
            <GenericPie colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          {/* Cardiovascular */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Cardiovascular</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Swelling of feet and/or legs
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The chart diagram */}
            <GenericPie colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          {/* Cardiovascular */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Cardiovascular</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Severe chest pain
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The pie chart diagram */}
            <GenericPie colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          {/* Cardiovascular */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Cardiovascular</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Severe epigastric pain
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The chart diagram */}
            <GenericPie colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          {/* low birthweight babies */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Cardiovascular</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Severe tiredness after doing little activity
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The chart diagram */}
            <GenericPie colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          {/* Cardiovascular  */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Cardiovascular </p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Do you find it difficult to sleep lying down flat?
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The chart diagram */}
            <GenericPie colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          {/* Neurologic */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Neurologic</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Dizziness/Light flashing
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The chart diagram */}
            <GenericPie colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          {/* Gastrointestinal */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Gastrointestinal</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Severe abdominal pain
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The chart diagram */}
            <GenericPie colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          {/* Gastrointestinal */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Gastrointestinal</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Persistent vomiting (not able to eat or drink anything without
                  vomiting)
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The chart diagram */}
            <GenericPie colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          {/* Gastrointestinal */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Gastrointestinal</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Severe diarrhoea (passage of watery stools of more than 3
                  times in a day)
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The chart diagram */}
            <GenericPie colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          {/* Urinary */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Urinary</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Pain with urination
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The chart diagram */}
            <GenericPie colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          {/* Urinary */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Urinary</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Severe flank pain
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The chart diagram */}
            <GenericPie colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          {/* Urinary */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Urinary</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Blood in urine
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The chart diagram */}
            <GenericPie colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          {/* Gynaecological */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Gynaecological</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  vaginal discharge
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The chart diagram */}
            <GenericPie colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          {/* Gynaecological */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Gynaecological</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Deep pelvic pain during sex
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The chart diagram */}
            <GenericPie colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          {/* Gynaecological */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Gynaecological</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Diagnosis with syphilis
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The chart diagram */}
            <GenericPie colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          {/* Dry cough */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Dry cough</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Persistent dry cough of up to or more than one month duration?
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The chart diagram */}
            <GenericPie colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          {/* Weight loss */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Weight loss</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Unexplained progressive weight loss.
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The chart diagram */}
            <GenericPie colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          {/* Night sweats */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Night sweats</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Night sweats
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The chart diagram */}
            <GenericPie colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          {/* Tuberculosis */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Tuberculosis</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Have you ever been diagnosed with tuberculosis?
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The chart diagram */}
            <GenericPie colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
          {/* Tuberculosis treatment */}
          <div className=" min-w-[250px] shadow-xl">
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex flex-col">
                <p className="font-[500] text-black">Tuberculosis treatment</p>
                <p className="font-[400] text-[#4F4F4F] text-[14px]">
                  Have you been treated previously for TB?
                </p>
              </div>
              <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
            </div>
            <hr />
            {/* The chart diagram */}
            <GenericPie colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
            {/* info about chart */}
            <div className="flex gap-7 px-2 py-4">
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                <span>yes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IndicatorNavigatorScreen2;
