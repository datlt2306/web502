import React from "react";
import { Navigate } from "react-router";

type RequireAuthProps = {
    children: React.ReactNode;
};

const RequireAuth = ({ children }: RequireAuthProps) => {
    const isAdmin = false;
    // lay localStorage ra
    if (!isAdmin) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default RequireAuth;
