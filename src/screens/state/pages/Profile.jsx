import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import { useAuth } from '../../../utils/hooks/useAuth'

const Profile = () => {
    const { stateAuth } = useAuth()
    return (
        <div><div className='bg-primary10 min-w-[800px]'>
            {/* dashboard */}
            <div className='flex w-full items-center justify-between px-3 py-3'>
                <div className='flex gap-2 items-center p-2'>
                    <FaRegUser />
                    <p className='text-secondary400 text-[18px] font-[600]'>Profile</p>
                </div>

            </div>
            <div className='w-full flex items-center justify-center font-inter my-5'>
                <div className='bg-white w-[95%] flex flex-col px-2 py-4'>
                    <div className=' mt-6'>
                        <div className='grid grid-cols-2 mt-6 gap-6'>
                            <div className="flex flex-col">
                                <label className="text-[16px] font-[500] text-dark50">
                                    First Name<span className="ml-2 text-red-500">*</span>
                                </label>
                                <div className="p-[16px] text-[#959596] bg-transparent outline-none rounded-[8px] border border-[#959596]">{stateAuth?.others.staffname}</div>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[16px] font-[500] text-dark50">
                                    Cadre<span className="ml-2 text-red-500">*</span>
                                </label>
                                <div className="p-[16px] text-[#959596] bg-transparent outline-none rounded-[8px] border border-[#959596]">{stateAuth?.others.cadre}</div>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[16px] font-[500] text-dark50">
                                    User ID<span className="ml-2 text-red-500">*</span>
                                </label>
                                <div className="p-[16px] text-[#959596] bg-transparent outline-none rounded-[8px] border border-[#959596]">{stateAuth?.others.userid}</div>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[16px] font-[500] text-dark50">
                                    Phone<span className="ml-2 text-red-500">*</span>
                                </label>
                                <div className="p-[16px] text-[#959596] bg-transparent outline-none rounded-[8px] border border-[#959596]">{stateAuth?.others.phone}</div>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[16px] font-[500] text-dark50">
                                    Staff ID<span className="ml-2 text-red-500">*</span>
                                </label>
                                <div className="p-[16px] text-[#959596] bg-transparent outline-none rounded-[8px] border border-[#959596]">{stateAuth?.others.staffid}</div>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[16px] font-[500] text-dark50">
                                    State<span className="ml-2 text-red-500">*</span>
                                </label>
                                <div className="p-[16px] text-[#959596] bg-transparent outline-none rounded-[8px] border border-[#959596]">{stateAuth?.others.state}</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div></div>
    )
}

export default Profile