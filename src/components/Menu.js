import { Link } from 'gatsby'
import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'

function Menu(props) {
    return (
        <Nav navbar className={"menu " + props.className}>
            <Link to="#faqs-section" className="menu__link">FAQ's</Link>
            <Link to="#portafolio-section" className="menu__link">Portafolio</Link>
            <Link to="#testimonials-section" className="menu__link">Testimonials</Link>
            <Link to="#pricing-section" className="menu__link">Pricing</Link>
            <Link to="#contact-section" className="menu__link">Contact</Link>
            <NavDropdown title="About us" id="navbarDropDown" className="menu__dropdown">
                <Link to="#" className="menu__link">¿Who we are?</Link>
                <Link to="#" className="menu__link">Privacy policy</Link>
                <Link to="#" className="menu__link">Mission & vision</Link>
                <Link to="#" className="menu__link">our philosophy</Link>
            </NavDropdown>
        </Nav>
    )
}

export default Menu
