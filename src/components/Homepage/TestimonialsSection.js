import { Link } from 'gatsby'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { BsStarFill } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'

function TestimonialsSection( {translator} ) {
    return (
        <section id="testimonials-section" className="testimonials-section h-container v-container skew-section">
            <div className="testimonials-section__container v-container skew-container max-w-page m-auto">
                <Row>
                    <Col lg={6} md={12} className="testimonials-section__info">
                        <p className="testimonials-section__subtitle">{translator.getTranslation("What people think about us")}</p>
                        <h3 className="testimonials-section__title">{translator.getTranslation("We are happy if you are")}</h3>
                        <p className="testimonials-section__description">{translator.getTranslation("See all")}</p>
                        <Link className="btn btn-outline-light btn-lg testimonials-section__button">{translator.getTranslation("Pricing & plans")}</Link>
                    </Col>
                    <Col lg={6} md={12} className="testimonials-section__testimonials">
                        <div className="testimonials-section__card">
                            <div className="testimonials-section__card-image">
                                <FaUserCircle size="64px" />
                            </div>
                            <div className="testimonials-section__card-info">
                                <p className="testimonials-section__card-description">{translator.getTranslation("Young entrepreneurs with great creativity and knowledge in the development of the web page required by the company, high gratitude for the dedication with the activities proposed and jointly agreed")}</p>
                                <div className="testimonials-section__star-container">
                                    <BsStarFill className="testimonials-section__star" />
                                    <BsStarFill className="testimonials-section__star" />
                                    <BsStarFill className="testimonials-section__star" />
                                    <BsStarFill className="testimonials-section__star" />
                                    <BsStarFill className="testimonials-section__star" />
                                </div>
                            </div>
                        </div>
                        <div className="testimonials-section__card">
                            <div className="testimonials-section__card-image">
                                <FaUserCircle size="64px" />
                            </div>
                            <div className="testimonials-section__card-info">
                                <p className="testimonials-section__card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, vel pariatur! Sit, Lorem ipsum dolor sit.</p>
                                <div className="testimonials-section__star-container">
                                    <BsStarFill className="testimonials-section__star" />
                                    <BsStarFill className="testimonials-section__star" />
                                    <BsStarFill className="testimonials-section__star" />
                                    <BsStarFill className="testimonials-section__star" />
                                    <BsStarFill className="testimonials-section__star" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default TestimonialsSection
