import { createContext, useContext } from "react";
import useFirebase from "../Firebase/useFirebase";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const firebase = useFirebase();

  return (
    <AuthContext.Provider value={firebase}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth, AuthProvider };
