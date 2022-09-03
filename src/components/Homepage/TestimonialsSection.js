import { Link } from 'gatsby'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import dictionary from '../../languages/en.json'

function TestimonialsSection(props) {

    const language = props.language;

    return (
        <section id="testimonials-section" className="testimonials-section h-container v-container skew-section">
            <div className="testimonials-section__container v-container skew-container max-w-page m-auto">
                <Row>
                    <Col lg={6} md={12} className="testimonials-section__info">
                        <p className="testimonials-section__subtitle">{dictionary["11"][language]}</p>
                        <h3 className="testimonials-section__title">{dictionary["25"][language]}</h3>
                        <p className="testimonials-section__description">{dictionary["26"][language]}</p>
                        <Link className="btn btn-outline-light btn-lg testimonials-section__button">{dictionary["27"][language]}</Link>
                    </Col>
                    <Col lg={6} md={12} className="testimonials-section__testimonials">
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
                                    <BsStarHalf className="testimonials-section__star" />
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
