import React from 'react'
import { Card } from 'react-bootstrap'
import { FaGithubSquare } from 'react-icons/fa'
import { VscLinkExternal } from 'react-icons/vsc'

function CarouselCard(props) {
    return (
        <Card bg="dark" className="portafolio-section__card">
            <Card.Img variant="top" src={props.image} className="portafolio-section__card-image" />
            <Card.Body className="portafolio-section__card-info">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="portafolio-section__card-footer">
                <div className="card__buttons">
                    <a href="#" className="circle-button">
                        <FaGithubSquare size="40px" className="circle-button__icon" />
                    </a>
                    <a href="#" className="circle-button">
                        <VscLinkExternal size="40px" className="circle-button__icon" />
                    </a>
                </div>
            </Card.Footer>
        </Card>
    )
}

export default CarouselCard
