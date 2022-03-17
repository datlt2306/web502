import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const WebsiteLayout = (props: Props) => {
    return (
        <div>
            <header>
                Header Website
            </header>
            <div className="web-layout">
                <Outlet />
            </div>
            <footer>
                Footer Website
            </footer>
        </div>
    )
}

export default WebsiteLayout