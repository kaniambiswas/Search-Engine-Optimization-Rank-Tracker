import { Outlet, Navigate } from "react-router-dom";
import { useApp } from "../context/AppContex";

export default function ProtectedRoute() {
    const { token, loading } = useApp();

    // 1. Show spinner while checking user status
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-dark-900">
                <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    // 2. If no token is found, redirect to the login page
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // 3. If they have a token, allow them to view the protected route (Dashboard)
    return <Outlet />;
}