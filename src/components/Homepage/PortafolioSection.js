import React, { useState } from 'react'
import { Card, Carousel } from 'react-bootstrap'
import ensafe from '../../images/logo-ensafe.svg'
import armala from '../../images/logo-armala.svg'
import artificio from '../../images/logo-artificio.svg'
import { FaGithubSquare } from 'react-icons/fa'
import { VscLinkExternal } from 'react-icons/vsc'
import CarouselCard from '../Shared/CarouselCard'

function PortafolioSection() {

    return (
        <section id="portafolio-section" className="portafolio-section h-container v-container">
            <div className="portafolio-section__container max-w-page m-auto" id="portafolio-carousel">
                <Card bg="dark" className="portafolio-section__card">
                    <Card.Img variant="top" src={artificio} className="portafolio-section__card-image" />
                    <Card.Body className="portafolio-section__card-info">
                        <Card.Title>Artificio</Card.Title>
                        <Card.Text>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum doloremque sint nisi quia officia alias, optio praesentium voluptatibus tempore vitae.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="portafolio-section__card-footer">
                        <div className="card__buttons">
                            {/* <a href="#" className="circle-button">
                                <FaGithubSquare size="40px" className="circle-button__icon" />
                            </a> */}
                            <a href="#" className="circle-button">
                                <VscLinkExternal size="40px" className="circle-button__icon" />
                            </a>
                        </div>
                    </Card.Footer>
                </Card>
                <Card bg="dark" className="portafolio-section__card">
                    <Card.Img variant="top" src={armala} className="portafolio-section__card-image" />
                    <Card.Body className="portafolio-section__card-info">
                        <Card.Title>Armalá</Card.Title>
                        <Card.Text>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum doloremque sint nisi quia officia alias, optio praesentium voluptatibus tempore vitae.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="portafolio-section__card-footer">
                        <div className="card__buttons">
                            {/* <a href="#" className="circle-button">
                                <FaGithubSquare size="40px" className="circle-button__icon" />
                            </a> */}
                            <a href="#" className="circle-button">
                                <VscLinkExternal size="40px" className="circle-button__icon" />
                            </a>
                        </div>
                    </Card.Footer>
                </Card>
                <Card bg="dark" className="portafolio-section__card">
                    <Card.Img variant="left" src={ensafe} className="portafolio-section__card-image" />
                    <Card.Body className="portafolio-section__card-info">
                        <Card.Title>Ensafe SAS</Card.Title>
                        <Card.Text>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum doloremque sint nisi quia officia alias, optio praesentium voluptatibus tempore vitae.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="portafolio-section__card-footer">
                        <div className="card__buttons">
                            {/* <a href="#" className="circle-button">
                                <FaGithubSquare size="40px" className="circle-button__icon" />
                            </a> */}
                            <a href="http://www.ensafecolombia.com/#/home" target={"_blank"} className="circle-button">
                                <VscLinkExternal size="40px" className="circle-button__icon" />
                            </a>
                        </div>
                    </Card.Footer>
                </Card>
            </div>
        </section>
    )
}

export default PortafolioSection
