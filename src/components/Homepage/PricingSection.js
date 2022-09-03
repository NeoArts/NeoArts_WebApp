import React from 'react'
import { Card } from 'react-bootstrap'
import dictionary from '../../languages/en.json'

function PricingSection(props) {

    const language = props.language;

    return (
        <section id="pricing-section" className="pricing-section h-container v-container">
            <div className="pricing-section__container max-w-page m-auto">
                <h1 className="pricing-section__title">{dictionary["28"][language]}</h1>
                <p className="pricing-section__description">{dictionary["34"][language]}
                    <a href="#" style={{ color: "red" }} className="pricing-section__description-link"> {dictionary["35"][language]}</a>
                    , {dictionary["36"][language]}
                </p>
                <div className="pricing-section__cards-grid">
                    <Card className="pricing-section__card">
                        <Card.Header className="pricing-section__card-header">
                            <h3>Plan one</h3>
                        </Card.Header>
                        <Card.Body className="pricing-section__card-body">
                            <ul>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                            </ul>
                        </Card.Body>
                        <Card.Footer className="pricing-section__card-footer">
                            <h4>400,000 COP</h4>
                        </Card.Footer>
                    </Card>
                    <Card className="pricing-section__card">
                        <Card.Header className="pricing-section__card-header">
                            <h3>Plan one</h3>
                        </Card.Header>
                        <Card.Body className="pricing-section__card-body">
                            <ul>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                            </ul>
                        </Card.Body>
                        <Card.Footer className="pricing-section__card-footer">
                            <h4>1'000,000 COP</h4>
                        </Card.Footer>
                    </Card>
                    <Card className="pricing-section__card">
                        <Card.Header className="pricing-section__card-header">
                            <h3>Plan one</h3>
                        </Card.Header>
                        <Card.Body className="pricing-section__card-body">
                            <ul>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                            </ul>
                        </Card.Body>
                        <Card.Footer className="pricing-section__card-footer">
                            <h4>1'500,000 COP</h4>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default PricingSection
