import React, { useEffect, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { useAuth } from '../../../utils/hooks/useAuth'
import axiosInstance from '../../../utils/axios'
import { Link } from 'react-router-dom'

const DashboardNavbar = () => {
    const { lgaAuth, setLgaAuth } = useAuth();
    const { staffname } = lgaAuth?.others;
    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };


    return (
        <div className='h-[90px] flex items-center justify-between px-2 bg-white'>
            <div className='flex flex-col'>
                <h1 className='text-[22px] text-secondary400 font-[500]'>Welcome, {capitalizeFirstLetter(staffname)}</h1>
                <h2>Have a nice day at work</h2>
            </div>
            <img src="/images/3in1logo.svg" />
            <div className='flex flex-row gap-2 items-center'>
                {/* <Link to="/admin/message" className='relative'>
                    <HiOutlineChatBubbleOvalLeftEllipsis className='text-[20px]' />
                    <div className='bg-[red] w-2 h-2 rounded-full absolute -top-[2px] right-[1px]'></div>
                </Link>
                <Link to="/admin/notifications" className='relative'>
                    <IoMdNotificationsOutline className='text-[20px]' />
                    <div className='bg-[red] w-2 h-2 rounded-full absolute -top-[2px] right-[1px]'></div>
                </Link> */}
                <div className='rounded-full flex items-center text-[16px] font-[500] justify-center bg-[#842029] text-light10 w-[40px] h-[40px]'>
                    <span>{staffname.charAt(0).toUpperCase()}</span>
                </div>
                <h2 className='text-[12px] font-[500] text-[#000]'>{capitalizeFirstLetter(staffname)}</h2>
                <FiChevronDown />
            </div>
        </div>
    )
}

export default DashboardNavbar