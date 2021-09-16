import React from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import ResponsiveDesign from '../../images/responsive-design.png'
import PeopleDesigners from '../../images/people-designer.png'
import BetterSeo from '../../images/best-seo.png'
import { FaArrowRight } from 'react-icons/fa'

function MainSection() {
    return (
        <section className="main-section h-container" id="mainSection">
            <Row noGutters className="main-section__container">
                <Col md={12} lg={6} className="col">
                    <div className="main-section__info">
                        <h3 className="main-section__title">The best pages at the best prices</h3>
                        <p className="main-section__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe blanditiis officiis facilis inventore dolorum eaque laborum aperiam adipisci voluptate sunt?</p>
                        <a href="#" className="main-button">
                            <div className="main-button__icon">
                                <FaArrowRight />
                            </div>
                            <p className="main-button__text">I want my web page now!</p>
                        </a>
                    </div>
                </Col>
                <Col md={12} lg={6} className="main-section__carousel-container">
                    <div className="carousel-container">
                        <Carousel indicators={false} controls={false}>
                            <Carousel.Item>
                                <img src={ResponsiveDesign} alt="responsive design icon" className="carousel__image" />
                                <div className="carousel__info">
                                    <h3>Responsive design</h3>
                                    <p>A comfortable site for any device</p>
                                </div>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={PeopleDesigners} alt="responsive design icon" className="carousel__image" />
                                <div className="carousel__info">
                                    <h3>The perfect look</h3>
                                    <p>A design maded for your business</p>
                                </div>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={BetterSeo} alt="responsive design icon" className="carousel__image" />
                                <div className="carousel__info">
                                    <h3>Better SEO</h3>
                                    <p>The perfect configuration to improve your positioning</p>
                                </div>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default MainSection
