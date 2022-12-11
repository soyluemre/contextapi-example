import { useState } from "react";
import { createContext } from "react";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [login, setLogin] = useState(false);

  const values = { user, setUser, login, setLogin };
  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;
