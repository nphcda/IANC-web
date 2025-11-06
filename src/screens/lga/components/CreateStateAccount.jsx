import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axios";
import CustomToast from "../../../components/CustomToast";
import { useAuth } from "../hooks/useAuth";
import LoaderSmall from "../../../components/LoaderSmall";

const CreateStateAccount = () => {
  const { lgaAuth } = useAuth();
  const { lga, state } = lgaAuth.others;
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastmessage, setToastmessage] = useState("");
  const [toastStatus, setToastStatus] = useState("");
  const [wards, setWards] = useState();

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
  const getAllWards = async () => {
    try {
      const result = await axiosInstance.get(
        `/admin/wards/getAllWardsForLga?state=${state}&lga=${lga}`
      );
      setWards(result.data.result);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getAllWards();
  }, []);
  const [values, setValues] = useState({
    ward: "",
    healthfacilityname: "",
    healthfacilityid: "",
    officeaddress: "",
    phone: "",
    email: "",
    userid: "",
    password: "",
  });
  const [phoneError, setPhoneError] = useState({ status: false, message: "" });
  const [emailError, setEmailError] = useState({ status: false, message: "" });
  const [wardError, setwardError] = useState({ status: false, message: "" });
  const [healthfacilitynameError, sethealthfacilitynameError] = useState({
    status: false,
    message: "",
  });
  const [healthfacilityidError, sethealthfacilityidError] = useState({
    status: false,
    message: "",
  });
  const [officeAddressError, setofficeAddressError] = useState({
    status: false,
    message: "",
  });
  const [useridError, setUseridError] = useState({
    status: false,
    message: "",
  });
  const [passwordError, setPasswordError] = useState({
    status: false,
    message: "",
  });
  const handleChange2 = (event) => {
    const { name, value } = event.target;
    name == "officeaddress" &&
      setofficeAddressError({ status: false, message: "" });
    name == "ward" && setwardError({ status: false, message: "" });
    name == "healthfacilityname" &&
      sethealthfacilitynameError({ status: false, message: "" });
    name == "healthfacilityid" &&
      sethealthfacilityidError({ status: false, message: "" });
    name == "phone" && setPhoneError({ status: false, message: "" });
    name == "userid" && setUseridError({ status: false, message: "" });
    name == "email" && setEmailError({ status: false, message: "" });
    name == "password" && setPasswordError({ status: false, message: "" });
    setValues({ ...values, [name]: value });
  };
  const validateValues = () => {
    let noErrors = true;

    if (values.ward === "") {
      setwardError({ status: true, message: "This field is required" });
      noErrors = false;
    }

    if (values.healthfacilityname === "") {
      sethealthfacilitynameError({
        status: true,
        message: "This field is required",
      });
      noErrors = false;
    }
    if (values.healthfacilityid === "") {
      sethealthfacilityidError({
        status: true,
        message: "This field is required",
      });
      noErrors = false;
    }
    if (values.officeaddress === "") {
      setofficeAddressError({
        status: true,
        message: "This field is required",
      });
      noErrors = false;
    }
    if (values.phone === "") {
      setPhoneError({ status: true, message: "This field is required" });
      noErrors = false;
    }

    return noErrors;
  };
  const handleEmailBlur = () => {
    if (values.email === "") {
      setEmailError({ status: true, message: "This field is required" });
    }
  };
  const handlewardBlur = () => {
    if (values.ward === "") {
      setwardError({
        status: true,
        message: "This field is required",
      });
    }
  };
  const handlePhoneBlur = () => {
    if (values.phone === "") {
      setPhoneError({ status: true, message: "This field is required" });
    }
  };
  const handleUseridBlur = () => {
    if (values.userid === "") {
      setUseridError({ status: true, message: "This field is required" });
    }
  };
  const handleStateBlur = () => {
    if (values.ward === "") {
      setwardError({ status: true, message: "This field is required" });
    }
  };
  const handlehealthfacilitynameBlur = () => {
    if (values.healthfacilityname === "") {
      sethealthfacilitynameError({
        status: true,
        message: "This field is required",
      });
    }
  };
  const handleStateidBlur = () => {
    if (values.healthfacilityid === "") {
      sethealthfacilityidError({
        status: true,
        message: "This field is required",
      });
    }
  };
  const handleOfficeBlur = () => {
    if (values.officeaddress === "") {
      setofficeAddressError({
        status: true,
        message: "This field is required",
      });
    }
  };
  const handlePasswordBlur = () => {
    if (values.password === "") {
      setPasswordError({ status: true, message: "This field is required" });
    }
  };
  const createAccount = async (e) => {
    e.preventDefault();
    validateValues();
    setIsLoading(true);
    try {
      const res = await axiosInstance.post("/admin/healthfacility", {
        state: state,
        lga: lga,
        ward: values.ward,
        healthfacilityname: values.healthfacilityname,
        healthfacilityID: values.healthfacilityid,
        officeaddress: values.officeaddress,
        phone: values.phone,
        email: values.email,
      });
      if (res.data) {
        setIsLoading(false);
        // console.log({ res: res.data });
        loadToast("Health facility created", "success");
      }
    } catch (err) {
      setIsLoading(false);
      loadToast("Something went wrong", "error");
    } finally {
      setValues({
        ward: "",
        healthfacilityname: "",
        healthfacilityid: "",
        officeaddress: "",
        phone: "",
        email: "",
        userid: "",
        password: "",
      });
    }
  };
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <>
      {showToast && (
        <CustomToast
          toastmessage={toastmessage}
          onClose={handleToastClose}
          status={toastStatus}
        />
      )}
      <div>
        <form autoComplete="false" onSubmit={createAccount} className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-5 mb-4 mt-4">
            <div className="flex flex-col">
              <div className="flex gap-3 items-center">
                <label className="text-[16px] font-[500] text-dark90">
                  Select Ward<span className="ml-2 text-red-500">*</span>
                </label>
              </div>
              <select
                name="ward"
                value={values.ward}
                onChange={handleChange2}
                onBlur={handlewardBlur}
                className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
              >
                <option value="" disabled>
                  Choose a value
                </option>
                {wards?.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.ward}
                  </option>
                ))}
              </select>
              {wardError.status && (
                <span className="text-[12px] font-[500] italic text-red-500">
                  {wardError.message}
                </span>
              )}
              {/* <input
                value={values.ward}
                type="text"
                name="ward"
                onChange={handleChange2}
                onBlur={handleStateBlur}
                className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
              /> */}
            </div>
            <div className="flex flex-col">
              <div className="flex gap-3 items-center">
                <label className="text-[16px] font-[500] text-dark90">
                  Health Facility Name
                  <span className="ml-2 text-red-500">*</span>
                </label>
                {healthfacilitynameError.status && (
                  <span className="text-[12px] font-[500] italic text-red-500">
                    {healthfacilitynameError.message}
                  </span>
                )}
              </div>
              <input
                value={values.healthfacilityname}
                type="text"
                name="healthfacilityname"
                onBlur={handlehealthfacilitynameBlur}
                onChange={handleChange2}
                className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
                placeholder="Enter state health board name"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex gap-3 items-center">
                <label className="text-[16px] font-[500] text-dark90">
                  Health Facility ID<span className="ml-2 text-red-500">*</span>
                </label>
                {healthfacilityidError.status && (
                  <span className="text-[12px] font-[500] italic text-red-500">
                    {healthfacilityidError.message}
                  </span>
                )}
              </div>
              <input
                type="text"
                value={values.healthfacilityid}
                name="healthfacilityid"
                onBlur={handleStateidBlur}
                onChange={handleChange2}
                className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
                placeholder="Enter Board ID"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex gap-3 items-center">
                <label className="text-[16px] font-[500] text-dark90">
                  Office Address<span className="ml-2 text-red-500">*</span>
                </label>
                {officeAddressError.status && (
                  <span className="text-[12px] font-[500] italic text-red-500">
                    {officeAddressError.message}
                  </span>
                )}
              </div>
              <input
                type="text"
                value={values.officeaddress}
                name="officeaddress"
                onChange={handleChange2}
                onBlur={handleOfficeBlur}
                className="p-[16px] bg-transparent text-secondary30 outline-none rounded-[8px] border border-[#C6C7C8]"
                placeholder="Enter office address"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex gap-3 items-center">
                <label className="text-[16px] font-[500] text-dark90">
                  Phone Number<span className="ml-2 text-red-500">*</span>
                </label>
                {phoneError.status && (
                  <span className="text-[12px] font-[500] italic text-red-500">
                    {phoneError.message}
                  </span>
                )}
              </div>
              <input
                value={values.phone}
                type="number"
                onChange={handleChange2}
                name="phone"
                onBlur={handlePhoneBlur}
                className="p-[16px] bg-transparent text-secondary30 outline-none rounded-[8px] border border-[#C6C7C8]"
                placeholder="2348223459211"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex gap-3 items-center">
                <label className="text-[16px] font-[500] text-dark90">
                  Email address<span className="ml-2 text-red-500">*</span>
                </label>
                {emailError.status && (
                  <span className="text-[12px] font-[500] italic text-red-500">
                    {emailError.message}
                  </span>
                )}
              </div>
              <input
                value={values.email}
                type="email"
                onChange={handleChange2}
                name="email"
                onBlur={handleEmailBlur}
                className="p-[16px] bg-transparent text-secondary30 outline-none rounded-[8px] border border-[#C6C7C8]"
                placeholder="Enter your email address"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-center mt-8 w-full ">
              {!isLoading ? (
                <button
                  type="submit"
                  className="text-[#fff] w-[300px] font-[500] font-popp text-[16px] flex items-center justify-center min-w-[200px] bg-primary90 createbtn"
                >
                  Create
                </button>
              ) : (
                <LoaderSmall />
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateStateAccount;
