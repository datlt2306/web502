import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div>
            <aside>Sidebar</aside>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
