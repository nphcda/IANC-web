import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axios";
import LoaderSmall from "../../../components/LoaderSmall";
import axios from "axios";
import { showError, showSuccess } from "../../../utils/Toastmessage";
import ToastBox from "../../../utils/ToastBox";

const CreateStateAccount = () => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    state: "",
    stateboard: "",
    stateid: "",
    officeaddress: "",
    phone: "",
    email: "",
    userid: "",
    password: "",
  });

  const [phoneError, setPhoneError] = useState({ status: false, message: "" });
  const [emailError, setEmailError] = useState({ status: false, message: "" });
  const [stateError, setstateError] = useState({ status: false, message: "" });
  const [stateboardError, setstateboardError] = useState({
    status: false,
    message: "",
  });
  const [stateidError, setstateidError] = useState({
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
    name == "state" && setstateError({ status: false, message: "" });
    name == "stateboard" && setstateboardError({ status: false, message: "" });
    name == "stateid" && setstateidError({ status: false, message: "" });
    name == "phone" && setPhoneError({ status: false, message: "" });
    name == "userid" && setUseridError({ status: false, message: "" });
    name == "email" && setEmailError({ status: false, message: "" });
    name == "password" && setPasswordError({ status: false, message: "" });
    setValues({ ...values, [name]: value });
  };
  const validateValues = () => {
    let noErrors = true;

    if (values.state === "") {
      setstateError({ status: true, message: "This field is required" });
      noErrors = false;
    }

    if (values.stateboard === "") {
      setstateboardError({ status: true, message: "This field is required" });
      noErrors = false;
    }
    if (values.stateid === "") {
      setstateidError({ status: true, message: "This field is required" });
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
  const handleStateBlur = () => {
    if (values.state === "") {
      setstateError({ status: true, message: "This field is required" });
    }
  };
  const handlestateboardBlur = () => {
    if (values.stateboard === "") {
      setstateboardError({ status: true, message: "This field is required" });
    }
  };
  const handleStateidBlur = () => {
    if (values.stateid === "") {
      setstateidError({ status: true, message: "This field is required" });
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

  const createAccount = async (e) => {
    e.preventDefault();
    validateValues();
    try {
      setLoading(true);
      const res = await axiosInstance.post("/admin/state", {
        state: values.state,
        boardname: values.stateboard,
        stateid: values.stateid,
        officeaddress: values.officeaddress,
        phone: values.phone,
        email: values.email,
      });
      if (res.data) {
        showSuccess("State Account has been created");
        setValues({
          state: "",
          stateboard: "",
          stateid: "",
          officeaddress: "",
          phone: "",
          email: "",
          userid: "",
          password: "",
        });
      }
    } catch (error) {
      showError("An Error Occurred");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <ToastBox />
      <form onSubmit={createAccount} className="mt-12">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-5 mb-4 mt-4">
          <div className="flex flex-col">
            <div className="flex gap-3 items-center">
              <label className="text-[16px] font-[500] text-dark90">
                Select State<span className="ml-2 text-red-500">*</span>
              </label>
              {stateError.status && (
                <span className="text-[12px] font-[500] italic text-red-500">
                  {stateError.message}
                </span>
              )}
            </div>
            <select
              value={values.state}
              name="state"
              onChange={handleChange2}
              onBlur={handleStateBlur}
              className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
            >
              <option value="" disabled>
                Choose a value
              </option>
              <option value="Abia">Abia</option>
              <option value="Adamawa">Adamawa</option>
              <option value="Akwa Ibom">Akwa Ibom</option>
              <option value="Anambra">Anambra</option>
              <option value="Bauchi">Bauchi</option>
              <option value="Bayelsa">Bayelsa</option>
              <option value="Benue">Benue</option>
              <option value="Borno">Borno</option>
              <option value="Cross River">Cross River</option>
              <option value="Delta">Delta</option>
              <option value="Ebonyi">Ebonyi</option>
              <option value="Edo">Edo</option>
              <option value="Ekiti">Ekiti</option>
              <option value="Enugu">Enugu</option>
              <option value="FCT">FCT</option>
              <option value="Gombe">Gombe</option>
              <option value="Imo">Imo</option>
              <option value="Jigawa">Jigawa</option>
              <option value="Kaduna">Kaduna</option>
              <option value="Kano">Kano</option>
              <option value="Katsina">Katsina</option>
              <option value="Kebbi">Kebbi</option>
              <option value="Kogi">Kogi</option>
              <option value="Kwara">Kwara</option>
              <option value="Lagos">Lagos</option>
              <option value="Nasarawa">Nasarawa</option>
              <option value="Niger">Niger</option>
              <option value="Ogun">Ogun</option>
              <option value="Ondo">Ondo</option>
              <option value="Osun">Osun</option>
              <option value="Oyo">Oyo</option>
              <option value="Plateau">Plateau</option>
              <option value="Rivers">Rivers</option>
              <option value="Sokoto">Sokoto</option>
              <option value="Taraba">Taraba</option>
              <option value="Yobe">Yobe</option>
              <option value="Zamfara">Zamfara</option>
            </select>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-3 items-center">
              <label className="text-[16px] font-[500] text-dark90">
                State Board Name<span className="ml-2 text-red-500">*</span>
              </label>
              {stateboardError.status && (
                <span className="text-[12px] font-[500] italic text-red-500">
                  {stateboardError.message}
                </span>
              )}
            </div>
            <input
              type="text"
              value={values.stateboard}
              name="stateboard"
              onBlur={handlestateboardBlur}
              onChange={handleChange2}
              className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
              placeholder="Enter state health board name"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex gap-3 items-center">
              <label className="text-[16px] font-[500] text-dark90">
                State ID<span className="ml-2 text-red-500">*</span>
              </label>
              {stateidError.status && (
                <span className="text-[12px] font-[500] italic text-red-500">
                  {stateidError.message}
                </span>
              )}
            </div>
            <input
              type="text"
              value={values.stateid}
              name="stateid"
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
              type="number"
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
            {!loading ? (
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
  );
};

export default CreateStateAccount;
