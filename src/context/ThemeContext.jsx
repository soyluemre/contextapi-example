import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const toggleThemeMode = () => {
    setTheme(!theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
