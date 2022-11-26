import React from "react";
import { Outlet } from "react-router";

type Props = {};

const LayoutAdmin = (props: Props) => {
    return (
        <div>
            <h1>Admin</h1>
            <Outlet />
        </div>
    );
};

export default LayoutAdmin;
