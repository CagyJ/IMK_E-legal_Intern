import React, { useEffect, useContext, createContext, useState } from "react";

const AppContext = createContext({
  botStyle: 0,
  getStyleColor: () => {},
  setStyleColor: () => {},
});

export const AppContextProvider = ({ children }) => {
  const [botStyle, setBotStyle] = useState(0);

  const setStyleColor = (color) => {
    setBotStyle(color);
  };

  const getStyleColor = () => {
    if (botStyle === 0) return "#E57373";
    if (botStyle === 1) return "#81C784";
    if (botStyle === 2) return "#9575CD";
    return "#9575CD";
  };

  useEffect(() => {}, []);

  return (
    <AppContext.Provider
      value={{
        botStyle: botStyle,
        getStyleColor: getStyleColor,
        setStyleColor: setStyleColor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
