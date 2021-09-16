import React from 'react'
import '../styles/styles.scss'
import NavbarTop from './NavbarTop'

function Layout({ children }) {
    return (
        <>
            <NavbarTop />
            {children}
        </>
    )
}

export default Layout
