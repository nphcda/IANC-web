import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2'
import Chatboxitem from '../components/Chatboxitem'

const Messages = () => {
    const array = [1, 2, 3, 4]
    return (
        <div>
            <div className='bg-primary10 pb-8 p-2'>
                {/* dashboard */}
                <div className='flex w-full items-center justify-between px-3 py-3'>
                    <div className='flex gap-2 items-center p-2'>
                        <HiOutlineChatBubbleOvalLeftEllipsis />
                        <p className='text-secondary400 text-[18px] font-[600]'>Messages</p>
                    </div>
                </div>
                <div className='flex flex-row gap-6 mt-2 w-full'>
                    <div className=''>
                        <div className='flex gap-2 my-8'>
                            <input className='outline-0 bg-transparent text-[14px] font-[400] rounded-[8px] border-secondary30 border p-2' placeholder="LGA Name or LGA ID" />
                            <button className="bg-primary90 p-2 text-light10 rounded-[8px]">Search</button>
                        </div>
                        {/* message chats */}
                        <div className='bg-white min-w-[320px] max-w-[320px]'>
                            <Chatboxitem />
                            <Chatboxitem />
                            <Chatboxitem />
                        </div>
                    </div>
                    {/* chat box */}
                    <div className=' flex-[3] min-w-[400px] p-2 bg-white'>
                        {/* header */}
                        <div className='flex items-center justify-between p-3 bg-primary70'>
                            <div className='flex gap-2 items-center'>
                                <img src="/images/Avatar.png" className='min-w-[32px] min-h-[32px] rounded-full object-cover' />
                                <p className='text-[12px] text-white font-[500]'>Muhammed Salisu</p>
                            </div>
                            <HiOutlineChatBubbleOvalLeftEllipsis className=' text-white' />
                        </div>
                        {/* chat area */}
                        <p className='text-center mt-6 text-[#666668]'>8/20/2020</p>
                        <div className='mt-auto'>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Messages