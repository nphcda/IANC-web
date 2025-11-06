import React, { useState } from 'react';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import axiosInstance, { axiosPrivate } from '../utils/axios';
import ToastBox from '../utils/ToastBox';
import { showError, showSuccess } from '../utils/Toastmessage';
import CustomToast from '../components/CustomToast';
import LoaderSmall from '../components/LoaderSmall';

const Registration = () => {
  const [showToast, setShowToast] = useState(false)
  const [toastmessage, setToastmessage] = useState("")
  const [toastStatus, setToastStatus] = useState("")
  const [isLoading, setIsloading] = useState(false)
  const [values1, setValues1] = useState({ email: "", phone: "" });
  const [values2, setValues2] = useState({ firstname: "", lastname: "", accountType: "", staffid: "", password: "" });
  const [otp, setOtp] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const [stage1, setStage1] = useState(true)
  const [stage2, setStage2] = useState(false)
  const [stage3, setStage3] = useState(false)
  const [stage4, setStage4] = useState(false)
  const [valuesPasswordmatch, setValuesPasswordmatch] = useState(false)
  const [otpCode, setOtpCode] = useState("")
  const [otpRef, setOtpRef] = useState("")
  const [emailError, setEmailError] = useState({ status: false, message: "" })
  const [accountTypeError, setAccountTypeError] = useState({ status: false, message: "" })
  const [phoneError, setPhoneError] = useState({ status: false, message: "" })
  const [firstnameError, setFirstnameError] = useState({ status: false, message: "" })
  const [lastnameError, setLastnameError] = useState({ status: false, message: "" })
  const [staffidError, setStaffidError] = useState({ status: false, message: "" })
  const [passwordError, setPasswordError] = useState({ status: false, message: "" })
  const [confirmpasswordError, setConfirmpasswordError] = useState({ status: false, message: "" })

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const loadToast = (myMessage, status) => {
    scrollToTop()
    setToastmessage(myMessage)
    setShowToast(true);
    setToastStatus(status)
  }
  const handleToastClose = () => {
    setShowToast(false);
  };
  const checkpasswordmatch = (e) => {
    let noErrors = true;
    setConfirmpassword(e.target.value)
    if (values2.password !== e.target.value) {
      setConfirmpasswordError({ status: true, message: "Passwords don't match" })
      noErrors = false
    } else {
      setConfirmpasswordError({ status: false, message: "" })
      noErrors = true
    }
    setValuesPasswordmatch(noErrors)
    return noErrors;
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    name == 'email' && setEmailError({ status: false, message: "" });
    name == "phone" && setPhoneError({ status: false, message: "" });
    setValues1({ ...values1, [name]: value });
  };
  const handleChange2 = (event) => {
    const { name, value } = event.target;
    name == "password" && setPasswordError({ status: false, message: "" })
    name == "firstname" && setFirstnameError({ status: false, message: "" })
    name == "lastname" && setLastnameError({ status: false, message: "" })
    name == "staffid" && setStaffidError({ status: false, message: "" })
    name == "accountType" && setAccountTypeError({ status: false, message: "" })
    setValues2({ ...values2, [name]: value });
  };
  const validateValues1 = () => {
    let noErrors = true;

    if (values1.email === "") {
      setEmailError({ status: true, message: "This field is required" });
      noErrors = false;
    }

    if (values1.phone === "") {
      setPhoneError({ status: true, message: "This field is required" });
      noErrors = false;
    }

    return noErrors;
  };
  const validateValues2 = () => {
    let noErrors = true;

    if (values2.firstname === "") {
      setFirstnameError({ status: true, message: "This field is required" });
      noErrors = false;
    }

    if (values2.lastname === "") {
      setLastnameError({ status: true, message: "This field is required" });
      noErrors = false;
    }

    if (values2.accountType === "") {
      setAccountTypeError({ status: true, message: "This field is required" });
      noErrors = false;
    }
    if (values2.staffid === "") {
      setStaffidError({ status: true, message: "This field is required" });
      noErrors = false;
    }
    if (values2.password === "") {
      setPasswordError({ status: true, message: "This field is required" });
      noErrors = false;
    }
    if (confirmPassword === "") {
      setConfirmpasswordError({ status: true, message: "This field is required" });
      noErrors = false;
    }
    if (!valuesPasswordmatch) {
      noErrors = false;
    }


    return noErrors;
  };

  const sendOtp = async () => {
    try {
      const res = await axiosInstance.post("/admin/auth/sendOtp", {
        mobile_number: values1.phone
      })
      setOtpCode(res.data.data.token)
      setOtpRef(res.data.data.reference)
      return res;
    } catch (err) {
    }
  }
  const confirmOtp = async () => {
    try {
      const res = await axiosInstance.post("/admin/auth/confirmOtp", {
        verification_reference: otpRef,
        verification_code: otpCode
      })
      return res;
    } catch (err) {

    }
  }
  const register = async () => {
    const res = await axiosPrivate.post("/admin/auth/signup", {
      email: values1.email,
      password: values2.password,
      accountType: values1.accountType,
      phone: values1.phone,
      firstname: values2.firstname,
      lastname: values2.lastname,
      staffid: values2.staffid
    });
    return res.data;

  };

  const completeStage1 = (e) => {
    e.preventDefault()
    const validationStatus = validateValues1()
    if (validationStatus) {
      setStage1(false);
      setStage2(true)

    }
  }
  const completeStage2 = async (e) => {
    e.preventDefault()
    const validationStatus = validateValues2()
    if (validationStatus) {
      setStage2(false);
      setStage3(true)
      //send otp
      const otprequest = await sendOtp()
      if (otprequest?.data?.status !== "success") {
        loadToast("Code not sent, try again", "warning")
        setStage2(true)
      }
    }
  }
  const completeStage3 = () => {
    setStage3(false)
    setStage4(true)
  }
  const backToStage1 = () => {
    setStage2(false)
    setStage1(true)
  }
  const registerUser = async (e) => {
    e.preventDefault()
    setIsloading(true)
    try {
      const confirm = await confirmOtp()
      if (confirm?.data.status === "failed") {
        loadToast("The OTP Code has Expired", "error")
        setIsloading(false)
        setStage1(true)
      }
      if (confirm?.data.status === "success") {
        const request = await register();
        if (request) {
          setIsloading(false)
          loadToast("Registration Successful", "success")
          completeStage3()
        }
      }
    } catch (err) {
      setIsloading(false)
      loadToast("Registration Failed", "error")
    }
    setIsloading(false)
  }
  const handleOtp = (e) => {
    setOtp(e.target.value)
  }

  const handleEmailBlur = () => {
    if (values1.email === '') {
      setEmailError({ status: true, message: 'This field is required' });
    }
  };
  const handlePhoneBlur = () => {
    if (values1.phone === '') {
      setPhoneError({ status: true, message: 'This field is required' });
    }
  };
  const handleAccountBlur = () => {
    if (values1.accountType === '') {
      setAccountTypeError({ status: true, message: 'This field is required' });
    }
  };
  const handleFirstnameBlur = () => {
    if (values2.firstname === '') {
      setFirstnameError({ status: true, message: 'This field is required' });
    }
  };
  const handleLastnameBlur = () => {
    if (values2.lastname === '') {
      setLastnameError({ status: true, message: 'This field is required' });
    }
  };
  const handleStaffidBlur = () => {
    if (values2.staffid === '') {
      setStaffidError({ status: true, message: 'This field is required' });
    }
  };
  const handlePasswordBlur = () => {
    if (values2.password === '') {
      setPasswordError({ status: true, message: 'This field is required' });
    }
  };
  const LoginButton = () => (
    <Link to="/user/login" className="px-[20px] py-[10px] md:px-[26px] md:py-[16px] ml-auto text-light10 text-[16px] font-popp font-[500] tracking-[0.16px] bg-primary90 rounded-[8px] border border-primary70">
      <p>Login</p>
    </Link>
  )
  return (
    <>
      {showToast && (
        <CustomToast toastmessage={toastmessage} onClose={handleToastClose} status={toastStatus} />
      )}
      {stage1 ?
        <div className="flex flex-col min-h-screen font-popp">
          {/* Navbar */}
          <div className="flex flex-row w-full justify-center px-3 py-[28px]">
            <div className="flex flex-row items-center justify-center gap-2 md:gap-[21px]">
              <img src="/images/ED-(1).png" className=" h-[30px] md:h-[40px]" />
              <span className="text-[#027D52] font-popp text-[25px] md:text-[43.441px] font-[700]">
                OptiCCS
              </span>
            </div>
            {/* login button */}
            <LoginButton />
          </div>
          {/* form */}
          <div className="relative p-5 flex flex-1 items-center justify-center ">
            <div className="absolute top-0 h-full inset-0 bg-cover bg-[url('/images/Registration.png')]"></div>
            {/* <div className="absolute top-0 h-full inset-0 gradientbg opacity-20"></div> */}
            <div className="h-full w-full z-[20] my-5 flex flex-col items-center justify-center">
              <div className="bg-white py-9 rounded-2xl md:rounded-[30px] w-[90%] md:w-[65%] flex items-center justify-center">
                <div className=" w-[90%]">
                  <div className="flex items-center justify-center"><img src="/images/ProgressBar.png" /></div>
                  <div className="flex flex-row items-center justify-center my-4">
                    <p className="md:text-[56px] text-[40px] font-popp font-[500] tracking-[0.64px] text-secondary400">
                      Registration
                    </p>
                  </div>
                  <div className="text-center text-[14px] font-popp font-[500] tracking-[0.14px] text-secondary300">
                    Please enter email and select account type to proceed
                  </div>
                  <form onSubmit={completeStage1} className="flex flex-col gap-4 mt-4">
                    <div className="flex flex-col">
                      <div className='flex gap-3 items-center'>
                        <label className="text-[16px] font-[500] text-dark90">
                          Email address<span className="ml-2 text-red-500">*</span>
                        </label>
                        {emailError.status && <span className='text-[12px] font-[500] italic text-red-500'>{emailError.message}</span>}
                      </div>
                      <input onBlur={handleEmailBlur} onChange={handleChange} name='email' type="email"
                        className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-primary10"
                        placeholder="Enter your email address"
                      />
                    </div>
                    {/* <div className="flex flex-col">
                      <div className='flex gap-3 items-center'>
                        <label className="text-[16px] font-[500] text-dark90">
                          Account Type<span className="ml-2 text-red-500">*</span>
                        </label>
                        {accountTypeError.status && <span className='text-[12px] font-[500] italic text-red-500'>{accountTypeError.message}</span>}
                      </div>
                      <select onBlur={handleAccountBlur} onChange={handleChange} name='accountType' defaultValue="" className="p-[16px] myselect  text-secondary30 bg-transparent outline-none rounded-[8px] border-0 ">
                        <option value="" disabled >
                          Choose a value
                        </option>
                        <option className=' ' value="State">State</option>
                        <option value="LGA">LGA</option>
                        <option value="National">National</option>
                        <option value="HealthFacility">Health Facility</option>
                      </select>
                    </div> */}
                    <div className="flex flex-col">
                      <div className='flex gap-3 items-center'>
                        <label className="text-[16px] font-[500] text-dark90">
                          Phone Number<span className="ml-2 text-red-500">*</span>
                        </label>
                        {phoneError.status && <span className='text-[12px] font-[500] italic text-red-500'>{phoneError.message}</span>}
                      </div>
                      <input onBlur={handlePhoneBlur} onChange={handleChange} name='phone' type='number'
                        className="p-[16px] bg-transparent text-secondary30 outline-none rounded-[8px] border border-primary10"
                        placeholder="2344321112245"
                      />
                    </div>
                    <button type='submit' className="text-[#fff] font-[500] font-popp text-[16px] flex items-center justify-center rounded-[8px] registerbtngrad">
                      Continue
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> : stage2 ? <div className="flex flex-col min-h-screen  font-popp">
          {/* Navbar */}
          <div className="flex flex-row w-full justify-center px-3 py-[28px]">
            <div className="flex flex-row items-center justify-center gap-[21px]">
              <img src="/images/ED-(1).png" className="h-[30px] md:h-[40px]" />
              <span className="text-[#027D52] font-popp text-[25px] md:text-[43.441px] font-[700]">
                OptiCCS
              </span>
            </div>
            {/* login button */}
            <LoginButton />
          </div>
          {/* form */}
          <div className="relative p-5 flex ">
            <div className="absolute h-full top-0 inset-0 bg-cover  bg-[url('/images/Registration.png')]"></div>
            <div className="absolute h-full top-0 inset-0 gradientbg opacity-20"></div>
            <div className="h-full w-full z-[20] my-5 flex flex-col items-center justify-center">
              <motion.div initial={{
                opacity: 0,
              }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1.5,
                }} className="bg-white py-9 rounded-2xl md:rounded-[30px] w-[90%] md:w-[65%] flex items-center justify-center">
                <div className=" w-[90%]">
                  <div className="flex items-center justify-center p-2 mb-8"><img src="/images/ProgressBar2.png" /></div>
                  <div className="flex flex-col my-2 items-center justify-center">
                    <div className="flex flex-row gap-[9px] mt-3">
                      <p className="text-[18px] font-popp font-[500] tracking-[0.64px] text-secondary400">
                        Account Verification
                      </p>
                    </div>
                    <div className="text-center mt-2 text-[14px] font-popp font-[500] tracking-[0.14px] text-secondary300 w-[300px]">
                      Please enter your mobile number, then we will send you an OTP to verify
                    </div>

                  </div>
                  <form onSubmit={completeStage2} className="grid grid-cols-1 p-3 md:grid-cols-2 gap-4 mt-4">
                    <div className="flex flex-col">
                      <div className='flex gap-3 items-center'>
                        <label className="text-[16px] font-[500] text-dark90">
                          First Name<span className="ml-2 text-red-500">*</span>
                        </label>
                        {firstnameError.status && <span className='text-[12px] font-[500] italic text-red-500'>{firstnameError.message}</span>}
                      </div>
                      <input type='text' name="firstname" onBlur={handleFirstnameBlur} onChange={handleChange2}
                        className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-primary10"
                        placeholder="Enter your First Name"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className='flex gap-3 items-center'>
                        <label className="text-[16px] font-[500] text-dark90">
                          Last Name<span className="ml-2 text-red-500">*</span>
                        </label>
                        {lastnameError.status && <span className='text-[12px] font-[500] italic text-red-500'>{lastnameError.message}</span>}
                      </div>
                      <input type='text' name="lastname" onBlur={handleLastnameBlur} onChange={handleChange2}
                        className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-primary10"
                        placeholder="Enter your Last Name"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className='flex gap-3 items-center'>
                        <label className="text-[16px] font-[500] text-dark90">
                          Staff ID<span className="ml-2 text-red-500">*</span>
                        </label>
                        {staffidError.status && <span className='text-[12px] font-[500] italic text-red-500'>{staffidError.message}</span>}
                      </div>
                      <input type='text' name="staffid" onBlur={handleStaffidBlur} onChange={handleChange2}
                        className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-primary10"
                        placeholder="Enter your staff ID"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className='flex gap-3 items-center'>
                        <label className="text-[16px] font-[500] text-dark90">
                          Account Type<span className="ml-2 text-red-500">*</span>
                        </label>
                        {accountTypeError.status && <span className='text-[12px] font-[500] italic text-red-500'>{accountTypeError.message}</span>}
                      </div>
                      <select name="accountType" onChange={handleChange2} onBlur={handleAccountBlur} className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] border border-primary10">
                        <option value="" disabled >
                          Choose a value
                        </option>
                        <option className=' ' value="State">State</option>
                        <option value="LGA">LGA</option>
                        <option value="National">National</option>
                        <option value="HealthFacility">Health Facility</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <div className='flex gap-3 items-center'>
                        <label className="text-[16px] font-[500] text-dark90">
                          Create Password<span className="ml-2 text-red-500">*</span>
                        </label>
                        {passwordError.status && <span className='text-[12px] font-[500] italic text-red-500'>{passwordError.message}</span>}
                      </div>
                      <input type="password" name="password" onChange={handleChange2} onBlur={handlePasswordBlur}
                        className="p-[16px] bg-transparent text-secondary30 outline-none rounded-[8px] border border-primary10"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className='flex gap-3 items-center'>
                        <label className="text-[16px] font-[500] text-dark90">
                          Confirm Password<span className="ml-2 text-red-500">*</span>
                        </label>
                        {confirmpasswordError.status && <span className='text-[12px] font-[500] italic text-red-500'>{confirmpasswordError.message}</span>}
                      </div>
                      <input type="password" onChange={checkpasswordmatch}
                        name="confirmpassword"
                        className="p-[16px] bg-transparent text-secondary30 outline-none rounded-[8px] border border-primary10"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <button onClick={backToStage1} className="text-primary90 border-primary90 border-2 font-[500] font-popp text-[16px]  flex items-center justify-center rounded-[8px] backbtn">
                      Back
                    </button>
                    <button type="submit" className="text-[#fff] font-[500] font-popp text-[16px] flex items-center justify-center rounded-[8px] registerbtngrad">
                      Continue
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div> : stage3 ? <div className="flex flex-col min-h-screen font-popp">
          {/* Navbar */}
          <div className="flex flex-row w-full justify-center px-3 py-[28px]">
            <div className="flex flex-row items-center justify-center gap-[21px]">
              <img src="/images/ED-(1).png" className="h-[30px] md:h-[40px]" />
              <span className="text-[#027D52] font-popp text-[25px] md:text-[43.441px] font-[700]">
                OptiCCS
              </span>
            </div>
            {/* login button */}
            <LoginButton />
          </div>
          {/* form */}
          <div className="relative flex flex-1 items-center justify-center ">
            <div className="absolute top-0 inset-0 bg-cover bg-[url('/images/Registration.png')]"></div>
            <div className="absolute top-0 inset-0 gradientbg opacity-20"></div>
            <div className="h-full w-full z-[20] my-5 flex flex-col items-center justify-center">
              <motion.div initial={{
                opacity: 0,
              }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1.5,
                }} className="bg-white py-9 rounded-2xl md:rounded-[30px] w-[87%] md:w-[65%] lg:w-[55%] flex items-center justify-center">
                <div className="flex flex-col w-[90%] p-4 items-center justify-center">
                  <div className="flex items-center justify-center"><img src="/images/ProgressBar3.png" /></div>
                  <div className="flex flex-row gap-[9px] mt-3">
                    <p className="text-[18px] font-popp font-[500] tracking-[0.64px] text-secondary400">
                      Account Verification
                    </p>
                  </div>
                  <div className="text-center mt-2 text-[14px] font-popp font-[500] tracking-[0.14px] text-secondary300 w-[300px]">
                    Please enter your OTP code
                  </div>
                  <form onSubmit={registerUser} className="flex flex-col w-full gap-4 mt-4">
                    <div className="flex flex-col my-[70px]">
                      <label className="text-[16px] font-[500] text-dark90">
                        OTP Code<span className="ml-2 text-red-500">*</span>
                      </label>
                      <input step="any" type="number" onChange={handleOtp}
                        className="p-[16px] mt-2 text-secondary30 bg-transparent outline-none rounded-[8px] border border-primary10"
                        placeholder="Enter OTP Code"
                      />
                    </div>

                    {!isLoading ? <button type="submit" className="text-[#fff] font-[500] font-popp text-[16px] flex items-center justify-center rounded-[8px] registerbtngrad">
                      Verify
                    </button> : <LoaderSmall />}
                  </form>

                </div>
              </motion.div>
            </div>
          </div>
        </div> : stage4 ? <div className="flex flex-col min-h-screen font-popp">
          {/* Navbar */}
          <div className="flex flex-row w-full justify-center px-3 py-[28px]">
            <div className="flex flex-row items-center justify-center gap-[21px]">
              <img src="/images/ED-(1).png" className="h-[30px] md:h-[40px]" />
              <span className="text-[#027D52] font-popp text-[25px] md:text-[43.441px] font-[700]">
                OptiCCS
              </span>
            </div>
            {/* login button */}
            <LoginButton />
          </div>
          {/* form */}
          <div className="relative p-5 flex-1 flex ">
            <div className="absolute top-0 h-full inset-0 bg-cover bg-[url('/images/Registration.png')]"></div>
            <div className="absolute top-0 h-full inset-0 gradientbg opacity-20"></div>
            <div className='flex items-center justify-center w-full'>
              <div className=" w-full h-[300px] z-[20] my-5 flex flex-col items-center justify-center">
                <motion.div initial={{
                  opacity: 0,
                }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.5,
                  }} className="bg-white h-full py-9 rounded-2xl md:rounded-[30px] w-[90%] md:w-[65%] lg:w-[55%] flex items-center justify-center">
                  <div className=" w-[90%]">
                    <div className="flex flex-col items-center justify-center gap-9">
                      <div className="flex items-center justify-center"><img src="/images/ProgressBar4.png" /></div>
                      <div className="flex flex-row gap-[9px] mt-3">
                        <p className="text-[18px] font-popp font-[500] tracking-[0.64px] text-primary70">
                          Registration  Successful
                        </p>
                      </div>


                      <Link to="/user/login" className="text-[#fff] font-[500] font-popp text-[16px] flex items-center justify-center rounded-[8px] registerbtngrad">
                        Login
                      </Link>

                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div> : null}
    </>
  );
};

export default Registration;
