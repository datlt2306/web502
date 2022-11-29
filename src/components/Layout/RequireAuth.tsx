import React from "react";
import { Navigate } from "react-router";

type RequireAuthProps = {
    children: React.ReactElement;
};

const RequireAuth = ({ children }: RequireAuthProps) => {
    const isAdmin = true;
    // lay localStorage ra
    if (!isAdmin) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default RequireAuth;
