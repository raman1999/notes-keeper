import { Navigate, useLocation } from "react-router-dom";
import { useAuthenticationContext } from "../Context";

export function RequiresAuth({ children }) {
  const { login } = useAuthenticationContext();
  const location = useLocation();
  return login ? (
    children
  ) : (
    <Navigate to="/login" state={{ path: location.pathname }} replace />
  );
}
