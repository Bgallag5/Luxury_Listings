import React from "react";

const AppContext = React.createContext();

export const AppContextProvider = () => {
  const globalVars = {};

  return <AppContext.Provider value={globalVars}></AppContext.Provider>;
};

export default AppContext;
