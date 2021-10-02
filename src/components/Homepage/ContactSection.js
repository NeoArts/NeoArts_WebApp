import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'
import contact from '../../images/contact.png'

function ContactSection() {
    return (
        <section id="contact-section" className="contact-section h-container v-container skew-section">
            <div className="contact-section__container v-container skew-container">
                <Row>
                    <Col md={12} lg={6} className="contact-section__image-container">
                        <img src={contact} alt="contact-image" className="contact-section__image" />
                    </Col>
                    <Col md={12} lg={6}>
                        <div className="contact-section__info">
                            <h3 className="contact-section__title">¿Still can´t make up your mind?</h3>
                            <p className="contact-section__description">Give us an email to send you a special discount coupon for you</p>
                            <form className="contact-section__form">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" className="w-100 d-block" required />
                                <a href="#" className="w-100 main-button dark">
                                    <div className="main-button__icon">
                                        <FaArrowRight />
                                    </div>
                                    <p className="main-button__text">I want my coupon!</p>
                                </a>
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default ContactSection
