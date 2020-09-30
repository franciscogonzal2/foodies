import React, { Component } from 'react';
import Carrousel from '../../components/Carrousel/Carrousel';
import FoodiesHeader from '../../components/Header/FoodiesHeader';
import FoodiesMenu from '../../components/Menu/Menu';
import "./Home.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image'
import enjoy from "../../../image/enjoy.PNG";
class Home extends Component {

  renderMenu() {
    return (
      <FoodiesMenu />
    )
  }

  renderHeader() {
    return (
      <div className={"wrapper"} >
        <FoodiesHeader
          title={"Un nuevo sabor esta en"}
          subtitle={"la ciudad"}
          description={"Estamos a punto de descubrir un mundo llenode sabores y de emociones inigualables"}
        />
      </div>
    );
  }
  renderWhoWeAre() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={6} >
            <Image src={enjoy} alt='enjoy' fluid />
          </Col>
          <Col xs={12} md={6}>
            <div className="whoWeAreContent">
              <div className="content-Title">
                <span className="titleWhoWeAre">{"¿Quien es foodies?"}</span>
                <span className="subtitleWhoWeAre">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique tellus sed vulputate scelerisque. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat ante leo, a rutrum urna pellentesque vitae. Praesent at vulputate tortor. Mauris laoreet eu mauris quis congue. Vestibulum quis neque magna."}</span>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  render() {
    return (
      <div>
        { this.renderMenu()}
        { this.renderHeader()}
        {this.renderWhoWeAre()}
        <Carrousel></Carrousel>
      </div>

    );
  }
}
export default Home;