import React, { useEffect, useRef, useState } from "react";
import axiosInstance from "../../../utils/axios";
import { showError, showSuccess } from "../../../utils/Toastmessage";
import { ToastContainer } from "react-toastify";
import ToastBox from "../../../utils/ToastBox";
import {
  useGetAllLgas,
  useGetAllSettlements,
  useGetAllStates,
  useGetAllWards,
  useGetAllHealthFacilities,
} from "../queries/enumeration";
import {
  IoMdAddCircle,
  IoMdAddCircleOutline,
  IoMdCloseCircle,
  IoMdEye,
  IoMdEyeOff,
} from "react-icons/io";

const CreateEnumeratorAccount = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedLga, setSelectedLga] = useState("");
  const [selectedward, setSelectedWard] = useState("");
  const [selectedSettlement, setSelectedSettlement] = useState([]);
  const [selectedHealthfacility, setSelectedHealthFacility] = useState([]);
  const [showHealthFacilityOthers, setShowHealthFacilityOthers] =
    useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const [formData, setFormData] = useState({
    enumeratorName: "",
    phoneNumber: "",
    gender: "Male",
    password: "",
    state: "",
    lga: "",
    ward: "",
    settlement: [],
    healthfacility: [],
    healthfacilityOthers: "",
  });

  const [errors, setErrors] = useState({
    enumeratorName: "",
    phoneNumber: "",
    gender: "",
    password: "",
    state: "",
    lga: "",
    ward: "",
    settlement: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error for the field being updated
    setErrors({ ...errors, [name]: "" });
  };
  const handlehfAddIcon = () => {
    setFormData((prev) => ({
      ...prev,
      healthfacility: [...prev.healthfacility, formData.healthfacilityOthers],
      healthfacilityOthers: "",
    }));
    setShowHealthFacilityOthers(false);
  };
  const handleHealthFacilityOthers = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = e.target.value.trim();
      if (value) {
        setFormData((prev) => ({
          ...prev,
          healthfacility: [...prev.healthfacility, value],
          healthfacilityOthers: "",
        }));
        setShowHealthFacilityOthers(false);
      } else {
        showError("Health Facility name cannot be empty");
      }
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate each field
    if (!formData.enumeratorName.trim()) {
      newErrors.enumeratorName = "Enumerator Name is required";
      isValid = false;
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
      isValid = false;
    }
    if (!formData.gender.trim()) {
      newErrors.gender = "Gender is required";
      isValid = false;
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    }
    if (!formData.state.trim()) {
      newErrors.state = "State is required";
      isValid = false;
    }
    if (!formData.lga.trim()) {
      newErrors.lga = "LGA is required";
      isValid = false;
    }
    if (!formData.ward.trim()) {
      newErrors.ward = "Ward is required";
      isValid = false;
    }
    if (formData.settlement.length < 1) {
      newErrors.settlement = "Settlement is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showError("Please fill all required fields");
      return;
    }
    const data = {
      name: formData.enumeratorName,
      phone: formData.phoneNumber,
      gender: formData.gender,
      state: formData.state,
      lga: formData.lga,
      ward: formData.ward,
      settlement: formData.settlement,
      password: formData.password,
      healthfacility: formData.healthfacility,
    };
    setLoading(true);
    try {
      const res = await axiosInstance.post("/enumeration/enumerators", data);
      if (res.data) {
        showSuccess("Enumerator account created successfully");
        setFormData({
          enumeratorName: "",
          phoneNumber: "",
          gender: "Male",
          password: "",
          state: "",
          lga: "",
          ward: "",
          settlement: [],
        });
      }
    } catch (error) {
      console.log(error?.response.data);
      showError(error?.response?.data.message || "An error occurred");
    } finally {
      setLoading(false);
      setShowHealthFacilityOthers(false);
    }
  };
  const { states } = useGetAllStates();
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      state: states?.result[0],
    }));
  }, [states]);

  const { lgas } = useGetAllLgas({
    state: formData.state,
    enabled: !!formData.state,
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      lga: lgas?.result[0],
    }));
  }, [lgas]);

  const { wards } = useGetAllWards({
    state: formData.state,
    lga: formData.lga,
    enabled: !!formData.lga,
  });
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      ward: wards?.result[0],
    }));
  }, [wards]);

  const { settlements } = useGetAllSettlements({
    state: formData.state,
    lga: formData.lga,
    ward: formData.ward,
    enabled: !!formData.ward,
  });

  const { healthFacilities } = useGetAllHealthFacilities({
    state: formData.state,
    lga: formData.lga,
    ward: "",
    enabled: !!formData.lga,
  });

  return (
    <div>
      <ToastBox />
      <form onSubmit={handleSubmit} className="mt-12">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-5 mb-4 mt-4">
          {/* Enumerator Name */}
          <div className="flex flex-col w-[350px]">
            <div className="flex gap-3 items-center">
              <label className="text-[16px] font-[500] text-dark90">
                Enumerator Name<span className="ml-2 text-red-500">*</span>
              </label>
              {errors.enumeratorName && (
                <span className="text-[12px] font-[500] italic text-red-500">
                  {errors.enumeratorName}
                </span>
              )}
            </div>
            <input
              type="text"
              name="enumeratorName"
              value={formData.enumeratorName}
              onChange={handleChange}
              className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
              placeholder="Enter Enumerator Name"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col w-[350px]">
            <div className="flex gap-3 items-center">
              <label className="text-[16px] font-[500] text-dark90">
                Phone Number<span className="ml-2 text-red-500">*</span>
              </label>
              {errors.phoneNumber && (
                <span className="text-[12px] font-[500] italic text-red-500">
                  {errors.phoneNumber}
                </span>
              )}
            </div>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
              placeholder="Enter Phone Number"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col w-[350px]">
            <div className="flex gap-3 items-center">
              <label className="text-[16px] font-[500] text-dark90">
                Gender<span className="ml-2 text-red-500">*</span>
              </label>
              {errors.gender && (
                <span className="text-[12px] font-[500] italic text-red-500">
                  {errors.gender}
                </span>
              )}
            </div>
            <select
              name="gender"
              onChange={handleChange}
              value={formData.gender}
              className="p-[16px] myselect min-w-[150px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C880]"
            >
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
            </select>
          </div>

          {/* Password */}
          <div className="flex flex-col w-[350px]">
            <div className="flex gap-3 items-center">
              <label className="text-[16px] font-[500] text-dark90">
                Password<span className="ml-2 text-red-500">*</span>
              </label>
              {errors.password && (
                <span className="text-[12px] font-[500] italic text-red-500">
                  {errors.password}
                </span>
              )}
            </div>
            <div className="flex gap-3 p-4 justify-between rounded-[8px] border border-[#C6C7C8]">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className=" text-secondary30 bg-transparent outline-none "
                placeholder="Enter Password"
              />
              {showPassword ? (
                <IoMdEye
                  onClick={togglePasswordVisibility}
                  className="text-xl cursor-pointer"
                />
              ) : (
                <IoMdEyeOff
                  onClick={togglePasswordVisibility}
                  className="text-xl cursor-pointer"
                />
              )}
            </div>
          </div>

          {/* State */}
          <div className="flex flex-col w-[350px]">
            <div className="flex gap-3 items-center">
              <label className="text-[16px] font-[500] text-dark90">
                State<span className="ml-2 text-red-500">*</span>
              </label>

              {errors.state && (
                <span className="text-[12px] font-[500] italic text-red-500">
                  {errors.state}
                </span>
              )}
            </div>
            <select
              name="state"
              onChange={handleChange}
              value={formData.state}
              className="p-[16px] myselect min-w-[150px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C880]"
            >
              {states?.result.map((state, idx) => (
                <option key={idx} data-state={""} data-lga={""} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* LGA */}
          <div className="flex flex-col w-[350px]">
            <div className="flex gap-3 items-center">
              <label className="text-[16px] font-[500] text-dark90">
                LGA<span className="ml-2 text-red-500">*</span>
              </label>
              {errors.lga && (
                <span className="text-[12px] font-[500] italic text-red-500">
                  {errors.lga}
                </span>
              )}
            </div>
            <select
              name="lga"
              onChange={handleChange}
              value={formData.lga}
              className="p-[16px] myselect min-w-[150px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C880]"
            >
              {lgas?.result.map((lga, idx) => (
                <option key={idx} data-state={""} data-lga={""} value={lga}>
                  {lga}
                </option>
              ))}
            </select>
          </div>

          {/* Ward */}
          <div className="flex flex-col w-[350px]">
            <div className="flex gap-3 items-center">
              <label className="text-[16px] font-[500] text-dark90">
                Ward<span className="ml-2 text-red-500">*</span>
              </label>
              {errors.ward && (
                <span className="text-[12px] font-[500] italic text-red-500">
                  {errors.ward}
                </span>
              )}
            </div>
            <select
              name="ward"
              onChange={handleChange}
              value={formData.ward}
              className="p-[16px] myselect min-w-[150px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C880]"
            >
              {wards?.result.map((ward, idx) => (
                <option key={idx} data-state={""} data-lga={""} value={ward}>
                  {ward}
                </option>
              ))}
            </select>
          </div>

          {/* Settlement */}
          <div className="flex flex-col w-[350px]">
            <div className="flex gap-3 items-center">
              <label className="text-[16px] font-[500] text-dark90">
                Settlement<span className="ml-2 text-red-500">*</span>
              </label>
              {errors.settlement && (
                <span className="text-[12px] font-[500] italic text-red-500">
                  {errors.settlement}
                </span>
              )}
            </div>
            <select
              name="settlement"
              onChange={(e) => {
                const value = e.target.value;

                setFormData((prev) => {
                  const alreadySelected = prev.settlement.includes(value);

                  return {
                    ...prev,
                    settlement: alreadySelected
                      ? prev.settlement.filter((item) => item !== value)
                      : [...prev.settlement, value],
                  };
                });
              }}
              value={""}
              className="p-[16px] myselect min-w-[150px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C880]"
            >
              <option value={""}>Choose Settlement</option>
              {settlements?.result.map((item, idx) => (
                <option
                  key={idx}
                  data-state={""}
                  data-lga={""}
                  value={item.name}
                >
                  {item.name}
                </option>
              ))}
            </select>
            <div className="grid grid-cols-2 gap-3 mt-3">
              {formData.settlement?.map((settlement, idx) => (
                <div
                  key={idx}
                  className="bg-primary10 flex items-center gap-3 rounded-lg p-2 text-sm text-primary90 cursor-pointer"
                >
                  {settlement}
                  <IoMdCloseCircle
                    onClick={() => {
                      setFormData({
                        ...formData,
                        settlement: formData.settlement.filter(
                          (item) => item !== settlement
                        ),
                      });
                      // setSelectedSettlement((prevItems) =>
                      //   prevItems.filter((item) => item !== settlement)
                      // );
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Health Facility */}
          <div className="flex flex-col w-[350px]">
            <div className="flex gap-3 items-center">
              <label className="text-[16px] font-[500] text-dark90">
                Health Facility<span className="ml-2 text-red-500">*</span>
              </label>
              {errors.healthfacility && (
                <span className="text-[12px] font-[500] italic text-red-500">
                  {errors.healthfacility}
                </span>
              )}
            </div>
            <select
              name="healthfacility"
              onChange={(e) => {
                const value = e.target.value;
                if (value === "Others") {
                  setShowHealthFacilityOthers(true);

                  return;
                }
                setFormData((prev) => {
                  const alreadySelected = prev.settlement.includes(value);

                  return {
                    ...prev,
                    healthfacility: alreadySelected
                      ? prev.healthfacility.filter((item) => item !== value)
                      : [...prev.healthfacility, value],
                  };
                });
              }}
              value={""}
              className="p-[16px] myselect min-w-[150px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C880]"
            >
              <option value={""}>Choose Health Facility</option>
              {healthFacilities?.result.map((item, idx) => (
                <option key={idx} data-state={""} data-lga={""} value={item}>
                  {item}
                </option>
              ))}
              <option value="Others">Others</option>
            </select>
            <div className="grid grid-cols-2 gap-3 mt-3">
              {formData.healthfacility?.map((hf, idx) => (
                <div
                  key={idx}
                  className="bg-primary10 flex-1 flex items-center gap-3 rounded-lg p-2 text-sm text-primary90 cursor-pointer"
                >
                  {hf}
                  <IoMdCloseCircle
                    onClick={() => {
                      setFormData({
                        ...formData,
                        healthfacility: formData.healthfacility.filter(
                          (item) => item !== hf
                        ),
                      });
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Health Facility Others */}
          {showHealthFacilityOthers && (
            <div className="flex flex-col w-[350px]">
              <div className="flex gap-3 items-center">
                <label className="text-[16px] font-[500] text-dark90">
                  Health Facility Others
                </label>
              </div>
              <div className="flex gap-3 items-center justify-between p-4 rounded-[8px] border border-[#C6C7C8]">
                <input
                  type="text"
                  name="healthfacilityOthers"
                  value={formData.healthfacilityOthers || ""}
                  onChange={handleChange}
                  onKeyDown={handleHealthFacilityOthers}
                  className="text-secondary30 bg-transparent outline-none "
                  placeholder="Enter Health Facility Name"
                />
                <IoMdAddCircleOutline
                  onClick={handlehfAddIcon}
                  className="text-primary90 text-lg cursor-pointer"
                />
              </div>
            </div>
          )}
        </div>
        {/* Submit Button */}
        <div className="flex items-center justify-center mt-8 w-full">
          <button
            type="submit"
            disabled={loading}
            className={`text-[#fff] w-[300px] font-[500] font-popp text-[16px] flex items-center justify-center min-w-[200px] bg-primary90 ${
              loading ? "opacity-30" : ""
            } createbtn`}
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </div>
        <div className="text-center mt-4">
          <p className="text-[14px] text-secondary30">
            Note: All fields marked with an asterisk (
            <span className="text-red-500">*</span>) are required.
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateEnumeratorAccount;
