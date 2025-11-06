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
import { useAuth } from "../hooks/useAuth";
import LoaderSmall from "../../../components/LoaderSmall";

const IndicatorNavigatorScreen1 = ({ chart }) => {
  const { healthfacilityAuth } = useAuth();
  const { healthfacility, lga, state } = healthfacilityAuth.others;
  const [datainfo, setDatainfo] = useState();

  const getIndicatordata = async () => {
    try {
      const res = await axiosInstance.get(
        `/admin/healthfacility/data/general?healthfacility=${healthfacility}`
      );
      setDatainfo(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    getIndicatordata();
  }, []);
  return (
    <>
      {datainfo ? (
        <>
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
              <p className="text-primary90 font-[500] my-5">
                Personal Information
              </p>
              {/* chart 1 */}
              <div className="grid grid-cols-2 gap-5">
                {/* Pie chart (Gravidity) */}
                {chart == "all" || chart.includes("gravidity") ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">Gravidity</p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Rate
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* Gravidity diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.graviditylessthan8result,
                        datainfo.graviditygreaterthan8result,
                      ]}
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
                ) : null}
                {/* expected delivery */}
                {chart == "all" || chart == "edd" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">
                          Expected Delivery{" "}
                        </p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Number of EDD
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD]" />
                    </div>
                    {/* The bar chart diagram */}
                    <ExpectedDelivery series={datainfo.edd} />
                  </div>
                ) : null}
                {/* parity */}
                {chart == "all" || chart == "parity" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">Parity</p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Rate
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The pie chart diagram */}
                    {datainfo?.parity && (
                      <GenericPie
                        colors={["#14A673", "#D1FF60"]}
                        series={[datainfo.parity.less, datainfo.parity.greater]}
                      />
                    )}
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
                ) : null}
                {/* babys movement */}
                {chart == "all" || chart == "babysmovement" ? (
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
                    <GenericPie
                      colors={["#027D52", "#14A673", "#2FCF97", "#52F7BE"]}
                      series={
                        datainfo?.babysmovement
                          ? [
                              datainfo.babysmovement.yes,
                              datainfo.babysmovement.no,
                              datainfo.babysmovement.dontknow,
                              datainfo.babysmovement.notapplicable,
                            ]
                          : [1, 1, 1, 1]
                      }
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
                ) : null}
              </div>
            </div>
            {/* daily habits and lifestyle */}
            <div>
              <p className="text-primary90 font-[500] my-5">
                Daily Habits and Lifestyle{" "}
              </p>
              {/* chart 1 */}
              <div className="grid grid-cols-2 gap-5">
                {/* Pie chart (smoke) */}
                {chart == "all" || chart == "doyousmoke" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">Smoke</p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Do you smoke?
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[datainfo.doyousmoke.yes, datainfo.doyousmoke.no]}
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
                ) : null}

                {/* Pie chart (Drink Alcohol) */}
                {chart == "all" || chart == "alcohol" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">Drink Alcohol</p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Do you drink alcohol?
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The pie chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[datainfo.alcohol.yes, datainfo.alcohol.no]}
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
                    </div>
                  </div>
                ) : null}
                {/* live with */}
                {chart == "all" || chart == "livewith" ? (
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
                    <GenericPie
                      colors={[
                        "#F94144",
                        "#F3722C",
                        "#F8961E",
                        "#F9C74F",
                        "#90BE6D",
                      ]}
                      series={[
                        datainfo.livewith.partner,
                        datainfo.livewith.relative,
                        datainfo.livewith.alone,
                        datainfo.livewith.friend,
                        datainfo.livewith.others,
                      ]}
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
                ) : null}
                {chart == "all" || chart == "threatened" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">
                          Threatened by anyone
                        </p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Do you feel Threatened by anyone?
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The pie chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[datainfo.threatened.yes, datainfo.threatened.no]}
                    />
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
                ) : null}
              </div>
            </div>
            {/* obstetric history */}
            <div>
              <p className="text-primary90 font-[500] my-5">
                Obstetric History
              </p>
              {/* chart 1 */}
              <div className="grid grid-cols-2 gap-5">
                {/* Pie chart (work outside home) */}
                {chart == "all" || chart == "convulsionsduringpregnancy" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">Convulsions</p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Convulsions during pregnancy or during/after
                          childbirth
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.convulsionsduringpregnancy.yes,
                        datainfo.convulsionsduringpregnancy.no,
                      ]}
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
                ) : null}
                {/* Pie chart (Surgery) */}
                {chart == "all" || chart == "caesarean" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">Surgery</p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Caesarean section, uterine rupture, or uterine surgery
                          during childbirth
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[datainfo.caesarean.yes, datainfo.caesarean.no]}
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
                    </div>
                  </div>
                ) : null}
                {/* Pie chart (Tears) */}
                {chart == "all" || chart == "tearsthroughsphincter" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">Tears</p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Tears through the sphincter and/or rectum during
                          childbirth
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The pie chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.tearsthroughsphincter.yes,
                        datainfo.tearsthroughsphincter.no,
                      ]}
                    />
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
                ) : null}
                {/* Postpartum haemorrhage */}
                {chart == "all" || chart == "postpartiumhaemorrghage" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">
                          Postpartum haemorrhage
                        </p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Postpartum haemorrhage
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.postpartiumhaemorrghage.yes,
                        datainfo.postpartiumhaemorrghage.no,
                      ]}
                    />
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
                ) : null}
                {/* Stillbirths */}
                {chart == "all" || chart == "stillbirths" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">Stillbirths</p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Stillbirths
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The pie chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.stillbirths.yes,
                        datainfo.stillbirths.no,
                      ]}
                    />
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
                ) : null}
                {/* Premature deliveries */}
                {chart == "all" || chart == "prematuredeliveries" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">
                          Premature deliveries
                        </p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Premature deliveries
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.prematuredeliveries.yes,
                        datainfo.prematuredeliveries.no,
                      ]}
                    />
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
                ) : null}
                {/* low birthweight babies */}
                {chart == "all" || chart == "lowbirthbabies" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">
                          low birthweight babies
                        </p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          low birthweight babies
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.lowbirthbabies.yes,
                        datainfo.lowbirthbabies.no,
                      ]}
                    />
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
                ) : null}
                {/* Babies who died  */}
                {chart == "all" || chart == "babieswhodied" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">
                          Babies who died{" "}
                        </p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Babies who died before 1 month of age
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.babieswhodied.yes,
                        datainfo.babieswhodied.no,
                      ]}
                    />
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
                ) : null}
                {/* Miscarriages */}
                {chart == "all" || chart == "miscarriages" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">Miscarriages</p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Three or more spontaneous miscarriages
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.miscarriages.yes,
                        datainfo.miscarriages.no,
                      ]}
                    />
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
                ) : null}
              </div>
            </div>
            {/* Medical history */}
            <div>
              <p className="text-primary90 font-[500] my-5">Medical History</p>
              {/* chart 1 */}
              <div className="grid grid-cols-2 gap-5">
                {/* Pie chart */}
                {chart == "all" || chart == "cough" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">Pulmonary</p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Cough
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[datainfo.cough.yes, datainfo.cough.no]}
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
                ) : null}
                {/* Pie chart */}
                {chart == "all" || chart == "difficultybreathing" ? (
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
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.difficultybreathing.yes,
                        datainfo.difficultybreathing.no,
                      ]}
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
                    </div>
                  </div>
                ) : null}
                {/* Pie chart */}
                {chart == "all" || chart == "palpitations" ? (
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
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.palpitations.yes,
                        datainfo.palpitations.no,
                      ]}
                    />
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
                ) : null}
                {/* Cardiovascular */}
                {chart == "all" || chart == "swellingfeet" ? (
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
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.swellingfeet.yes,
                        datainfo.swellingfeet.no,
                      ]}
                    />
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
                ) : null}
                {/* Cardiovascular */}
                {chart == "all" || chart == "chestpain" ? (
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
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[datainfo.chestpain.yes, datainfo.chestpain.no]}
                    />
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
                ) : null}
                {/* Cardiovascular */}
                {chart == "all" || chart == "epigastricpain" ? (
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
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.epigastricpain.yes,
                        datainfo.epigastricpain.no,
                      ]}
                    />
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
                ) : null}
                {/* low birthweight babies */}
                {chart == "all" || chart == "severetiredness" ? (
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
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.severetiredness.yes,
                        datainfo.severetiredness.no,
                      ]}
                    />
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
                ) : null}

                {/* Neurologic */}
                {chart == "all" || chart == "dizziness" ? (
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
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo?.dizziness?.yes,
                        datainfo?.dizziness?.no,
                      ]}
                    />
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
                ) : null}
                {/* Gastrointestinal */}
                {chart == "all" || chart == "severeabdominalpain" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">
                          Gastrointestinal
                        </p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Severe abdominal pain
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.severeabdominalpain?.yes,
                        datainfo.severeabdominalpain?.no,
                      ]}
                    />
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
                ) : null}
                {/* Gastrointestinal */}
                {chart == "all" || chart == "persistentvomiting" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">
                          Gastrointestinal
                        </p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Persistent vomiting (not able to eat or drink anything
                          without vomiting)
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.persistentvomiting?.yes,
                        datainfo.persistentvomiting?.no,
                      ]}
                    />
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
                ) : null}
                {/* Gastrointestinal */}
                {chart == "all" || chart == "severediarrhoea" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">
                          Gastrointestinal
                        </p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Severe diarrhoea (passage of watery stools of more
                          than 3 times in a day)
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.severediarrhoea?.yes,
                        datainfo.severediarrhoea?.no,
                      ]}
                    />
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
                ) : null}
                {/* Urinary */}
                {chart == "all" || chart == "painwithurination" ? (
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
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.painwithurination?.yes,
                        datainfo.painwithurination?.no,
                      ]}
                    />
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
                ) : null}
                {/* Urinary */}
                {chart == "all" || chart == "severeflankpain" ? (
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
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.severeflankpain?.yes,
                        datainfo.severeflankpain?.no,
                      ]}
                    />
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
                ) : null}
                {/* Urinary */}
                {chart == "all" || chart == "bloodinurine" ? (
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
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.bloodinurine?.yes,
                        datainfo.bloodinurine?.yes,
                      ]}
                    />
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
                ) : null}

                {/* Gynaecological */}
                {chart == "all" || chart == "vaginaldischarge" ? (
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
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.vaginaldischarge?.yes,
                        datainfo.vaginaldischarge?.no,
                      ]}
                    />
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
                ) : null}
                {/* Gynaecological */}
                {chart == "all" || chart == "vaginaldischarge" ? (
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
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.deeppelvicpain?.yes,
                        datainfo.deeppelvicpain?.no,
                      ]}
                    />
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
                ) : null}
                {/* Gynaecological */}
                {chart == "all" || chart == "syphilis" ? (
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
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[datainfo.syphilis?.yes, datainfo.syphilis?.no]}
                    />
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
                ) : null}
                {/* Dry cough */}
                {chart == "all" || chart == "persistentdrycough" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">Dry cough</p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Persistent dry cough of up to or more than one month
                          duration?
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.persistentdrycough?.yes,
                        datainfo.persistentdrycough?.no,
                      ]}
                    />
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
                ) : null}
                {/* Weight loss */}
                {chart == "all" || chart == "progressiveweightloss" ? (
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
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.progressiveweightloss?.yes,
                        datainfo.progressiveweightloss?.no,
                      ]}
                    />
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
                ) : null}
                {/* Night sweats */}
                {chart == "all" || chart == "nightsweats" ? (
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
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.nightsweats?.yes,
                        datainfo.nightsweats?.no,
                      ]}
                    />
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
                ) : null}
                {/* Tuberculosis */}
                {chart == "all" || chart == "diagnosedwithtuberculosis" ? (
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
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.diagnosedwithtuberculosis?.yes,
                        datainfo.diagnosedwithtuberculosis?.no,
                      ]}
                    />
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
                ) : null}
                {/* Tuberculosis treatment */}
                {chart == "all" || chart == "treatedTBpreviously" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">
                          Tuberculosis treatment
                        </p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Have you been treated previously for TB?
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.treatedTBpreviously?.yes,
                        datainfo.treatedTBpreviously?.no,
                      ]}
                    />
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
                ) : null}
                {/* Heart disease */}
                {chart == "all" || chart == "heartdisease" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">Heart disease</p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Heart disease
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.heartdisease?.yes,
                        datainfo.heartdisease?.no,
                      ]}
                    />
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
                ) : null}
                {/* Anaemia */}
                {chart == "all" || chart == "anaemia" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">Anaemia</p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Anaemia in the last 3 months
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[datainfo.anaemia?.yes, datainfo.anaemia?.no]}
                    />
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
                ) : null}
                {/* Kidney disease */}
                {chart == "all" || chart == "kidneydisease" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">Kidney disease</p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Kidney disease
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.kidneydisease?.yes,
                        datainfo.kidneydisease?.no,
                      ]}
                    />
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
                ) : null}
                {/* Sickle cell disease */}
                {chart == "all" || chart == "sicklecell" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">
                          Sickle cell disease
                        </p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Sickle cell disease
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.sicklecell?.yes,
                        datainfo.sicklecell?.no,
                      ]}
                    />
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
                ) : null}
                {/* Diabetes */}
                {chart == "all" || chart == "diabetes" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">Diabetes</p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Diabetes
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[datainfo.diabetes?.yes, datainfo.diabetes?.no]}
                    />
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
                ) : null}
                {/* Goitre */}
                {chart == "all" || chart == "goitre" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">Goitre</p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Goitre
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[datainfo.goitre?.yes, datainfo.goitre?.no]}
                    />
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
                ) : null}
                {/* HIV/AIDS */}
                {chart == "all" || chart == "hivaids" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">HIV/AIDS</p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          HIV/AIDS
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[datainfo.hivaids?.yes, datainfo.hivaids?.no]}
                    />
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
                ) : null}
                {/* chronic illness */}
                {chart == "all" || chart == "otherseriouschronicillnesses" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">chronic illness</p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Any other serious chronic illness
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.otherseriouschronicillnesses?.yes,
                        datainfo.otherseriouschronicillnesses?.no,
                      ]}
                    />
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
                ) : null}

                {/* Surgery */}
                {chart == "all" || chart == "hadsurgery" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">Surgery</p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Have you ever had surgery?
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[datainfo.hadsurgery.yes, datainfo.hadsurgery.no]}
                    />
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
                ) : null}

                {/* Herbal remedies */}
                {chart == "all" || chart == "herbalremedies" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">Herbal remedies</p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Herbal remedies
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.herbalremedies.yes,
                        datainfo.herbalremedies.yes,
                      ]}
                    />
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
                ) : null}
                {/* over the counter */}
                {chart == "all" || chart == "otcdrugs" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">
                          Over-the-counter
                        </p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Over-the-counter
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[datainfo.otcdrugs.yes, datainfo.otcdrugs.no]}
                    />
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
                ) : null}

                {/* Dietary supplements */}
                {chart == "all" || chart == "dietarysupplements" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">
                          Dietary supplements
                        </p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          Dietary supplements
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[
                        datainfo.dietarysupplements.yes,
                        datainfo.dietarysupplements.no,
                      ]}
                    />
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
                ) : null}
                {/* tetanus */}
                {chart == "all" || chart == "tetanus" ? (
                  <div className=" min-w-[250px] shadow-xl">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div className="flex flex-col">
                        <p className="font-[500] text-black">Tetanus</p>
                        <p className="font-[400] text-[#4F4F4F] text-[14px]">
                          tetanus
                        </p>
                      </div>
                      <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                    </div>
                    <hr />
                    {/* The chart diagram */}
                    <GenericPie
                      colors={["#14A673", "#D1FF60"]}
                      series={[datainfo.tetanus.yes, datainfo.tetanus.no]}
                    />
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
                ) : null}
              </div>
            </div>
          </motion.div>
        </>
      ) : (
        <div className="flex flex-col gap-2 items-center w-full min-h-[400px] justify-center">
          <LoaderSmall />
          <p className="text-primary90 animate-pulse">Loading...</p>
        </div>
      )}
    </>
  );
};

export default IndicatorNavigatorScreen1;
