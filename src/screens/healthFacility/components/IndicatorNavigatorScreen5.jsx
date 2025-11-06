import React, { useEffect, useState } from 'react'
import { IoMdInformationCircle } from 'react-icons/io'
import axiosInstance from '../../../utils/axios'
import { useAuth } from '../hooks/useAuth'
import GenericPie from '../charts/GenericPie'

const IndicatorNavigatorScreen5 = () => {
    const [schedule, setschedule] = useState()
    const { healthfacilityAuth } = useAuth()
    const { healthfacility, lga, state } = healthfacilityAuth.others;


    const getallschedule = async () => {
        try {
            const res = await axiosInstance.get(`/admin/healthfacility/data/schedule?healthfacility=${healthfacility}`)
            setschedule(res.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        getallschedule()
    }, [])
    return (
        <div>
            <p className="text-primary90 m-3 text-center font-[500] text-[14px]">{`Showing results for ${healthfacility} Health Facility in ${lga} Local Government Area in ${state} state...`}</p>
            {/* chart 1 */}
            <div className='grid mt-9'>
                {/* Pie chart (Gravidity) */}
                <div className=' min-w-[250px] shadow-xl'>
                    <div className='flex items-center justify-between px-2 py-4'>
                        <div className='flex flex-col'>
                            <p className='font-[500] text-black'>Antenatal Schdules</p>
                            <p className='font-[500] text-[#4F4F4F] text-[14px]'>{schedule?.number}</p>
                        </div>
                        <IoMdInformationCircle className='text-[#BDBDBD] text-[25px]' />

                    </div>
                    <hr />
                    {/* The pie chart diagram */}
                    <GenericPie
                        series={[schedule?.completed, schedule?.missed]}
                        colors={["#14A673", "#F3722C"]}
                    />
                    {/* info about chart */}
                    <div className='flex gap-7 px-2 py-4'>
                        <div className='flex gap-2 items-center'>
                            <div className='w-[7px] h-[7px] rounded-full bg-primary70'></div>
                            <span>Attended</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='w-[7px] h-[7px] rounded-full bg-[#F3722C]'></div>
                            <span>Miss Appointment</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndicatorNavigatorScreen5