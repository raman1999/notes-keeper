import { useNavigate, NavLink } from "react-router-dom";
import "./navigation.css";
import { useAuthenticationContext, useUserContext } from "../../Context";
import { toast } from "react-toastify";
export function Navbar() {
  const { login, setLogin } = useAuthenticationContext();
  const { userDispatch } = useUserContext();
  const navigate = useNavigate();

  function logOutHandler() {
    userDispatch({ type: "SET_NOTES", payload: [] });
    userDispatch({ type: "SET_ARCHIEVES", payload: [] });
    setLogin(false);
    localStorage.clear();
    toast.success("Logged out successfully");
    navigate("/login");
  }

  return (
    <>
      <nav className="flex justify-between items-center h-16 sticky top-0 mb-1 p-4 shadow-bottom  bg-white z-10">
        <div className="flex justify-center items-center cursor-pointer ">
          <NavLink to="/" className="font-cursive font-bold text-3xl px-1">
            Notes<span className="text-yellow-600">Keeper</span>
          </NavLink>
        </div>
        <NavLink to="/login" className="btn py-2">
          {!login ? (
            <span>Login</span>
          ) : (
            <span onClick={() => logOutHandler()}>Logout</span>
          )}
        </NavLink>
      </nav>
    </>
  );
}
