import { useQuery } from "@tanstack/react-query";
import enumerationService from "../services/enumeration.service";

export const useGetEnumerationData = ({
  pageNumber,
  state,
  lga,
  ward,
  dateCreated,
}) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["enumerationData", pageNumber, state, lga, ward, dateCreated],
    queryFn: () =>
      enumerationService.getSubmissions(
        pageNumber,
        state,
        lga,
        ward,
        dateCreated
      ),
  });
  return { data, isLoading, error };
};

export const useGetActiveStates = ({ pageNumber }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["activeStates", pageNumber],
    queryFn: () => enumerationService.getActiveStates(pageNumber),
    enabled: !!pageNumber,
  });
  return { activeStates: data, isLoading, error };
};

export const useGetAllEnumerators = ({ pageNumber }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["allEnumerators", pageNumber],
    queryFn: () => enumerationService.getEnumerators(pageNumber),
  });
  return { enumerators: data, isLoading, error };
};

export const useGetEnumerationWidgetData = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["enumerationWidgetData"],
    queryFn: enumerationService.getEnumerationWidgetAnalytics,
  });
  return { widgetdata: data, isLoading, error };
};
export const useGetLoginCredentials = ({ pageNumber }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["loginCredentials", pageNumber],
    queryFn: () => enumerationService.getLoginCredentials(pageNumber),
  });
  return { credentials: data, isLoading, error };
};

export const useGetAllStates = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["ievStates"],
    queryFn: () => enumerationService.getIevStates(),
  });
  return { states: data, isLoading, error };
};
export const useGetAllLgas = ({ state, enabled }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["ievLgas", state],
    queryFn: () => enumerationService.getIevLgas(state),
    enabled: enabled,
  });
  return { lgas: data, isLoading, error };
};
export const useGetAllWards = ({ state, lga, enabled }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["ievWards", state, lga],
    queryFn: () => enumerationService.getIevWards(state, lga),
    enabled: enabled,
  });
  return { wards: data, isLoading, error };
};
export const useGetAllSettlements = ({ state, lga, ward, enabled }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["ievSettlements", state, lga, ward],
    queryFn: () => enumerationService.getIevSettlements(state, lga, ward),
    enabled: enabled,
  });
  return { settlements: data, isLoading, error };
};

export const useGetAllHealthFacilities = ({ state, lga, ward, enabled }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["ievHealthFacilities", state, lga, ward],
    queryFn: () => enumerationService.getIevHealthFacilities(state, lga, ward),
    enabled: enabled,
  });
  return { healthFacilities: data, isLoading, error };
};
