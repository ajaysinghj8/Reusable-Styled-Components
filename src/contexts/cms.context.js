import React, { useContext, createContext } from "react";

const CmsContext = createContext();

export default CmsContext;

export function CmsContextProvider({ children, value }) {
  return <CmsContext.Provider value={value}>{children}</CmsContext.Provider>;
}
