import React, { createContext, useContext, useState } from "react";


const AppContext = createContext(); 


export const AppProvider = ({ children }) => {
    const [total, setTotal] = useState(0);
  
  
    return (
      <AppContext.Provider value={{total, setTotal }}>
        {children}
      </AppContext.Provider>
    );
  };
  
  export const useApp = () => useContext(AppContext);