import React from "react";
import { IoMdInformationCircle } from "react-icons/io";
import GenericPie from "../charts/GenericPie";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";
import LoaderSmall from "../../../components/LoaderSmall";
import axiosInstance from "../../../utils/axios";
import { motion } from "framer-motion";

const IndicatorNavigatorScreen3 = ({ anc }) => {
  const { healthfacilityAuth } = useAuth();
  const { healthfacility, lga, state } = healthfacilityAuth.others;
  const [datainfo, setDatainfo] = useState();

  const getIndicatordata = async () => {
    try {
      const res = await axiosInstance.get(
        `/admin/healthfacility/data/general/return?healthfacility=${healthfacility}&anc=${anc}`
      );
      setDatainfo(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    getIndicatordata();
  }, []);
  return (
    <>
      <p className="text-primary90 m-3 text-center font-[500] text-[14px]">{`Showing ANC${anc} results for ${healthfacility} Health Facility in ${lga} Local Government Area in ${state} state...`}</p>
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
                Assessment of General Well-Being and Blood Pressure{" "}
              </p>
              {/* chart 1 */}
              <div className="grid grid-cols-2 gap-5">
                {/* fever */}
                <div className=" min-w-[250px] shadow-xl">
                  <div className="flex items-center justify-between px-2 py-4">
                    <div className="flex flex-col">
                      <p className="font-[500] text-black">Fever</p>
                      <p className="font-[400] text-[#4F4F4F] text-[14px]">
                        Rate
                      </p>
                    </div>
                    <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                  </div>
                  <hr />
                  {/* The pie chart diagram */}
                  <GenericPie
                    colors={["#14A673", "#D1FF60"]}
                    series={[datainfo.fever.yes, datainfo.fever.no]}
                  />
                  {/* info about chart */}
                  <div className="flex gap-7 px-2 py-4">
                    <div className="flex gap-2 items-center">
                      <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                      <span>Yes </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="w-[7px] h-[7px] rounded-full bg-[#D1FF60]"></div>
                      <span>No</span>
                    </div>
                  </div>
                </div>
                {/* Headache */}
                <div className=" min-w-[250px] shadow-xl">
                  <div className="flex items-center justify-between px-2 py-4">
                    <div className="flex flex-col">
                      <p className="font-[500] text-black">Headache</p>
                      <p className="font-[400] text-[#4F4F4F] text-[14px]">
                        Rate
                      </p>
                    </div>
                    <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
                  </div>
                  <hr />
                  {/* The pie chart diagram */}
                  <GenericPie
                    colors={["#14A673", "#D1FF60"]}
                    series={[datainfo.headache.yes, datainfo.headache.no]}
                  />
                  {/* info about chart */}
                  <div className="flex gap-7 px-2 py-4">
                    <div className="flex gap-2 items-center">
                      <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
                      <span>Yes </span>
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
                  <GenericPie
                    colors={["#14A673", "#D1FF60"]}
                    series={[
                      datainfo.difficultylyingflat.yes,
                      datainfo.difficultylyingflat.no,
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
                  <GenericPie
                    colors={["#14A673", "#D1FF60"]}
                    series={[datainfo.dizziness.yes, datainfo.dizziness.no]}
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
                {/* Neurologic */}
                <div className=" min-w-[250px] shadow-xl">
                  <div className="flex items-center justify-between px-2 py-4">
                    <div className="flex flex-col">
                      <p className="font-[500] text-black">Neurologic</p>
                      <p className="font-[400] text-[#4F4F4F] text-[14px]">
                        Convulsions
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
                  <GenericPie
                    colors={["#14A673", "#D1FF60"]}
                    series={[
                      datainfo.abdominalpain.yes,
                      datainfo.abdominalpain.no,
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
                  <GenericPie
                    colors={["#14A673", "#D1FF60"]}
                    series={[
                      datainfo.painwithurination.yes,
                      datainfo.painwithurination.no,
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
                  <GenericPie
                    colors={["#14A673", "#D1FF60"]}
                    series={[
                      datainfo.bloodinurine.yes,
                      datainfo.bloodinurine.no,
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
                  <GenericPie
                    colors={["#14A673", "#D1FF60"]}
                    series={[
                      datainfo.vaginaldischarge.yes,
                      datainfo.vaginaldischarge.no,
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
                  <GenericPie
                    colors={["#14A673", "#D1FF60"]}
                    series={[
                      datainfo.deeppelvicpain.yes,
                      datainfo.deeppelvicpain.no,
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
                  <GenericPie
                    colors={["#14A673", "#D1FF60"]}
                    series={[datainfo.syphilis.yes, datainfo.syphilis.no]}
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

export default IndicatorNavigatorScreen3;
