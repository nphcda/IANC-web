import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"
import { useAuth } from '../hooks/useAuth';
import axiosInstance, { axiosPrivate } from '../../../utils/axios';
import CustomToast from '../../../components/CustomToast';
import LoaderSmall from '../../../components/LoaderSmall';


const NationalResetPassword = () => {
    const { nationalAuth, setNationalAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const [toastmessage, setToastmessage] = useState("")
    const [toastStatus, setToastStatus] = useState("")
    const from = location.state?.from?.pathname || "/";
    const mobilenumber = location.state.key

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }


    const loadToast = (myMessage, status) => {
        scrollToTop();
        setToastmessage(myMessage)
        setShowToast(true);
        setToastStatus(status)
    }
    const handleToastClose = () => {
        setShowToast(false);
    };

    const screenSize = document.documentElement.clientWidth;

    const [values, setValues] = useState({ password1: "", password2: "" });
    const [passwordmatcherror, setPasswordmatcherror] = useState({ status: false, message: "" })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };
    const resetpassword = async () => {
        setIsLoading(true);
        try {
            const res = await axiosPrivate.post("/admin/national/resetpassword", {
                password: values.password1,
                phone: mobilenumber
            });
            if (res.data) {
                setIsLoading(false)
                loadToast("Password changed successfully", "success")
                setTimeout(() => {
                    navigate('/national/login')

                }, [2000])

            }


        } catch (err) {
            setIsLoading(false)

            loadToast("Something Went wrong", "error")

        }


    };
    const handleForm = async (e) => {
        e.preventDefault();
        if (values.password1 !== values.password2) {
            setPasswordmatcherror({ status: true, message: "passwords don't match" })
            loadToast("passwords don't match", "error")
        }
        else {
            resetpassword();

        }
    };

    return (
        <>
            {/* <ToastBox /> */}
            {showToast && (
                <CustomToast toastmessage={toastmessage} onClose={handleToastClose} status={toastStatus} />
            )}      <div className="flex flex-col h-screen font-popp">

                {/* Navbar */}
                <div className="flex flex-row w-full justify-start px-3 py-[28px]">
                    <Link to="/" className="flex flex-row items-center justify-center gap-[21px]">
                        <img src="/images/ED-(1).png" className="h-[30px] md:h-[40px]" />
                        <span className="text-[#027D52] font-popp text-[25px] md:text-[43.441px] font-[700]">
                            OptiCCS
                        </span>
                    </Link>
                </div>
                {/* form */}
                <div className="relative flex flex-1 ">
                    <motion.div initial={{
                        opacity: 0.5,
                    }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1.5,
                        }} className="absolute top-0 inset-0 bg-cover bg-[url('/images/Registration.png')]"></motion.div>
                    <div className="absolute top-0 inset-0">
                        <div className="flex flex-col items-center justify-center h-full">
                            <div className="flex flex-row gap-[9px]">
                                <p className="md:text-[64px] text-[35px] font-popp font-[600] tracking-[0.64px] text-light10">
                                    Welcome back
                                </p>
                                <img src="/images/handemoji.png" />
                            </div>
                            <div className="text-center text-[24px] font-popp font-[500] tracking-[0.24px] text-primary10">
                                Please enter details to Reset Password
                            </div>
                            <form onSubmit={handleForm} className="flex flex-col gap-4 mt-4">
                                <div className="flex flex-col">
                                    <label className="text-[16px] font-[500] text-[#fff]">
                                        Password<span className="ml-2 text-red-500">*</span>
                                    </label>
                                    <input name="password1" type='password' onChange={handleChange}
                                        className={`p-[16px] bg-transparent text-primary10 outline-none rounded-[8px] border ${passwordmatcherror.status ? "border-[red]" : "border-primary10"} `}
                                        placeholder="XXXX"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-[16px] font-[500] text-[#fff]">
                                        Confirm Password<span className="ml-2 text-red-500">*</span>
                                    </label>
                                    <input name="password2" type='password' onChange={handleChange}
                                        className={`p-[16px] bg-transparent text-primary10 outline-none rounded-[8px] border ${passwordmatcherror.status ? "border-[red]" : "border-primary10"} `}
                                        placeholder="XXXX"
                                    />
                                </div>
                                {!isLoading ? <button type='submit' className="text-primary90 font-[500] font-popp text-[16px] min-w-[380px] flex items-center justify-center rounded-[8px] bg-primary10 py-[16px]">
                                    Submit
                                </button> : <div className='min-w-[380px]'><LoaderSmall /></div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NationalResetPassword;
