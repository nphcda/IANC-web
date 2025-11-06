import React from 'react'
import { LiaCheckDoubleSolid } from "react-icons/lia"

const Chatboxitem = () => {
    return (
        <div className='p-2 flex gap-3 items-center'>
            <div>
                <img src="/images/Avatar.png" className='min-w-[48px] min-h-[48px] rounded-full object-cover' />
            </div>
            <div>
                <div className='flex items-center justify-between'>
                    <p className='text-[18px] font-[600] text-secondary400'>Usman Fori</p>
                    <div className='flex gap-2 items-center'>
                        <LiaCheckDoubleSolid className='text-primary90' />
                        <span className='text-secondary300'>02:00PM</span>
                    </div>
                </div>
                <div className='text-[14px] font-[400] text-[#6A707F]'>Hey! Chief, have you done with the design process? if yes, send me the link naw</div>
                <hr className='mt-2' />

            </div>
        </div>
    )
}

export default Chatboxitem