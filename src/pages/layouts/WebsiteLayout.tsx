import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
        <header>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            Footer
        </footer>
    </div>
  )
}

export default WebsiteLayout