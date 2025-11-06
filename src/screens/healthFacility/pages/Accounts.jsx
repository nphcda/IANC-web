import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { HiOutlineUserPlus } from 'react-icons/hi2'
import UsersList from '../components/UsersList';

const Accounts = () => {
    const [navigatorSlide, setNavigatorSlide] = useState(1);
    let componentToRender;

    switch (navigatorSlide) {
        case 1:
            componentToRender = <UsersList />;
            break;
        default:
            componentToRender = null;
            break;
    }

    return (
        <div className=''>
            <div className='bg-primary10 min-w-[1000px] w-full'>
                {/* dashboard */}
                <div className='flex w-full items-center justify-between px-3 py-3'>
                    <div className='flex gap-2 items-center p-2'>
                        <HiOutlineUserPlus />
                        <p className='text-secondary400 text-[18px] font-[600]'>Accounts</p>
                    </div>

                </div>


                <div className='w-full flex items-center justify-center font-inter my-5'>
                    <div className='bg-white w-[90%] min-w-[1000px]  flex flex-col items-center justify-start px-3 py-4'>
                        {/* navigator */}
                        <div className='flex items-center justify-evenly w-full gap-4'>
                            <div onClick={() => setNavigatorSlide(1)} className={`cursor-pointer text-center ${navigatorSlide === 1 ? 'text-primary70 border-b-4 font-[500] pb-2 border-primary70' : "text-light90 pb-2 font-[500]"}`}>Health workers User Request List</div>
                        </div>


                        {componentToRender}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Accounts