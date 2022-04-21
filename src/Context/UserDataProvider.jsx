import { createContext, useContext } from "react";
import { useReducer } from "react";
import axios from "axios";
import { userReducer } from "../Reducer/userData-reducer";
import { useAuthenticationContext } from "./AuthenticationProvider";
import { useEffect } from "react";
const UserDataContext = createContext();

const initialArgs = {
  notes: [],
  archivedNotes: [],
  trashedNotes: [],
  pinnedNotes: [],
  labels: ["Work", "Home", "Chore", "Exercise"],
};

export const UserDataProvider = ({ children }) => {
  const { login } = useAuthenticationContext();
  const [userState, userDispatch] = useReducer(userReducer, initialArgs);
  const header = { headers: { authorization: localStorage.getItem("token") } };

  useEffect(() => {
    if (login === true) {
      (async () => {
        const {
          data: { notes },
        } = await axios.get("/api/notes", header);
        userDispatch({ type: "SET_NOTES", payload: notes });
        const {
          data: { archieves },
        } = await axios.get("/api/archieves", header);
        userDispatch({ type: "SET_ARCHIEVES", payload: archieves });
      })();
    }
  }, [login]);

  return (
    <UserDataContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserDataContext.Provider>
  );
};
export const useUserContext = () => useContext(UserDataContext);
