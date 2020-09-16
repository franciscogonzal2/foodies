import React, { Component } from 'react';
import FoodiesHeader from '../../components/Header/FoodiesHeader';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import FoodiesMenu from '../../components/Menu/Menu';
import Button from "react-bootstrap/Button";
import PropTypes from 'prop-types';
import {getContactAsync} from "../../actions/ContactUs";
import "./Contact.css";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dataContact: state.contact.get('contact'),
  };
}
class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputNameValue: "",
      inputEmailValue:"",
      inputMessageValue:"",
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }
  handleNameChange = (e) => {
    this.setState({ 
      inputNameValue: e.target.value,
    })
  }
  handleEmailChange = (e) => {
    this.setState({ 
      inputEmailValue: e.target.value,
    })
  }
  handleMessageChange = (e) => {
    this.setState({ 
      inputMessageValue: e.target.value,
    })
  }
  onClick(){
    const {inputEmailValue, inputMessageValue, inputNameValue} = this.state
    const {dispatch} = this.props;
   const  data = {
      name:inputNameValue,
      email:inputEmailValue,
      message:inputMessageValue
    }
    dispatch(getContactAsync(data))
  }

  renderMenu() {
    return (
      <div>
        <FoodiesMenu />
      </div>
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
  renderContactUs() {
    return (
      <div className="wrapperContainer">
        <Container>
          <Container>
            <Row>
              <Col xs={12} >
                <div>
                  <div className="content-Contact">
                    <span className="titleContact">{"cuentanos tu experiencia"}</span>
                    <span className="subtitleContact">{"Dont miss our great offer & received deals from all our top retauran via Email"}</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Row>
            <Col xs={12} md={6}>
              <Form.Group>
                <Form.Label className="labelContact">Nombre:</Form.Label>
                <Form.Control size="md" type="text" placeholder="Name"  onChange={this.handleNameChange} />
                <Form.Label className="labelContact">Email:</Form.Label>
                <Form.Control size="md" type="text" placeholder="Email" onChange={this.handleEmailChange} />
              </Form.Group>
            </Col>
            <Col xs={12} lg={6}>
              <Form.Group>
                <Form.Label  className="labelContact">Comentario:</Form.Label>
                <Form.Control as="textarea" rows={2} onChange={this.handleMessageChange}/>
              </Form.Group>
              <Button className={"buttonContact"} onClick={()=>this.onClick()} variant="outline-warning">Send</Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

  render() {
    return (
      <div>
        { this.renderMenu()}
        { this.renderHeader()}
        {this.renderContactUs()}
      </div>

    );
  }
}

Contact.propTypes = {
  dispatch: PropTypes.func,
  dataContact: PropTypes.object,
};
export default connect(mapStateToProps)(Contact);
