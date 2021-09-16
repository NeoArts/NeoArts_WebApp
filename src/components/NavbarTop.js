import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Menu from './Menu'
import NeoArtsLogo from '../images/neoarts-logo.svg'

const checkMenuState = () => {
    var navbar = document.getElementById('navbar');
    var top = document.getElementById('navbar-icon-bar_top');
    var middle = document.getElementById('navbar-icon-bar_middle');
    var bottom = document.getElementById('navbar-icon-bar_bottom');

    if (navbar.classList.contains('show')) {
        top.classList.remove('open');
        middle.classList.remove('open');
        bottom.classList.remove('open');
        top.classList.add('close');
        middle.classList.add('close');
        bottom.classList.add('close');
    }
    else {
        top.classList.add('open');
        middle.classList.add('open');
        bottom.classList.add('open');
        top.classList.remove('close');
        middle.classList.remove('close');
        bottom.classList.remove('close');
    }
}

function NavbarTop() {
    return (
        <Container fluid={true}>
            <Navbar expand="md" className="navbar fixed-top h-container">
                <Navbar.Brand href="#" className="navbar__brand">
                    <img src={NeoArtsLogo} alt="" className="navbar__brand-image" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar" className="navbar-icon" onClick={checkMenuState}>
                    <div id="navbar-icon-bar_top"></div>
                    <div id="navbar-icon-bar_middle"></div>
                    <div id="navbar-icon-bar_bottom"></div>
                </Navbar.Toggle>
                <Navbar.Collapse id="navbar">
                    <Menu className="navbar__dropdown-menu ms-auto" />
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default NavbarTop
