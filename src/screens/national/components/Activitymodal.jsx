import React from 'react'
import { useModal } from '../../../utils/hooks/useModal';

const Activitymodal = ({ data }) => {
    const { showModal, toggleModal } = useModal();

    return (
        <div className="w-screen h-screen fixed top-0 flex items-center z-[200] justify-center bg-[rgba(0,0,0,0.4)]">
            <div className="bg-white w-[80%] lg:w-[60%] h-[400px] overflow-y-auto rounded-md relative">
                <img src="/images/Logo.png" alt="logo" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10  saturate-0" />

                <div className='flex items-center justify-center'>
                    <div className='basis-1/2'>
                        <div className="w-[80px] h-[80px] flex items-center justify-center ml-auto ">
                            <img src="/images/Logo.png" alt="logo" className="max-w-full max-h-full" />
                        </div>

                    </div>
                    <div className='pl-auto px-3 basis-1/2'>
                        <p onClick={() => toggleModal()} className='bg-primary70 w-[100px] cursor-pointer ml-auto text-center text-white font-[500] font-mont py-2 px-4 rounded-md'>Close</p>

                    </div>
                </div>
                {/* details */}
                <div className='pl-[30px] p-3'>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <div className="w-[100px] h-[100px] flex items-center justify-center ml-auto ">
                                <img src="/images/happydoc.webp" alt="logo" className="max-w-full max-h-full" />
                            </div>
                            <div className='font-[500]'>
                                <p>ID: {data.id}</p>
                                <p>Name: {data.healthworker}</p>
                                <p>State: {data.state}</p>
                                <p>Ward: {data.ward}</p>

                            </div>
                        </div>
                        <div className='flex items-center gap-3 px-2'>
                            <div className='h-4 w-4 rounded-full bg-primary70'></div>
                            <p>Session started at {data.start_time
                            }</p>
                        </div>
                    </div>
                    <p className='text-primary90 text-[20px] my-3'>Activities for the day</p>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <p className='font-[500]'>First Visits:</p>
                            {data.session_data.firstvisit && data.session_data.firstvisit.length ?
                                (<ol className='list-decimal'>
                                    {data.session_data.firstvisit.map((item, index) => (
                                        <li key={index}>First Visit Record at {item.split(" ")[1]}</li>

                                    ))}
                                </ol>) : <p>No record</p>}

                        </div>
                        <div>
                            <p className='font-[500]'>Return Visits:</p>
                            {data.session_data.returnvisit && data.session_data.returnvisit.length ?
                                (<ol className='list-decimal'>
                                    {data.session_data.returnvisit.map((item, index) => (
                                        <li key={index}>Return Visit Record at {item.split(" ")[1]}</li>

                                    ))}
                                </ol>) : <p>No record</p>}

                        </div>
                        <p className='font-[500]'>Schedules:</p>
                        {data.session_data.schedule && data.session_data.schedule.length ?
                            (<ol className='list-decimal'>
                                {data.session_data.schedule.map((item, index) => (
                                    <li key={index}>Created a schedule at {item.split(" ")[1]}</li>

                                ))}
                            </ol>) : <p>No record</p>}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activitymodal