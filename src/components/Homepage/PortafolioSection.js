import React from 'react'
import { Card } from 'react-bootstrap'
import ensafe from '../../images/logo-ensafe.svg'
import armala from '../../images/logo-armala.svg'
import draCarolina from '../../images/dra_carolina.svg'
import { VscLinkExternal } from 'react-icons/vsc'

function PortafolioSection( {translator} ) {

    return (
        <section id="portafolio-section" className="portafolio-section h-container v-container">
            <div className="portafolio-section__container max-w-page m-auto" id="portafolio-carousel">
                <Card bg="dark" className="portafolio-section__card">
                    <Card.Img variant="top" src={draCarolina} className="portafolio-section__card-image" />
                    <Card.Body className="portafolio-section__card-info">
                        <Card.Title>Dra. Carolina Longlax</Card.Title>
                        <Card.Text>
                            {translator.getTranslation("Orthodontist specialist in the management of malocclusion, providing comprehensive oral health services, with high-quality interdisciplinary management, in early and adult ages")}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="portafolio-section__card-footer">
                        <div className="card__buttons">
                            {/* <a href="#" className="circle-button">
                                <FaGithubSquare size="40px" className="circle-button__icon" />
                            </a> */}
                            <a href="https://doctoracarolinalonglax.com.co/" target={"_blank"} className="circle-button">
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
                            <a href="#" target={"_blank"} className="circle-button">
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
                            {translator.getTranslation("Ensafe SAS is a company specialized in the supply of industrial equipment and personal protection products, in order to ensure the health and safety of people.")}
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
