import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AdminRoute = () => {
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  return auth.authenticate && auth.admin === true ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default AdminRoute;
