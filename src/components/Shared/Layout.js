import React from 'react'
import '../../styles/styles.scss'
import Footer from './Footer'
import NavbarTop from './NavbarTop'

function Layout({ children }) {
    return (
        <>
            <NavbarTop language={children[0].props.language}/>
            {children}
            <Footer language={children[0].props.language}/>
        </>
    )
}

export default Layout
