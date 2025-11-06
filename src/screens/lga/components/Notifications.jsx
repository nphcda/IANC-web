import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import { LiaCheckDoubleSolid } from 'react-icons/lia'

const Notifications = () => {
    return (
        <div>
            <div className='flex items-center justify-between px-2'>
                <div className='flex gap-2 items-center'>
                    <p className='text-[14px] font-[500]'>Notifications</p>
                    <select defaultValue="" className="p-[10px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[50px] border border-[#C6C7C880]">
                        <option value="">
                            All
                        </option>
                        <option value="national">National</option>
                        <option value="state">State</option>
                        <option value="lga">LGA</option>
                        <option value="healthFacility">Health Facility</option>
                    </select>
                </div>
                <div className='flex gap-1 items-center'>
                    <p>Mark all as read</p><span><BsCheckCircle /></span>
                </div>
            </div>
            <div className='p-2 mt-6'>
                {/* notification1 */}
                <div className='p-2 flex gap-3 items-center'>
                    <div>
                        <img src="/images/Avatar.png" className='min-w-[48px] min-h-[48px] rounded-full object-cover' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center justify-between'>
                            <p className='text-[18px] font-[600] text-secondary400'>Lex Murphy requested access to UNIX directory tree hierarchy  </p>
                        </div>
                        <div className='text-[14px] font-[400] text-[#6A707F]'>Hey! Chief, have you done with the design process? if yes, send me the link naw</div>
                        <div className='flex gap-2 items-center'>
                            <span className='text-secondary300'>02:00PM</span>
                        </div>
                        <hr className='mt-2' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications