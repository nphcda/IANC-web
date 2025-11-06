// useEnumerationFilter.js
import { useState, useEffect } from "react";
import {
  useGetAllLgas,
  useGetAllSettlements,
  useGetAllStates,
  useGetAllWards,
} from "../queries/enumeration";

const useEnumerationFilter = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedLga, setSelectedLga] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [dateCreated, setDateCreated] = useState(null);

  const { states } = useGetAllStates();
  const { lgas } = useGetAllLgas({
    state: selectedState,
    enabled: !!selectedState,
  });
  const { wards } = useGetAllWards({
    state: selectedState,
    lga: selectedLga,
    enabled: !!selectedLga,
  });
  const { settlements } = useGetAllSettlements({
    state: selectedState,
    lga: selectedLga,
    ward: selectedWard,
    enabled: !!selectedWard,
  });

  useEffect(() => {
    if (states?.result.length) setSelectedState(states.result[0]);
  }, [states]);

  useEffect(() => {
    if (lgas?.result.length) setSelectedLga(lgas.result[0]);
  }, [lgas]);

  useEffect(() => {
    if (wards?.result.length) setSelectedWard(wards.result[0]);
  }, [wards]);

  return {
    selectedState,
    setSelectedState,
    selectedLga,
    setSelectedLga,
    selectedWard,
    setSelectedWard,
    dateCreated,
    setDateCreated,
    states,
    lgas,
    wards,
    settlements,
  };
};

export default useEnumerationFilter;
