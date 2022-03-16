import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
        <header>
            <Header />
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