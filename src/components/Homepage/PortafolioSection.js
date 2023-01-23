import React from 'react'
import { Card } from 'react-bootstrap'
import ensafe from '../../images/logo-ensafe.svg'
import vic from '../../images/vic.png'
import draCarolina from '../../images/dra_carolina.svg'
import { VscLinkExternal } from 'react-icons/vsc'

function PortafolioSection( {translator} ) {

    return (
        <section id="portafolio-section" className="portafolio-section h-container v-container">
            <h1 className="portafolio-section__title">{translator.getTranslation("They trusted in us")}</h1>
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
                    <Card.Img variant="top" src={vic} className="portafolio-section__card-image" />
                    <Card.Body className="portafolio-section__card-info">
                        <Card.Title>VIC Model</Card.Title>
                        <Card.Text>
                          {translator.getTranslation("Laura Victoria is a model with more than 4 years of experience in the field of modeling, participant in brand modeling for medicaline and working as an artistic model with independent photographers")}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="portafolio-section__card-footer">
                        <div className="card__buttons">
                            {/* <a href="#" className="circle-button">
                                <FaGithubSquare size="40px" className="circle-button__icon" />
                            </a> */}
                            <a href="https://neoarts.github.io/VIC/" target={"_blank"} className="circle-button">
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
