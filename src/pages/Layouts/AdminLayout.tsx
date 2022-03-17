import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminLayout = (props: Props) => {
    return (
        <div>
            <header>
                Header Admin
            </header>
            <div className="admin-layout">
                {/* Phần thay đổi của web sẽ đc để trong phần Outlet */}
                <Outlet />
            </div>
            <footer>
                Footer Admin
            </footer>
        </div>

    )
}

export default AdminLayout