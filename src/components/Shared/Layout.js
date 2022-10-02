import React from 'react'
import '../../styles/styles.scss'
import Footer from './Footer'
import NavbarTop from './NavbarTop'

function Layout({ children, translator }) {
    return (
        <>
            <NavbarTop translator={translator}/>
            {children}
            <Footer translator={translator}/>
        </>
    )
}

export default Layout
