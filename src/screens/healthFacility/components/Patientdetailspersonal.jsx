import moment from 'moment'
import React from 'react'
import { AiOutlinePrinter } from 'react-icons/ai'
import { IoReturnUpBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const Patientdetailspersonal = ({ data }) => {
    const navigate = useNavigate()
    return (
        <div className='p-3'>
            <div className='flex gap-2 items-center justify-between px-2'>
                <div onClick={() => window.print()} className='flex gap-2 cursor-pointer items-center justify-center'>
                    <AiOutlinePrinter />
                    <span>Print Page</span>
                </div>
                <div className='text-white bg-primary90 text-[12px] font-[500] p-2 rounded-[10px]'>Download PDF</div>
            </div>
            <div onClick={() => navigate(-1)} className='flex cursor-pointer flex-1 items-center gap-2 my-8 font-[600] text-[24px] text-primary90'>
                <IoReturnUpBackOutline />
                <p>Personal Information</p>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-8'>
                {/* 1 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Hospital Number<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{data?.hospitalnumber}</p>
                    </div>
                    <div>
                        <label>First Name<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{data?.firstname.charAt(0).toUpperCase() + data?.firstname.slice(1)}</p>
                    </div>
                </div>
                {/* 2 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label >Middle Name<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{data?.middlename.charAt(0).toUpperCase() + data?.middlename.slice(1)}</p>
                    </div>
                    <div>
                        <label>SurName<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{data?.surname.charAt(0).toUpperCase() + data?.surname.slice(1)}</p>
                    </div>
                </div>
                {/* 3 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Address<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{data?.address}</p>
                    </div>
                </div>
                {/* 4 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Gravidity<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{data?.gravidity}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Parity<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{data?.parity}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>LMP<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{moment(data?.lmp).format("yyyy-MM-DD")}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>EDD<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{moment(data?.edd).format("yyyy-MM-DD")}</p>
                    </div>
                </div>
                {/* 5 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Do you feel the baby's movement?<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{data?.doyoufeelthebabysmovement}</p>
                    </div>
                </div>
                {/* 6 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Do you know the date of the first baby
                            movement?<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{data?.doyouknowdateoffirstbabymovement}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Patientdetailspersonal