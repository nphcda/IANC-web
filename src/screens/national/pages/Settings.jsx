import React, { useState } from 'react'
import { FiSettings } from 'react-icons/fi'
import { axiosPrivate } from '../../../utils/axios'
import LoaderSmall from '../../../components/LoaderSmall'

const Settings = () => {
    const [loading, setLoading] = useState(false)
    const [oldpassword, setOldpassword] = useState("")
    const [newpassword, setNewpassword] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const res = await axiosPrivate.post("/admin/national/changepassword", {
                oldpassword, newpassword
            })
            alert("Password has been changed")
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }
    return (
        <div>
            <div className='bg-primary10 min-w-[1000px]'>
                {/* dashboard */}
                <div className='flex w-full items-center justify-between px-3 py-3'>
                    <div className='flex gap-2 items-center p-2'>
                        <FiSettings />
                        <p className='text-secondary400 text-[18px] font-[600]'>Settings</p>
                    </div>

                </div>
                <div className='w-full flex items-center justify-center font-inter my-5'>
                    <div className='bg-white w-[95%] flex flex-col pl-6 py-4'>
                        <div className=' mt-6 max-w-[380px]'>
                            <p className='font-[600] text-[32px] text-secondary400'>Reset Password</p>
                            <p className='font-[400] text-[13px] text-secondary400'>Change your password </p>
                            <form onSubmit={handleSubmit}>
                                <div className='flex flex-col mt-6 gap-6'>
                                    <div className="flex flex-col">
                                        <label className="text-[16px] font-[500] text-dark50">
                                            Old password<span className="ml-2 text-red-500">*</span>
                                        </label>
                                        <input type='text' onChange={(e) => setOldpassword(e.target.value)}
                                            className="p-[16px] text-[#959596] bg-transparent outline-none rounded-[8px] border border-[#959596]"
                                            placeholder="Enter Password" required
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-[16px] font-[500] text-dark50">
                                            New Password<span className="ml-2 text-red-500">*</span>
                                        </label>
                                        <input type='text' onChange={(e) => setNewpassword(e.target.value)}
                                            className="p-[16px] text-[#959596] bg-transparent outline-none rounded-[8px] border border-[#959596]"
                                            placeholder="Enter Password" required
                                        />
                                    </div>
                                    {!loading ? <button type='submit' className="bg-primary90 font-[500] font-popp text-[16px] max-w-[380px] flex items-center justify-center rounded-[100px] text-primary10 py-[16px]">
                                        Continue
                                    </button> : <LoaderSmall />}

                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Settings