import React from 'react'
import '../styles/styles.scss'
import Footer from './Footer'
import NavbarTop from './NavbarTop'

function Layout({ children }) {
    return (
        <>
            <NavbarTop />
            {children}
            <Footer/>
        </>
    )
}

export default Layout
