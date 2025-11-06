import React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const FilterBox = () => {
    return (
        <div className='w-full flex items-center justify-center my-5'>
            <div className='bg-white w-[95%] py-2 flex flex-row items-center justify-around gap-3'>
                {/* 1 */}
                <div className='flex flex-col'>
                    <label className='text-primary90 font-[400]'>Filter</label>
                    <select defaultValue="" className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]">
                        <option value="">
                            General
                        </option>
                        <option value="national">National</option>
                        <option value="state">State</option>
                        <option value="lga">LGA</option>
                        <option value="healthFacility">Health Facility</option>
                    </select>

                </div>
                {/* 2 */}
                <div className='flex flex-col'>
                    <label className='text-primary90 font-[400]'>Type</label>
                    <select defaultValue="" className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]">
                        <option value="" disabled >
                            General
                        </option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>

                </div>
                {/* 3 */}
                <div className='flex flex-col'>
                    <label className='text-primary90 font-[400]'>Date From</label>
                    <select defaultValue="" className="p-[16px] myselect text-secondary30 bg-transparent outline-none min-w-[180px] rounded-[8px] border border-[#C6C7C880]">
                        <option value="" disabled >
                            Date From
                        </option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>

                </div>
                {/* 4 */}
                <div className='flex flex-col'>
                    <label className='text-primary90 font-[400]'>Date To</label>
                    <select defaultValue="" className="p-[16px] myselect text-secondary30 bg-transparent outline-none min-w-[180px] rounded-[8px] border border-[#C6C7C880]">
                        <option value="" disabled >
                            Date To
                        </option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>

                </div>
            </div>
        </div>
    )
}

export default FilterBox