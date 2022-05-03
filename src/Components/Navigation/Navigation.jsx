import { MdLogout, MdDarkMode, MdLightMode } from "react-icons/md";
import { useNavigate, NavLink } from "react-router-dom";
import {
  useAuthenticationContext,
  useUserContext,
  useTheme,
} from "../../Context";
import { toast } from "react-toastify";
export function Navbar() {
  const { login, setLogin } = useAuthenticationContext();
  const { userDispatch } = useUserContext();
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  function logOutHandler() {
    userDispatch({ type: "SET_NOTES", payload: [] });
    userDispatch({ type: "SET_ARCHIEVES", payload: [] });
    userDispatch({ type: "SET_TRASH", payload: [] });
    setLogin(false);
    localStorage.clear();
    toast.success("Logged out successfully");
    navigate("/login");
  }

  return (
    <>
      <nav className="flex justify-between items-center  h-16 sticky top-0 mb-1 p-4 text-gray-600  bg-white z-10 shadow-bottom  dark:bg-black  dark:text-white dark:shadow-sm dark:shadow-gray-300">
        <div className=" cursor-pointer lg:ml-7">
          <NavLink to="/" className="font-cursive font-bold text-3xl">
            Notes<span className="text-yellow-600">Keeper</span>
          </NavLink>
        </div>
        <div className="flex items-center gap-12 sm:gap-5">
          <span
            className=""
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <MdDarkMode size={25} />
            ) : (
              <MdLightMode size={25} />
            )}
          </span>
          <NavLink to="/login" className="py-2">
            {!login ? (
              <span className="btn">Login</span>
            ) : (
              <span className="text-2xl" onClick={() => logOutHandler()}>
                <MdLogout />
              </span>
            )}
          </NavLink>
        </div>
      </nav>
    </>
  );
}
