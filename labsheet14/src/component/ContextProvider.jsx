import { createContext, useState } from "react";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [shareData, setShareData] = useState("initialData");

  return (
    <MyContext.Provider value={{ shareData, setShareData }}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
