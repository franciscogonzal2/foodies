import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import PropTypes from 'prop-types';
import "./Carrousel.css"

const Carrousel = props => {
    return (
        <div className={"containerCarrousel"}>
        <Carousel>
        <Carousel.Item>
          <Carousel.Caption>
            <div>First slide label</div>
            <div>Nulla vitae elit libero, a pharetra augue mollis interdum.</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
          <div>First slide label</div>
            <div>Nulla vitae elit libero, a pharetra augue mollis interdum.</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
          <div>First slide label</div>
            <div>Nulla vitae elit libero, a pharetra augue mollis interdum.</div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
};

Carrousel.propTypes = {
    title: PropTypes.string,
};

export default Carrousel;