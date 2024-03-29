import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { ImRocket } from 'react-icons/im'
import { IoMdPricetags } from 'react-icons/io'
import { RiMoneyEuroCircleFill } from 'react-icons/ri'
import { BiTargetLock } from 'react-icons/bi'
import { Col, Collapse, Row } from 'react-bootstrap'

function FaqsSection() {

    const [isOpen, setOpen] = useState(false);

    return (
        <section className="faqs-section h-container v-container skew-section" id="faqs-section">
            <div className="faqs-section__container skew-container">
                <h1 className="faqs-section__title">Here you have four main reasons</h1>
                <div className="faqs-section__grid-container">
                    <div className="faqs-section__item">
                        <div className="faqs-section__item-info light-color">
                            <IoMdPricetags className="faqs-section__icon" size='80px' />
                            <p className="faqs-section__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptate!</p>
                        </div>
                    </div>
                    <div className="faqs-section__item">
                        <div className="faqs-section__item-info light-color">
                            <RiMoneyEuroCircleFill className="faqs-section__icon" size='80px' />
                            <p className="faqs-section__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptate!</p>
                        </div>
                    </div>
                    <div className="faqs-section__item">
                        <div className="faqs-section__item-info light-color">
                            <BiTargetLock className="faqs-section__icon" size='80px' />
                            <p className="faqs-section__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptate!</p>
                        </div>
                    </div>
                    <div className="faqs-section__item">
                        <div className="faqs-section__item-info light-color">
                            <ImRocket className="faqs-section__icon" size='80px' />
                            <p className="faqs-section__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptate!</p>
                        </div>
                    </div>
                </div>
                <button className="collapse-button" onClick={() => setOpen(!isOpen)} aria-controls="collapse-faqs" aria-expanded={isOpen}>
                    <div className="collapse-button__icon">
                        <FaArrowRight size='20px' style={isOpen ? { transform: "rotate(90deg)", transition: 'all ease-in-out 200ms' } : { transform: "rotate(0deg)", transition: 'all ease-in-out 200ms' }} />
                    </div>
                    <p className="collapse-button__text">¿Need more reasons?</p>
                </button>
                <Collapse in={isOpen}>
                    <div id="collapse-faqs">
                        <Row>
                            <Col lg={6} md={12}>
                                <div className="card">
                                    <div className="card-header">
                                        ¿Lorem ipsum dolor sit amet?
                                    </div>
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veritatis.
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={12}>
                                <div className="card">
                                    <div className="card-header">
                                        ¿Lorem ipsum dolor sit amet?
                                    </div>
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veritatis.
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={12}>
                                <div className="card">
                                    <div className="card-header">
                                        ¿Lorem ipsum dolor sit amet?
                                    </div>
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veritatis.
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={12}>
                                <div className="card">
                                    <div className="card-header">
                                        ¿Lorem ipsum dolor sit amet?
                                    </div>
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veritatis.
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={12}>
                                <div className="card">
                                    <div className="card-header">
                                        ¿Lorem ipsum dolor sit amet?
                                    </div>
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veritatis.
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={12}>
                                <div className="card">
                                    <div className="card-header">
                                        ¿Lorem ipsum dolor sit amet?
                                    </div>
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veritatis.
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Collapse>
            </div>
        </section>
    )
}

export default FaqsSection
