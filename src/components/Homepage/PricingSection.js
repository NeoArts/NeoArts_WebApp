import React from 'react'
import { Card } from 'react-bootstrap'
import Button from '../Shared/Button/Button'

function PricingSection( {translator} ) {

    return (
        <section id="pricing-section" className="pricing-section h-container v-container">
            <div className="pricing-section__container max-w-page m-auto">
                <h1 className="pricing-section__title">{translator.getTranslation("Pricing & plans")}</h1>
                <p className="pricing-section__description">{translator.getTranslation("No aditional costs, no")}
                    <a href="#" style={{ color: "red" }} className="pricing-section__description-link"> {translator.getTranslation("fake Marketing")}</a>
                    , {translator.getTranslation("we are always transparent. Choose the best plan for you")}
                </p>
                <div className="pricing-section__cards-grid">
                    <Card className="pricing-section__card">
                        <Card.Header className="pricing-section__card-header">
                            <h3>{translator.getTranslation("Plan Social Media")}</h3>
                        </Card.Header>
                        <Card.Body className="pricing-section__card-body">
                            <ul>
                                <li>{translator.getTranslation("The best configuration for Facebook and Instagram")}</li><hr/>
                                <li>{translator.getTranslation("9 persinalized publications")}</li><hr/>
                                <li>{translator.getTranslation("Two featured stories")}</li><hr/>
                                <li>{translator.getTranslation("Custom icons")}</li><hr/>
                                <li>{translator.getTranslation("Logo creation/vectorization")}</li><hr/>
                                <li>{translator.getTranslation("Design with a perfect corporate identity")}</li>
                            </ul>
                        </Card.Body>
                        <Card.Footer className="pricing-section__card-footer">
                            <h4>350,000 COP</h4>
                            <Button text={translator.getTranslation("I Want This!")} type={"button_primary"}/>
                        </Card.Footer>
                    </Card>
                    <Card className="pricing-section__card">
                        <Card.Header className="pricing-section__card-header">
                            <h3>{translator.getTranslation("Plan All In One")}</h3>
                        </Card.Header>
                        <Card.Body className="pricing-section__card-body">
                            <ul>
                                <li>{translator.getTranslation("Greater presence in the Internet world")}</li><hr/>
                                <li>{translator.getTranslation("Best Contact Methods")}</li><hr/>
                                <li>{translator.getTranslation("Whatsapp chat configuration and interconnection")}</li><hr/>
                                <li>{translator.getTranslation("Basic SEO for google positioning")}</li><hr/>
                                <li>{translator.getTranslation("Custom logos and icons")}</li><hr/>
                                <li>{translator.getTranslation("Responsive design, your web in all devices")}</li><hr/>
                                <li>{translator.getTranslation("Optimization for a better user experience")}</li><hr/>
                                <li>{translator.getTranslation("9 persinalized publications")}</li><hr/>
                                <li>{translator.getTranslation("Two featured stories")}</li><hr/>
                                <li>{translator.getTranslation("Design with a perfect corporate identity")}</li>
                            </ul>
                        </Card.Body>
                        <Card.Footer className="pricing-section__card-footer">
                            <h4>870,000 COP</h4>
                            <Button text={translator.getTranslation("I Want This!")} type={"button_primary"}/>
                        </Card.Footer>
                    </Card>
                    <Card className="pricing-section__card">
                        <Card.Header className="pricing-section__card-header">
                            <h3>{translator.getTranslation("Plan Web Page")}</h3>
                        </Card.Header>
                        <Card.Body className="pricing-section__card-body">
                            <ul>
                                <li>{translator.getTranslation("Connection with social media")}</li><hr/>
                                <li>{translator.getTranslation("Contact form")}</li><hr/>
                                <li>{translator.getTranslation("Whatsapp chat connection")}</li><hr/>
                                <li>{translator.getTranslation("Privacy policy section")}</li><hr/>
                                <li>{translator.getTranslation("Basic SEO for google positioning")}</li><hr/>
                                <li>{translator.getTranslation("Custom logos and icons")}</li><hr/>
                                <li>{translator.getTranslation("Responsive design, your web in all devices")}</li><hr/>
                                <li>{translator.getTranslation("Optimization for a better user experience")}</li>
                            </ul>
                        </Card.Body>
                        <Card.Footer className="pricing-section__card-footer">
                            <h4>560,000 COP</h4>
                            <Button text={translator.getTranslation("I Want This!")} type={"button_primary"}/>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default PricingSection
