import React, { useState } from "react"
import { HiArrowsUpDown } from "react-icons/hi2"
import ActiveUsers from "../components/ActiveUsers";
import Activitylog from "../components/Activitylog";
import { LuCalendarDays } from "react-icons/lu";
import { useEffect } from "react";
import axiosInstance from "../../../utils/axios";
import { useAuth } from "../hooks/useAuth";
import DatePicker from 'react-datepicker';
import { AiFillCalendar } from "react-icons/ai"

const UsageAnalytics = () => {
    const { lgaAuth } = useAuth()
    const { lga } = lgaAuth.others;
    const [navigatorSlide, setNavigatorSlide] = useState(1);
    const [sessions, setSessions] = useState()
    const [sessiongraphdata, setSessiongraphdata] = useState()
    const [startDate, setStartDate] = useState(new Date());
    const formattedStartDate = startDate.toISOString().split('T')[0];
    const [ward, setWard] = useState("all")
    const [indicatorsearchparam, setindicatorsearchparam] = useState({ query: "", state: "", lga: "" })
    let componentToRender;

    switch (navigatorSlide) {
        case 1:
            componentToRender = <Activitylog count={sessiongraphdata} />;
            break;
        case 2:
            componentToRender = <ActiveUsers data={sessions} />;
            break;
        default:
            componentToRender = null;
            break;
    }
    const [healthWorkers, setHealthWorkers] = useState(0)
    const [patients, setPatients] = useState(0)
    const [hfnumbers, setHfnumbers] = useState(0)

    const getAllSessions = async () => {
        try {
            const res = await axiosInstance.get(`/session/find/lga?start_date=${formattedStartDate}&lga=${lga}`);
            setSessions(res.data.result)
        } catch (err) {

        }
    }
    const getSessiongraph = async () => {
        try {
            const res = await axiosInstance.get(`/session/data/lga?lga=${lga}`);
            setSessiongraphdata(res.data.result)
        } catch (err) {

        }
    }

    const getAllHealthWorkers = async () => {
        try {
            const res = await axiosInstance.get('/users/find');
            const filtered = res.data.result.filter((item) => item.lga == lga)
            setHealthWorkers(filtered.length)
        } catch (err) {

        }
    }
    const getAllPatients = async () => {
        try {
            const res = await axiosInstance.get('/patients/find');
            const filtered = res.data.result.filter((item) => item.lga == lga)
            setPatients(filtered.length)
        } catch (err) {

        }
    }
    const getHealthfacilities = async () => {
        try {
            const res = await axiosInstance.get('/admin/healthfacility/find');
            const filtered = res.data.result.filter((item) => item.lga == lga)
            setHfnumbers(res.data.length)
        } catch (err) {

        }
    }

    useEffect(() => {
        getAllHealthWorkers()
        getAllPatients()
        getHealthfacilities()
        getAllSessions()
        getSessiongraph()
    }, [])
    useEffect(() => {
        getAllSessions()

    }, [startDate])
    return (
        <div>
            <div className='bg-primary10'>
                {/* dashboard */}
                <div className='flex w-full items-center justify-between px-3 py-3'>
                    <div className='flex gap-2 items-center p-2'>
                        <HiArrowsUpDown />
                        <p className='text-secondary400 text-[18px] font-[600]'>Usage Analytics</p>
                    </div>
                </div>
                {/* box indicators */}
                <div className='flex items-center justify-center gap-3 mt-5'>
                    {/* indicator1 */}
                    <div className='flex items-center px-4 bg-[#7A6EFE] gap-8 h-[100px] w-[200px] rounded-[20px]'>
                        <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                            <LuCalendarDays className='text-white' />
                        </div>
                        <div className='flex items-center flex-col text-white'>
                            <h2 className='text-[32px] font-[600]'>{patients}</h2>
                            <h2 className='text-[14px] font-[400]'>Patients</h2>
                        </div>
                    </div>
                    {/* indicator2 */}
                    <div className='flex items-center px-4 bg-[#FF5363] gap-8 h-[100px] w-[200px] rounded-[20px]'>
                        <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                            <LuCalendarDays className='text-white' />
                        </div>
                        <div className='flex flex-col items-center text-white'>
                            <h2 className='text-[32px] font-[600]'>{healthWorkers}</h2>
                            <h2 className='text-[14px] text-center font-[400]'>Health Workers</h2>
                        </div>
                    </div>
                    {/* indicator4 */}
                    <div className='flex items-center px-4 bg-[#22A9FA] gap-8 h-[100px] w-[200px] rounded-[20px]'>
                        <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                            <LuCalendarDays className='text-white' />
                        </div>
                        <div className='flex flex-col items-center text-white'>
                            <h2 className='text-[32px] font-[600]'>{hfnumbers}</h2>
                            <h2 className='text-[14px] font-[400]'>Health Facility</h2>
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center font-inter my-5'>
                    <div className='bg-white w-[95%] flex flex-col items-center justify-start pl-6 py-4'>
                        {/* navigator */}
                        <div className="flex items-center justify-between px-2 w-full mb-8">
                            <div className='flex items-center gap-4 w-full'>
                                <div onClick={() => setNavigatorSlide(1)} className={`cursor-pointer text-center ${navigatorSlide === 1 ? 'text-primary70 border-b-4 font-[500] pb-2 border-primary70' : "text-light90 pb-2 font-[500]"}`}>Activity Log</div>
                                <div onClick={() => setNavigatorSlide(2)} className={`cursor-pointer text-center ${navigatorSlide === 2 ? 'text-primary70 border-b-4 font-[500] pb-2 border-primary70' : "text-light90 pb-2 font-[500]"}`}>Active Users  </div>

                            </div>

                            <div className="z-50">
                                <div className="flex gap-2 cursor-pointer items-center text-white p-3 bg-[#842029] rounded-lg">
                                    <AiFillCalendar className="text-[24px]" />
                                    <DatePicker className="bg-[#842029]  outline-0 text-white"
                                        selected={startDate}
                                        shouldCloseOnSelect
                                        onChange={(date) => setStartDate(date)}
                                    />

                                </div>
                            </div>

                        </div>
                        {/* search box */}
                        <div className='w-full flex items-center justify-center my-5'>
                            <div className='bg-white min-w-[95%] pl-2 py-2 flex flex-row  items-center justify-center gap-6'>
                                {/* 3 */}
                                <div className='flex flex-col'>
                                    {/* <label className='text-primary90 font-[400]'>Ward</label> */}
                                    <select defaultValue="" onChange={(e) => setWard(e.target.value)} className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]">

                                        <option value={ward}>{"All wards"}</option>


                                    </select>

                                </div>
                            </div>
                        </div>
                        {componentToRender}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsageAnalytics;