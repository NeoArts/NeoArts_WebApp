import { Link } from 'gatsby'
import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import dictionary from '../../languages/en.json'
import { navigate } from "gatsby"

function Menu(props) {

    const language = props.language;
    return (
        <Nav navbar className={"menu " + props.className}>
            <Link to="/#faqs-section" className="menu__link">{dictionary["9"][language]}</Link>
            <Link to="/#portafolio-section" className="menu__link">{dictionary["10"][language]}</Link>
            <Link to="/#testimonials-section" className="menu__link">{dictionary["11"][language]}</Link>
            <Link to="/#pricing-section" className="menu__link">{dictionary["12"][language]}</Link>
            <Link to="/#contact-section" className="menu__link">{dictionary["13"][language]}</Link>
            <a onClick={() => navigate('../Quote/')} params={{ language: language }} className="menu__link">{dictionary["37"][language]}</a>
            <NavDropdown title={dictionary["14"][language]} id="navbarDropDown" className="menu__dropdown">
                <Link to="#" className="menu__link">{dictionary["15"][language]}</Link>
                <Link to="#" className="menu__link">{dictionary["16"][language]}</Link>
                <Link to="#" className="menu__link">{dictionary["17"][language]}</Link>
                <Link to="#" className="menu__link">{dictionary["18"][language]}</Link>
            </NavDropdown>
        </Nav>
    )
}

export default Menu
