import React from 'react'
import ResponsiveDesign from '../../images/responsive-design.png'
import PeopleDesigners from '../../images/people-designer.png'
import BetterSeo from '../../images/best-seo.png'
import { Carousel, Col, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'

function MainSection( {translator} ) {

    return (
        <section className="main-section h-container" id="mainSection">
            <Row noGutters className="main-section__container max-w-page m-auto">
                <Col md={12} lg={6} className="col">
                    <div className="main-section__info">
                        <h3 className="main-section__title">{translator.getTranslation("The best pages at the best prices")}</h3>
                        <p className="main-section__description">{translator.getTranslation("We are a group of students with great skills and knowledge in web development. We offer an affordable alternative for those who, like us, are making their way and want to make themselves known.")}</p>
                        <a href="#contact-section" className="main-button">
                            <div className="main-button__icon">
                                <FaArrowRight />
                            </div>
                            <p className="main-button__text">{translator.getTranslation("I want my web page now!")}</p>
                        </a>
                    </div>
                </Col>
                <Col md={12} lg={6} className="main-section__carousel-container">
                    <div className="carousel-container">
                        <Carousel indicators={false} controls={false}>
                            <Carousel.Item>
                                <img src={ResponsiveDesign} alt="responsive design icon" className="carousel__image" />
                                <div className="carousel__info">
                                    <h3>{translator.getTranslation("Responsive design")}</h3>
                                    <p>{translator.getTranslation("A comfortable site for any device")}</p>
                                </div>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{marginTop: "50px"}} src={PeopleDesigners} alt="responsive design icon" className="carousel__image" />
                                <div className="carousel__info">
                                    <h3>{translator.getTranslation("The perfect look")}</h3>
                                    <p>{translator.getTranslation("A design maded for your business")}</p>
                                </div>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={BetterSeo} alt="responsive design icon" className="carousel__image" />
                                <div className="carousel__info">
                                    <h3>{translator.getTranslation("Better SEO")}</h3>
                                    <p>{translator.getTranslation("The perfect configuration to improve your positioning")}</p>
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
