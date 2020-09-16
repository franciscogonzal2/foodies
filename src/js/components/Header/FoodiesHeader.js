import React from 'react';
import PropTypes from 'prop-types';
import "./FoodiesHeader.css";
import hamburguer from "../../../image/hamburguerHome.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image'

const FoodiesHeader = props => {
    return (
        <Container>
            <Row>
                <Col xs = {12} md={6}>
                    <div className="app-header">
                        <div className="content-Title">
                            <span className="title">{props.title}</span>
                            <span className="subtitle">{props.subtitle}</span>
                        </div>

                    </div>
                </Col>
                <Col xs = {12} md={6} >
                    <Image src={hamburguer} alt='hamburguer' fluid />
                </Col>
            </Row>
        </Container>
    );
};

FoodiesHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

export default FoodiesHeader;