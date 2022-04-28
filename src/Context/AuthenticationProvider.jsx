import { createContext, useContext } from "react";
import { useState } from "react";
const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  return (
    <AuthenticationContext.Provider value={{ login, setLogin }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
export const useAuthenticationContext = () => useContext(AuthenticationContext);
