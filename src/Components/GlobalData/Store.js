import React, { useState } from "react";

const initialState = {
  id: 16,
  presentStage: " ",
  numberStatus: " ",
  numberAddressStatus: " ",
  errorNotes: " ",
  requestNumber: " ",
  countryOfOrigin: " ",
  accessType: " ",
  bulkAccessNoWorkflow: " ",
  sioAcceptanceDate: "",
  commitDate: " ",
  multiBuild: false,

  //2nd page
  searchType: " ",
  country: " ",
  switchdd: " ",
  search_no: 0,
  quantity: 0,
  radio_button_value: "Pre Built Number",
  auto_look_up: false,
  exact: false,
};
export const Context = React.createContext();
const Store = ({ children }) => {
  const [state, setState] = useState(initialState);
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};
export default Store;
