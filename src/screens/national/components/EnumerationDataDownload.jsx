import axios from "axios";
import React from "react";
import axiosInstance from "../../../utils/axios";

const EnumerationDataDownload = () => {
  const date = new Date();
  const fetchEnumerationData = async () => {
    try {
      const response = await axiosInstance.get(`/enumeration/data/download`, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = `EnumerationData-${date}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading CSV:", error);
    }
  };
  const fetchServiceDeliveryData = async () => {
    try {
      const response = await axiosInstance.get(
        `/enumeration/data/service-delivery/download`,
        {
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = `ServiceDelivery-${date}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading CSV:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3 justify-center">
        <p className="text-lg font-medium">Download All Enumeration Data</p>
        <button
          className="bg-primary90 px-3 py-4 text-white rounded-md font-medium"
          onClick={fetchEnumerationData}
        >
          Download Enumeration Data
        </button>
        <button
          className="bg-primary90 px-3 py-4 text-white rounded-md font-medium"
          onClick={fetchServiceDeliveryData}
        >
          Download Service Delivery Data
        </button>
      </div>
    </>
  );
};

export default EnumerationDataDownload;
