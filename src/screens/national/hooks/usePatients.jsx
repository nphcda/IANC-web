import { useEffect, useState } from "react";
import { ApiCalls } from "../services/apiCalls";

const usePatients = (searchitem, filter, currentpage) => {
  const [patients, setPatients] = useState();
  const [totalPatients, setTotalPatients] = useState();

  useEffect(() => {
    if (searchitem?.state == "all") {
      ApiCalls.getAllPatients(
        currentpage,
        searchitem,
        setPatients,
        setTotalPatients
      );
    }

    if (searchitem?.state !== "" && searchitem?.state !== "all") {
      ApiCalls.getAllPatientsForState(
        currentpage,
        searchitem,
        setPatients,
        setTotalPatients
      );
    }

    if (searchitem?.lga !== "" && searchitem?.lga !== "all") {
      ApiCalls.getAllPatientsForLga(
        currentpage,
        searchitem,
        setPatients,
        setTotalPatients
      );
    }

    if (
      searchitem?.healthFacility !== "" &&
      searchitem?.healthFacility !== "all"
    ) {
      ApiCalls.getAllPatientsForHealthfacility(
        currentpage,
        searchitem,
        setPatients,
        setTotalPatients
      );
    }
    if (
      searchitem?.healthFacility == "all" ||
      searchitem?.lga == "all" ||
      searchitem?.state == "all"
    ) {
      ApiCalls.getAllPatients(
        currentpage,
        searchitem,
        setPatients,
        setTotalPatients
      );
    }
    if (
      searchitem?.healthFacility == "all" &&
      searchitem?.lga == "all" &&
      searchitem?.state == "all"
    ) {
      ApiCalls.getAllPatients(
        currentpage,
        searchitem,
        setPatients,
        setTotalPatients
      );
    }
    console.log(searchitem, filter, patients);
  }, [currentpage.value, searchitem, filter]);

  return { patients, totalPatients };
};

export default usePatients;
