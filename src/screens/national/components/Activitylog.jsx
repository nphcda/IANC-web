import React from "react"
import Activitychart from "../charts/Activitychart"
import { BsFillInfoCircleFill } from "react-icons/bs"


const Activitylog = ({ count, param }) => {
    return (
        <>
            {param.query == "national" && <p className="text-primary90 m-3 text-center font-[500] text-[14px]">Showing results for National...</p>}
            {param.query == "" && <p className="text-primary90 m-3 text-center font-[500] text-[14px]">Showing results for National...</p>}
            {param.query == "state" && <p className="text-primary90 m-3 text-center font-[500] text-[14px]">{`Showing results for ${param.state} state...`}</p>}
            {param.query == "lga" && <p className="text-primary90 m-3 text-center font-[500] text-[14px]">{`Showing results for ${param.lga} Local Government Area in ${param.state} state...`}</p>}
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
        </>
    )
}

export default Activitylog