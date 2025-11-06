import axiosInstance from "../../../utils/axios";

class EnumerationService {
  getSubmissions = async (pageNumber, state, lga, ward, dateCreated) => {
    try {
      const res = await axiosInstance.get(
        `/enumeration/data?state=${state}&lga=${lga}&ward=${ward}&dateCreated=${
          dateCreated ? dateCreated.toISOString().split("T")[0] : undefined
        }pageNumber=${pageNumber}&pageSize=20`
      );
      //   console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
  getActiveStates = async (pageNumber) => {
    try {
      const res = await axiosInstance.get(
        `/enumeration/activestates?pageNumber=${pageNumber}&pageSize=20`
      );
      // console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
  getEnumerators = async (pageNumber) => {
    try {
      const res = await axiosInstance.get(
        `/enumeration/enumerators?pageNumber=${pageNumber}&pageSize=20`
      );
      //console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
  getEnumerationWidgetAnalytics = async () => {
    try {
      const res = await axiosInstance.get("/enumeration/analytics/widgetdata");
      //console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
  getLoginCredentials = async (pageNumber) => {
    try {
      const res = await axiosInstance.get(
        `/enumeration/enumerators-credentials?pageNumber=${pageNumber}&pageSize=20`
      );
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
  getIevStates = async () => {
    try {
      const res = await axiosInstance.get(
        `https://echis.up.railway.app/api/National/states`
      );
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
  getIevLgas = async (state) => {
    try {
      const res = await axiosInstance.get(
        `https://echis.up.railway.app/api/National/lgas?state=${state}&all=${true}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
  getIevWards = async (state, lga) => {
    try {
      const res = await axiosInstance.get(
        `https://echis.up.railway.app/api/National/wards?state=${state}&lga=${lga}&all=${true}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
  getIevSettlements = async (state, lga, ward) => {
    try {
      const res = await axiosInstance.get(
        `https://echis.up.railway.app/api/National/settlements?state=${state}&lga=${lga}&ward=${ward}&all=${true}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };

  getIevHealthFacilities = async (state, lga, ward) => {
    try {
      const res = await axiosInstance.get(
        `https://echis.up.railway.app/api/National/healthfacilities?state=${state}&lga=${lga}&ward=${ward}&all=${true}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
}

export default new EnumerationService();
