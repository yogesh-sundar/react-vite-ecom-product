import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {

    const userInfo = localStorage.getItem("loginUserInfo");
    const {email, password} = JSON.parse(userInfo) || {};

    if (!email || !password) {
        return <Navigate to="/login" replace />;
    }
    return <Outlet />
}