import React from 'react'
import { IoMdInformationCircle } from 'react-icons/io'
import PieChart from '../charts/Piechart'
import ExpectedDelivery from '../charts/ExpectedDelivery'
import Hiv from '../charts/Hiv'

const IndicatorNavigatorScreen4 = () => {
    return (
        <div className='w-full'>
            <p className='text-primary90 font-[500] my-5'>Personal Information</p>
            {/* chart 1 */}
            <div className='grid grid-cols-2 gap-5'>
                {/* barchart graph */}
                <div className=' min-w-[250px] shadow-xl'>
                    <div className='flex items-center justify-between px-2'>
                        <div className='flex flex-col'>
                            <p className='font-[500] text-black'>Blood grouping </p>
                            <p className='font-[400] text-[#4F4F4F] text-[14px]'>Blood grouping</p>
                        </div>
                        <IoMdInformationCircle className='text-[#BDBDBD]' />

                    </div>
                    {/* The bar chart diagram */}
                    <ExpectedDelivery colors={["#F94144"]} series={[60, 100, 30, 200]} />
                    {/* info about chart */}
                    <div className='flex gap-7 px-2'>
                        <div className='flex gap-2 items-center'>
                            <div className='w-[5px] h-[5px] rounded-full bg-[#F94144]'></div>
                            <span>Product 1</span>
                        </div>
                    </div>
                </div>
                {/* HIV Screening graph */}
                <div className=' min-w-[250px] shadow-xl'>
                    <div className='flex items-center justify-between px-2'>
                        <div className='flex flex-col'>
                            <p className='font-[500] text-black'>HIV Screening</p>
                            <p className='font-[500] text-black'>5.987,34</p>
                            <p className='font-[400] text-[#4F4F4F] text-[14px]'>Hiv</p>
                        </div>
                        <IoMdInformationCircle className='text-[#BDBDBD]' />

                    </div>
                    {/* The bar chart diagram */}
                    <Hiv colors={["#F3722C", "#F94144"]} series={[60, 40]} />
                    {/* info about chart */}
                    <div className='flex gap-7 px-2'>
                        <div className='flex gap-2 items-center'>
                            <div className='w-[5px] h-[5px] rounded-full bg-[#F3722C]'></div>
                            <span>Product 1</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='w-[5px] h-[5px] rounded-full bg-[#F94144]'></div>
                            <span>Product 2</span>
                        </div>
                    </div>
                </div>
                {/* barchart graph */}
                <div className=' min-w-[250px] shadow-xl'>
                    <div className='flex items-center justify-between px-2'>
                        <div className='flex flex-col'>
                            <p className='font-[500] text-black'>Blood Genotype </p>
                            <p className='font-[400] text-[#4F4F4F] text-[14px]'>Blood Genotype</p>
                        </div>
                        <IoMdInformationCircle className='text-[#BDBDBD]' />

                    </div>
                    {/* The bar chart diagram */}
                    <ExpectedDelivery colors={["#F94144"]} series={[60, 100, 30, 200]} />
                    {/* info about chart */}
                    <div className='flex gap-7 px-2'>
                        <div className='flex gap-2 items-center'>
                            <div className='w-[5px] h-[5px] rounded-full bg-[#F94144]'></div>
                            <span>Product 1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndicatorNavigatorScreen4