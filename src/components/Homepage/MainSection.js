import React from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import ResponsiveDesign from '../../images/responsive-design.png'
import PeopleDesigners from '../../images/people-designer.png'
import BetterSeo from '../../images/best-seo.png'
import { FaArrowRight } from 'react-icons/fa'
import dictionary from '../../languages/en.json'

function MainSection(props) {
    const language = props.language;
    return (
        <section className="main-section h-container" id="mainSection">
            <Row noGutters className="main-section__container max-w-page m-auto">
                <Col md={12} lg={6} className="col">
                    <div className="main-section__info">
                        <h3 className="main-section__title">{dictionary["0"][language]}</h3>
                        <p className="main-section__description">{dictionary["1"][language]}</p>
                        <a href="#" className="main-button">
                            <div className="main-button__icon">
                                <FaArrowRight />
                            </div>
                            <p className="main-button__text">{dictionary["2"][language]}</p>
                        </a>
                    </div>
                </Col>
                <Col md={12} lg={6} className="main-section__carousel-container">
                    <div className="carousel-container">
                        <Carousel indicators={false} controls={false}>
                            <Carousel.Item>
                                <img src={ResponsiveDesign} alt="responsive design icon" className="carousel__image" />
                                <div className="carousel__info">
                                    <h3>{dictionary["3"][language]}</h3>
                                    <p>{dictionary["4"][language]}</p>
                                </div>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={PeopleDesigners} alt="responsive design icon" className="carousel__image" />
                                <div className="carousel__info">
                                    <h3>{dictionary["5"][language]}</h3>
                                    <p>{dictionary["6"][language]}</p>
                                </div>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={BetterSeo} alt="responsive design icon" className="carousel__image" />
                                <div className="carousel__info">
                                    <h3>{dictionary["7"][language]}</h3>
                                    <p>{dictionary["8"][language]}</p>
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
