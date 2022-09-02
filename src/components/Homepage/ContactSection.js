import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'
import contact from '../../images/contact.png'
import emailjs from 'emailjs-com'

function ContactSection() {

    function sendEmail(event) {
        event.preventDefault()
    
        emailjs
            .sendForm(
                "service_v2ykj32",
                "template_gwwcapk",
                event.target,
                "8A67iZ0U9y_nny9Wq"
            )
            .then(
                result => {
                console.log(result.text)
                },
                error => {
                console.log(error.text)
                }
            )
        
    };

    return (
        <section id="contact-section" className="contact-section h-container v-container skew-section">
            <div className="contact-section__container v-container skew-container max-w-page m-auto">
                <Row>
                    <Col md={12} lg={6} className="contact-section__image-container">
                        <img src={contact} alt="contact-image" className="contact-section__image" />
                    </Col>
                    <Col md={12} lg={6}>
                        <div className="contact-section__info">
                            <h3 className="contact-section__title">¿Still can´t make up your mind?</h3>
                            <p className="contact-section__description">Give us an email to send you a special discount coupon for you</p>
                            <form className="contact-section__form" onSubmit={sendEmail}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" className="w-100 d-block" style={{paddingLeft: "10px"}} required />
                                <a href="#" className="w-100 main-button dark">
                                    <div className="main-button__icon">
                                        <FaArrowRight />
                                    </div>
                                    <button className="main-button__text no-default">I want my coupon!</button>
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
