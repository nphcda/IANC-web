import axiosInstance from "../../../utils/axios";

export class ApiCalls {
  static getAllPatients = async (
    currentpage,
    searchitem,
    setPatients,
    setTotalPatients
  ) => {
    try {
      const res = await axiosInstance.get(
        `/patients/findwithworkers?page=${currentpage.value}&state=${
          searchitem.state
        }&lga=${""}&healthfacility=${""}&from=${searchitem.datefrom}&to=${
          searchitem.dateto
        }`
      );
      const result = res.data.result;
      setPatients(result);
      setTotalPatients(res.data.count);
    } catch (err) {}
  };

  static getAllPatientsForState = async (
    currentpage,
    searchitem,
    setPatients,
    setTotalPatients
  ) => {
    try {
      const res = await axiosInstance.get(
        `/patients/findwithworkers?page=${currentpage.value}&state=${
          searchitem.state
        }&lga=${""}&healthfacility=${""}&from=${searchitem.datefrom}&to=${
          searchitem.dateto
        }`
      );
      const result = res.data.result;
      setPatients(result);
      setTotalPatients(res.data.count);
    } catch (err) {}
  };

  static getAllPatientsForLga = async (
    currentpage,
    searchitem,
    setPatients,
    setTotalPatients
  ) => {
    const search = searchitem.lga;
    const lga = search.split("/")[0];
    const state = search.split("/")[1];
    try {
      const res = await axiosInstance.get(
        `/patients/findwithworkers?page=${
          currentpage.value
        }&state=${state}&lga=${lga}&healthfacility=${""}&from=${
          searchitem.datefrom
        }&to=${searchitem.dateto}`
      );
      const result = res.data.result;
      setPatients(result);
      setTotalPatients(res.data.count);
    } catch (err) {}
  };

  static getAllPatientsForHealthfacility = async (
    currentpage,
    searchitem,
    setPatients,
    setTotalPatients
  ) => {
    const search = searchitem.healthFacility;
    console.log(search);
    const lga = search.split("/")[2];
    const state = search.split("/")[1];
    const healthfacility = search.split("/")[0];
    try {
      const res = await axiosInstance.get(
        `/patients/findwithworkers?page=${currentpage.value}&state=${state}&lga=${lga}&healthfacility=${healthfacility}&from=${searchitem.datefrom}&to=${searchitem.dateto}`
      );
      const result = res.data.result;
      setPatients(result);
      setTotalPatients(res.data.count);
    } catch (err) {}
  };
}
