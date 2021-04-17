import React from "react";
const WinesContext = React.createContext();

const WinesProvider = () => {
  return <WinesContext.Provider></WinesContext.Provider>;
};

export { WinesContext, WinesProvider };
