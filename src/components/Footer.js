import React from 'react'
import Menu from './Menu'
import neoarts from '../images/neoarts-logo.svg'
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa'

function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="skewed-section-dark"></div>
            <div className="footer__container h-container v-container">
                <img src={neoarts} alt="NeoArts logo" className="footer__brand" />
                <Menu className="m-auto" />
                <div className="footer__social">
                    <a href="#" className="footer__social-link">
                        <FaFacebookF size="36px" className="footer__social-icon" />
                    </a>
                    <a href="#" className="footer__social-link">
                        <FaInstagram size="36px" className="footer__social-icon" />
                    </a>
                    <a href="#" className="footer__social-link">
                        <FaLinkedinIn size="36px" className="footer__social-icon" />
                    </a>
                    <a href="#" className="footer__social-link">
                        <FaYoutube size="36px" className="footer__social-icon" />
                    </a>
                </div>
                <p className="footer__copyright"><span>&copy;</span> 2021 All rights reserved. NeoArts by Artificio</p>
            </div>
        </footer>
    )
}

export default Footer
