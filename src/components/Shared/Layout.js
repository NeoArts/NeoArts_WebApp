import React from 'react'
import '../../styles/styles.scss'
import Footer from './Footer'
import NavbarTop from './NavbarTop'

function Layout({ children }) {
    let child = children;

    if(children[0] !== undefined) {
        child = children[0];
    }
    else{
        child = children;
    }

    return (
        <>
            <NavbarTop translator={child.props.translator}/>
            {children}
            <Footer translator={child.props.translator}/>
        </>
    )
}

export default Layout
