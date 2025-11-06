import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import DashboardHome from "./pages/DashboardHome";
import DashboardMenu from "./components/DashboardMenu";
import DashboardNavbar from "./components/DashboardNavbar";
import DashboardIndicators from "./pages/DashboardIndicators";
import Patients from "./pages/Patients";
import PatientsSchedule from "./pages/PatientsSchedule";
import HealthWorker from "./pages/HealthWorker";
import HealthFacility from "./pages/HealthFacility";
import State from "./pages/State";
import LGA from "./pages/LGA";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import LoadPage from "../LoadPage";
import Accounts from "./pages/Accounts";
import Notifications from "./components/Notifications";
import useLogout from "./hooks/useLogout";
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill, BsFillArrowUpCircleFill } from "react-icons/bs";
import { motion } from "framer-motion"
import Patientview from "./components/Patientview";
import UsageAnalytics from "./pages/UsageAnalytics";
import { useModal } from "../../utils/hooks/useModal";
import Activitymodal from "../../components/Activitymodal";



const HealthFacilityApp = () => {
    const { showModal, toggleModal, modaldata } = useModal();

    const [loaderFinished, setLoaderFinished] = useState(false);
    const [showmenu, setShowmenu] = useState(true)
    const logoutUser = useLogout()
    const [confirmlogout, setconfirmlogout] = useState(false)
    const finished = () => {
        setLoaderFinished(true);
    }
    const logout = () => {
        logoutUser();
    }
    return (
        <>
            {confirmlogout && <div className='top-0 left-0 h-screen w-screen fixed z-[777] bg-[rgba(0,0,0,0.3)] flex items-center justify-center'>
                <motion.div initial={{
                    opacity: 0,
                }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                    }} className='w-[90%] md:w-[70%] lg:w-[50%] min-h-[200px] flex flex-col items-center justify-center rounded-lg bg-white shadow-md'>
                    <div className="flex w-full items-center justify-center">
                        <div className="w-[80px] h-[80px] flex items-center justify-center">
                            <img src="/images/Logo.png" alt="logo" className="max-w-full max-h-full" />
                        </div>
                    </div>
                    <div className="">
                        <p className="text-[18px]">Are you sure you want to logout?</p>
                        <div className="flex gap-6 mt-4">
                            <button onClick={() => setconfirmlogout(false)} className='border border-[#5a5b5c] min-w-[100px] text-[#5a5b5c] p-2 font-[500]'>Exit</button>
                            <button onClick={logout} className='text-white bg-primary70 min-w-[100px] p-2 font-[500]'>Confirm</button>
                        </div>

                    </div>
                </motion.div>
            </div>}
            {!loaderFinished ? <LoadPage loaderFinished={finished} /> :
                <div className={`flex w-full ${confirmlogout && "overflow-hidden"} relative`}>
                    <div className="absolute w-screen z-50">
                        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed right-8 bottom-8 cursor-pointer animate-bounce">
                            <BsFillArrowUpCircleFill className="text-[#F3722C] text-[30px]" />
                        </div>
                    </div>
                    <div id="menu" className={`${showmenu ? "w-[250px] min-w-[250px]" : "w-0"} transition-all ease-in-out custom-scrollbar adminmenu overflow-y-scroll`}>
                        <DashboardMenu confirmlogout={confirmlogout} setconfirmlogout={setconfirmlogout} />
                    </div>
                    <div id="page" className="flex-[4] bg-[#f8f9fa]">
                        <DashboardNavbar />
                        <div className="relative">
                            <div className="absolute z-50 top-0 left-0">
                                {showmenu ? <BsFillArrowLeftSquareFill onClick={() => setShowmenu(false)} className="text-[#F3722C] cursor-pointer text-[20px] " /> :
                                    <BsFillArrowRightSquareFill onClick={() => setShowmenu(true)} className="text-[#F3722C] cursor-pointer text-[20px]" />}
                            </div>
                            <Routes>
                                <Route index path="/" element={<DashboardHome />}></Route>
                                <Route index path="/indicators" element={<DashboardIndicators />}></Route>
                                <Route index path="/patients" element={<Patients />}></Route>
                                <Route index path="/patients/:id/*" element={<Patientview />}></Route>
                                <Route index path="/schedule" element={<PatientsSchedule />}></Route>
                                <Route index path="/health-worker" element={<HealthWorker />}></Route>
                                <Route index path="/health-facility" element={<HealthFacility />}></Route>
                                <Route index path="/state" element={<State />}></Route>
                                <Route index path="/lga" element={<LGA />}></Route>
                                <Route index path="/accounts" element={<Accounts />}></Route>
                                <Route index path="/usage" element={<UsageAnalytics />}></Route>
                                <Route index path="/settings" element={<Settings />}></Route>
                                <Route index path="/profile" element={<Profile />}></Route>
                                <Route index path="/notifications" element={<Notifications />}></Route>
                            </Routes>
                        </div>
                    </div>
                    {showModal && <Activitymodal data={modaldata} />}

                </div>
            }
        </>
    );
};

export default HealthFacilityApp;
