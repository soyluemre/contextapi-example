import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LanguageProvider from "./context/LanguageContext";
import LoginProvider from "./context/LoginContext";
import ThemeProvider from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LanguageProvider>
    <ThemeProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </ThemeProvider>
  </LanguageProvider>
);
