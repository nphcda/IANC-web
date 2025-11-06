import React, { useEffect, useState } from "react";
import stateLocalGovts from "../../../utils/stateandlgas";
import { useAuth } from "../hooks/useAuth";
import axiosInstance from "../../../utils/axios";
import LoaderSmall from "../../../components/LoaderSmall";
import CustomToast from "../../../components/CustomToast";
import { showError, showSuccess } from "../../../utils/Toastmessage";
import ToastBox from "../../../utils/ToastBox";

const CreateStateAccount = () => {
  const [localGovts, setLocalGovts] = useState([]);
  const { stateAuth } = useAuth();
  const state = stateAuth.others.state;
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastmessage, setToastmessage] = useState("");
  const [toastStatus, setToastStatus] = useState("");

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

  const [values, setValues] = useState({
    lga: "",
    lgaboard: "",
    lgaid: "",
    officeaddress: "",
    phone: "",
    email: "",
    userid: "",
    password: "",
  });
  const [phoneError, setPhoneError] = useState({ status: false, message: "" });
  const [emailError, setEmailError] = useState({ status: false, message: "" });
  const [lgaError, setlgaError] = useState({ status: false, message: "" });
  const [lgaboardError, setlgaboardError] = useState({
    status: false,
    message: "",
  });
  const [lgaidError, setlgaidError] = useState({ status: false, message: "" });
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
    name == "lga" && setlgaError({ status: false, message: "" });
    name == "lgaboard" && setlgaboardError({ status: false, message: "" });
    name == "lgaid" && setlgaidError({ status: false, message: "" });
    name == "phone" && setPhoneError({ status: false, message: "" });
    name == "userid" && setUseridError({ status: false, message: "" });
    name == "email" && setEmailError({ status: false, message: "" });
    name == "password" && setPasswordError({ status: false, message: "" });
    setValues({ ...values, [name]: value });
  };
  const validateValues = () => {
    let noErrors = true;

    if (values.lga === "") {
      setlgaError({ status: true, message: "This field is required" });
      noErrors = false;
    }

    if (values.lgaboard === "") {
      setlgaboardError({ status: true, message: "This field is required" });
      noErrors = false;
    }
    if (values.lgaid === "") {
      setlgaidError({ status: true, message: "This field is required" });
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
    if (values.email === "") {
      setEmailError({ status: true, message: "This field is required" });
      noErrors = false;
    }
    if (values.userid === "") {
      setUseridError({ status: true, message: "This field is required" });
      noErrors = false;
    }
    if (values.password === "") {
      setPasswordError({ status: true, message: "This field is required" });
      noErrors = false;
    }

    return noErrors;
  };
  const handleEmailBlur = () => {
    if (values.email === "") {
      setEmailError({ status: true, message: "This field is required" });
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
    if (values.lga === "") {
      setlgaError({ status: true, message: "This field is required" });
    }
  };
  const handlestateboardBlur = () => {
    if (values.lgaboard === "") {
      setlgaboardError({ status: true, message: "This field is required" });
    }
  };
  const handleStateidBlur = () => {
    if (values.lgaid === "") {
      setlgaidError({ status: true, message: "This field is required" });
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
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  useEffect(() => {
    setLocalGovts(stateLocalGovts[capitalizeFirstLetter(state)]);
  }, []);
  const createAccount = async (e) => {
    e.preventDefault();
    validateValues();
    try {
      setLoading(true);
      const res = await axiosInstance.post("/admin/lga", {
        state: state,
        lga: values.lga,
        boardname: values.lgaboard,
        lgaID: values.lgaid,
        officeaddress: values.officeaddress,
        phone: values.phone,
        email: values.email,
      });
      if (res.data) {
        showSuccess("LGA Account has been created");
        setValues({
          lga: "",
          lgaboard: "",
          lgaid: "",
          officeaddress: "",
          phone: "",
          email: "",
          userid: "",
          password: "",
        });
      }
    } catch (error) {
      showError("An Error occurred");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <ToastBox />
      <div>
        <form onSubmit={createAccount} className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-5 mb-4 mt-4">
            <div className="flex flex-col">
              <div className="flex gap-3 items-center">
                <label className="text-[16px] font-[500] text-dark90">
                  Select LGA<span className="ml-2 text-red-500">*</span>
                </label>
                {lgaError.status && (
                  <span className="text-[12px] font-[500] italic text-red-500">
                    {lgaError.message}
                  </span>
                )}
              </div>
              <select
                value={values.lga}
                name="lga"
                onChange={handleChange2}
                onBlur={handleStateBlur}
                className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
              >
                <option value="">Choose LGA</option>
                {localGovts?.map((localGovt) => (
                  <option key={localGovt} value={localGovt}>
                    {localGovt}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-3 items-center">
                <label className="text-[16px] font-[500] text-dark90">
                  LGA Board Name<span className="ml-2 text-red-500">*</span>
                </label>
                {lgaboardError.status && (
                  <span className="text-[12px] font-[500] italic text-red-500">
                    {lgaboardError.message}
                  </span>
                )}
              </div>
              <input
                value={values.lgaboard}
                type="text"
                name="lgaboard"
                onBlur={handlestateboardBlur}
                onChange={handleChange2}
                className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
                placeholder="Enter lga health board name"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex gap-3 items-center">
                <label className="text-[16px] font-[500] text-dark90">
                  LGA ID<span className="ml-2 text-red-500">*</span>
                </label>
                {lgaidError.status && (
                  <span className="text-[12px] font-[500] italic text-red-500">
                    {lgaidError.message}
                  </span>
                )}
              </div>
              <input
                value={values.lgaid}
                type="text"
                name="lgaid"
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
                value={values.officeaddress}
                type="officeaddress"
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
                type="text"
                onChange={handleChange2}
                name="phone"
                onBlur={handlePhoneBlur}
                className="p-[16px] bg-transparent text-secondary30 outline-none rounded-[8px] border border-[#C6C7C8]"
                placeholder="Enter your phone number"
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
