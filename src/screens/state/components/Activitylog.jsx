import React from "react"
import Activitychart from "../charts/Activitychart"
import { BsFillInfoCircleFill } from "react-icons/bs"


const Activitylog = ({ count }) => {
    return (
        <div>
            <div className="shadow-2xl bg-white w-[600px]">
                <div className="pt-[25px] px-[25px]">
                    <div className="flex justify-between">
                        <p className="text-black font-inter font-[500] tet-[20px]">Activity Chart</p>
                        <BsFillInfoCircleFill className="text-[#BDBDBD] text-[22px]" />
                    </div>

                </div>
                <Activitychart series={count} />

            </div>
        </div>
    )
}

export default Activitylog