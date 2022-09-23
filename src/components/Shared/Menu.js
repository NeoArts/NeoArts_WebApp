import { Link } from 'gatsby'
import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'

function Menu( {className, translator} ) {
    return (
        <Nav navbar className={"menu " + className}>
            <Link to="/#faqs-section" className="menu__link">{translator.getTranslation("FAQ's")}</Link>
            <Link to="/#portafolio-section" className="menu__link">{translator.getTranslation("Portfolio")}</Link>
            <Link to="/#testimonials-section" className="menu__link">{translator.getTranslation("Testimonials")}</Link>
            <Link to="/#pricing-section" className="menu__link">{translator.getTranslation("Pricing")}</Link>
            <Link to="/#contact-section" className="menu__link">{translator.getTranslation("Contact")}</Link>
            <NavDropdown title={translator.getTranslation("About us")} id="navbarDropDown" className="menu__dropdown">
                <Link to="#" className="menu__link">{translator.getTranslation("Who we are?")}</Link>
                <Link to="#" className="menu__link">{translator.getTranslation("privacy policy")}</Link>
                <Link to="#" className="menu__link">{translator.getTranslation("Mission & vision")}</Link>
                <Link to="#" className="menu__link">{translator.getTranslation("our philosophy")}</Link>
            </NavDropdown>
        </Nav>
    )
}

export default Menu
