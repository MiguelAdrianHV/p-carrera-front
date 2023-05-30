import { Navigate } from "react-router-dom";

export const RouteContainer = ({ children, isPrivate }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (!isPrivate && userInfo) {
    return <Navigate to="/" />;
  }
  if (isPrivate && !userInfo) {
    return <Navigate to="/login" />;
  }
  return children;
};
