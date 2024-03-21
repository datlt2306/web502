import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";

const WebsiteLayout = () => {
    return (
        <div>
            <header>header</header>
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    );
};

export default WebsiteLayout;
