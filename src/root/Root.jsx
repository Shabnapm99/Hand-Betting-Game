import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'

function Root() {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    )
}

export default Root