import { useState } from "react";
import { createContext } from "react";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("tr");

  const values = { language, setLanguage };
  return (
    <LanguageContext.Provider value={values}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
