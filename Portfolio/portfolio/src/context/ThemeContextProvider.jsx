/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const MyThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  let [theme, setTheme] = useState("white-mode");

  let value = {
    theme,
    setTheme,
  };

  return (
    <MyThemeContext.Provider value={value}>{children}</MyThemeContext.Provider>
  );
}
