import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'

const Patientdetailshome = () => {
    const location = useLocation()
    const { pathname } = location;
    return (
        <div>
            {/* <p className='font-[600] text-[20px]'>Records for 27th May 2023 9:45am</p> */}
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-3 gap-5'>
                <Link to={`${pathname}/personalinformation`} className='bg-primary10 rounded-[10px] min-h-[200px] flex flex-col gap-2 justify-center border-[#2FCF97] border-2 p-2'>
                    <AiOutlineArrowRight className="-rotate-45" />
                    <p className='font-[600] text-[20px]'>Personal Information</p>
                    <p className="text-[12px]">This section outlines the recommended treatments, therapies, or procedures for the patient's condition, including any ongoing or upcoming interventions.</p>
                </Link>
                <Link to={`${pathname}/schedule`} className='bg-[#F8FFE6] rounded-[10px] min-h-[200px] flex flex-col gap-2 justify-center border-[#C4FF34] border-2 p-2'>
                    <AiOutlineArrowRight className="-rotate-45" />
                    <p className='font-[600] text-[20px]'>Schedule</p>
                    <p className="text-[12px]">These are notes recorded by healthcare providers during each patient visit or encounter. They document the symptoms, examination findings, diagnoses, treatment provided, and any other relevant information..</p>
                </Link>
                <Link to={`${pathname}/firstvisit`} className='bg-[#F8FFE6] rounded-[10px] min-h-[200px] flex flex-col gap-2 justify-center border-[#C4FF34] border-2 p-2'>
                    <AiOutlineArrowRight className="-rotate-45" />
                    <p className='font-[600] text-[20px]'>First Visit</p>
                    <p className="text-[12px]">These are notes recorded by healthcare providers during each patient visit or encounter. They document the symptoms, examination findings, diagnoses, treatment provided, and any other relevant information.</p>
                </Link>
                <Link to={`${pathname}/returnvisit`} className='bg-primary10 rounded-[10px] min-h-[200px] flex flex-col gap-2 justify-center border-[#2FCF97] border-2 p-2'>
                    <AiOutlineArrowRight className="-rotate-45" />
                    <p className='font-[600] text-[20px]'>Return Visit</p>
                    <p className="text-[12px]">This section outlines the recommended treatments, therapies, or procedures for the patient's condition, including any ongoing or upcoming interventions.</p>
                </Link>
            </div>
        </div>
    )
}

export default Patientdetailshome