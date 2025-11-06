import React, { useEffect, useState } from 'react'
import { AiOutlinePrinter } from 'react-icons/ai'
import { IoReturnUpBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../../utils/axios'
import Notfound from '../../../components/Notfound'
import moment from 'moment'

const Patientdetailschedule = ({ id }) => {
    const navigate = useNavigate()
    const [schedule, setschedule] = useState()


    const getschedule = async () => {
        try {
            const res = await axiosInstance.get(`/users/schedule/find/patient/all?patientid=${id}`)
            setschedule(res.data.result)
        } catch (error) {

        }
    }
    useEffect(() => {
        getschedule()
    }, [])
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
                <p>Schedule</p>

            </div>
            {schedule && schedule.length ?
                <div className='grid grid-cols-1 gap-5 mt-8'>
                    {/* 1 */}
                    {schedule.map((item, index) => (

                        <div key={index} className='flex gap-2 items-center justify-between'>
                            <div>
                                <label>SN<span className="ml-2 text-red-500">*</span></label>
                                <p className='text-secondary30 text-[14px]'>{index + 1}</p>
                            </div>
                            <div>
                                <label>Schedule From<span className="ml-2 text-red-500">*</span></label>
                                <p className='text-secondary30 text-[14px]'>{moment(item.datefrom).format('yyyy-MM-DD')}</p>
                            </div>
                            <div>
                                <label>Schedule To<span className="ml-2 text-red-500">*</span></label>
                                <p className='text-secondary30 text-[14px]'>{moment(item.dateto).format('yyyy-MM-DD')}</p>
                            </div>
                            <div className=''>
                                <label>Status<span className="ml-2 text-red-500">*</span></label>

                                {item.completed == 1 && <p className='text-white my-1 bg-green-500 p-2 rounded-lg font-[500] text-[14px]'>{"Completed"}</p>}
                                {item.missed == 1 && <p className='text-white bg-yellow-500 p-2 rounded-lg font-[500] text-[14px]'>{"Missed"}</p>}
                            </div>

                        </div>
                    ))
                    }

                </div> :
                <div>
                    <Notfound />
                </div>
            }
        </div>
    )
}

export default Patientdetailschedule