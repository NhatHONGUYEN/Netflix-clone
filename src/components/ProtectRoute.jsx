import { Navigate } from "react-router-dom";
import UserAuth from "../context/AuthContext";

export default function ProtectRoute({ children }) {
  if (!UserAuth) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
