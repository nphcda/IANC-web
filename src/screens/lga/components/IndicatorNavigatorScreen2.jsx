import React from 'react'
import { IoMdInformationCircle } from 'react-icons/io'
import PieChart from '../charts/Piechart'
import ExpectedDelivery from '../charts/ExpectedDelivery'

const IndicatorNavigatorScreen1 = () => {
    return (
        <div className='w-full'>
            <p className='text-primary90 font-[500] my-5'>Personal Information</p>
            {/* chart 1 */}
            <div className='grid grid-cols-2 gap-5'>
                {/* Pie chart (Gravidity) */}
                <div className=' min-w-[250px] shadow-xl'>
                    <div className='flex items-center justify-between px-2 py-4'>
                        <div className='flex flex-col'>
                            <p className='font-[500] text-black'>Gravidity</p>
                            <p className='font-[400] text-[#4F4F4F] text-[14px]'>Rate</p>
                        </div>
                        <IoMdInformationCircle className='text-[#BDBDBD] text-[25px]' />

                    </div>
                    <hr />
                    {/* The pie chart diagram */}
                    <PieChart
                        title="Win Probability"
                        colors={["#14A673", "#D1FF60"]}
                    />
                    {/* info about chart */}
                    <div className='flex gap-7 px-2 py-4'>
                        <div className='flex gap-2 items-center'>
                            <div className='w-[7px] h-[7px] rounded-full bg-primary70'></div>
                            <span>1 - 7</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='w-[7px] h-[7px] rounded-full bg-[#D1FF60]'></div>
                            <span>Above 8</span>
                        </div>
                    </div>
                </div>
                {/* barchart graph */}
                <div className=' min-w-[250px] shadow-xl'>
                    <div className='flex items-center justify-between px-2'>
                        <div className='flex flex-col'>
                            <p className='font-[500] text-black'>Expected  Delivery </p>
                            <p className='font-[400] text-[#4F4F4F] text-[14px]'>Number of EDD</p>
                        </div>
                        <IoMdInformationCircle className='text-[#BDBDBD]' />

                    </div>
                    {/* The bar chart diagram */}
                    <ExpectedDelivery />
                    {/* info about chart */}
                    <div className='flex gap-7 px-2'>
                        <div className='flex gap-2 items-center'>
                            <div className='w-[5px] h-[5px] rounded-full bg-primary70'></div>
                            <span>Product 1</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='w-[5px] h-[5px] rounded-full bg-[#D1FF60]'></div>
                            <span>Product 2</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndicatorNavigatorScreen1