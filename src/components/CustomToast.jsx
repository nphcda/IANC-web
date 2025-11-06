import React, { useEffect } from 'react'
import { BsFillPatchCheckFill } from "react-icons/bs"
import { GrFormClose } from "react-icons/gr"

const CustomToast = ({ toastmessage, onClose, status }) => {
    let toastcolor;

    if (status === "success") {
        toastcolor = "green";
    } else if (status === "warning") {
        toastcolor = "#d3d314e0";
    } else if (status === "error") {
        toastcolor = "#d82020";
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onClose();
        }, 7000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [onClose]);

    return (
        <div className='flex items-center justify-center sticky p-2 w-full z-[999] top-0'>
            <div className='bg-white relative drop-shadow-lg rounded-md w-[250px] flex items-center justify-center h-[80px]'>
                <div onClick={onClose} className='absolute top-0 cursor-pointer right-0 p-2'>
                    <GrFormClose />
                </div>
                <BsFillPatchCheckFill color={toastcolor} className='text-[25px] mr-3' />
                <p className='font-[400] text-[14px]'>{Object.values(toastmessage)}</p>
            </div>
        </div>
    );
};


export default CustomToast