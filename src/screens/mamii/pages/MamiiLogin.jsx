import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CustomToast from "../../../components/CustomToast";
import LoaderSmall from "../../../components/LoaderSmall";
import { axiosPrivate } from "../../../utils/axios";

const MamiiLogin = () => {
  const { mamiiAuth, setMamiiAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastmessage, setToastmessage] = useState("");
  const [toastStatus, setToastStatus] = useState("");
  const from = location.state?.from?.pathname || "/";

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const loadToast = (myMessage, status) => {
    scrollToTop();
    setToastmessage(myMessage);
    setShowToast(true);
    setToastStatus(status);
  };
  const handleToastClose = () => {
    setShowToast(false);
  };

  const screenSize = document.documentElement.clientWidth;
  const [values, setValues] = useState({ password: "", userid: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const loginUser = async () => {
    setIsLoading(true);
    try {
      const res = await axiosPrivate.post("/admin/mamii/signin", {
        userid: values.userid,
        password: values.password,
      });
      if (res.data) {
        setIsLoading(false);
        loadToast("Login Successful", "success");
        navigate("/mamii");
        setMamiiAuth((prevAuth) => {
          // This function receives the previous state as its argument
          // and returns the updated state

          return res.data.result;
        });
      }
      // console.log({ authLogin: auth });
    } catch (err) {
      setIsLoading(false);
      if (err?.response?.data.message == "User not found") {
        loadToast("User not found", "error");
      } else if (err?.response?.data.message == "Wrong credentials") {
        loadToast("Wrong credentials", "error");
      } else {
        loadToast("Something Went wrong", "error");
      }
    }
  };
  const handleForm = async (e) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <>
      {/* <ToastBox /> */}
      {showToast && (
        <CustomToast
          toastmessage={toastmessage}
          onClose={handleToastClose}
          status={toastStatus}
        />
      )}{" "}
      <div className="flex flex-col h-screen font-popp">
        {/* Navbar */}
        <div className="flex flex-row w-full items-center justify-between px-3 py-[28px]">
          <Link
            to="/"
            className="flex flex-row items-center justify-center gap-[21px]"
          >
            <img src="/images/ED-(1).png" className="h-[30px] md:h-[40px]" />
            <span className="text-[#027D52] font-popp text-[25px] md:text-[43.441px] font-[700]">
              iANC
            </span>
          </Link>
          <img src="/images/partnerlogo.svg" />
        </div>
        {/* form */}
        <div className="relative flex flex-1 ">
          <motion.div
            initial={{
              opacity: 0.5,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="absolute top-0 inset-0 bg-cover bg-[url('/images/Registration.png')]"
          ></motion.div>
          {/* <div className="absolute top-0 inset-0 gradientbg opacity-20"></div> */}
          <div className="absolute top-0 inset-0">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="flex flex-row gap-[9px]">
                <p className="md:text-[64px] text-[35px] font-popp font-[600] tracking-[0.64px] text-light10">
                  Welcome back
                </p>
                <img src="/images/handemoji.png" />
              </div>
              <div className="text-center text-[24px] font-popp font-[500] tracking-[0.24px] text-primary10">
                Please enter details to sign in to Mamii Portal
              </div>
              <form onSubmit={handleForm} className="flex flex-col gap-4 mt-4">
                <div className="flex flex-col">
                  <label className="text-[16px] font-[500] text-[#fff]">
                    User ID<span className="ml-2 text-red-500">*</span>
                  </label>
                  <input
                    name="userid"
                    type="text"
                    onChange={handleChange}
                    className="p-[16px] text-primary10 bg-transparent outline-none rounded-[8px] border border-primary10"
                    placeholder="Enter your User ID"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[16px] font-[500] text-[#fff]">
                    I.D Password<span className="ml-2 text-red-500">*</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    onChange={handleChange}
                    className="p-[16px] bg-transparent text-primary10 outline-none rounded-[8px] border border-primary10"
                    placeholder="XXXX XXXX X4380"
                  />
                </div>
                {!isLoading ? (
                  <button
                    type="submit"
                    className="text-primary90 font-[500] font-popp text-[16px] min-w-[380px] flex items-center justify-center rounded-[8px] bg-primary10 py-[16px]"
                  >
                    Log In
                  </button>
                ) : (
                  <div className="min-w-[380px]">
                    <LoaderSmall />
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MamiiLogin;
