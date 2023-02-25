import React, { useEffect, useContext, createContext } from "react";
import { useLocalStorageState } from "../utils/hooks";

const AppContext = createContext({
  botStyle: 0,
  setStyleColor: () => {},
});

export const AppContextProvider = ({ children }) => {
  const [botStyle, setBotStyle] = useLocalStorageState('botStyle', 0);

  const setStyleColor = (color) => {
    setBotStyle(color);
  };

  useEffect(() => {}, []);

  return (
    <AppContext.Provider
      value={{
        botStyle: botStyle,
        setStyleColor: setStyleColor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
