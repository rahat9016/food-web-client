import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  return auth.authenticate ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default PrivateRoute;
