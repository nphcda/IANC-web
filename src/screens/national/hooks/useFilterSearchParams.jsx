const useFilterSearchParams = (searchitem) => {
  let state;
  let lga;
  let healthfacility;
  if (
    (searchitem.state == "all" && searchitem.lga == "") ||
    (searchitem.state == "" && searchitem.lga == "all") ||
    (searchitem.state == "" &&
      searchitem.lga == "" &&
      searchitem.healthFacility == "all")
  ) {
    //National
    // console.log("national condition");

    lga = searchitem.lga;
    state = searchitem.state;
    healthfacility = searchitem.healthFacility;
  }
  if (
    searchitem.state == "" &&
    searchitem.lga == "" &&
    searchitem.healthFacility !== "all"
  ) {
    //healthfacility
    // console.log("hf condition");

    const search = searchitem.healthFacility;
    lga = search.split("/")[2];
    state = search.split("/")[1];
    healthfacility = search.split("/")[0];
  }
  if (searchitem.state !== "all" && searchitem.state !== "") {
    //state
    // console.log("state condition");

    state = searchitem.state;
    lga = searchitem.lga;
    healthfacility = searchitem.healthFacility;
  }
  if (
    searchitem.state == "" &&
    searchitem.lga !== "" &&
    searchitem.lga !== "all"
  ) {
    //lga
    console.log("lga condition");
    const search = searchitem.lga;
    lga = search.split("/")[0];
    state = search.split("/")[1];
    healthfacility = searchitem.healthFacility;
  }
  return { state, lga, healthfacility };
};

export default useFilterSearchParams;
