
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./ItemMenu.css";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';

class ItemMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: "",
      onClickValue:"",
    }
    this.handleChange = this.handleChange.bind(this);
  }


  searchingFor(term) {
    return ((x) => {
      let byName;
      let byCategory;
      if(x.name){
        byName = x.name.toLowerCase().includes(term.toLowerCase()) || !term;
      }
      if(x.category){
        byCategory = x.category.toLowerCase().includes(term.toLowerCase()) || !term;
      }     
      if (byName !== false) {
        return byName;
      }
      if (byCategory !== false) {
        return byCategory;
      }
      return false;
    })
  }

  handleChange = (e) => {
    this.setState({ 
      inputValue: e.target.value,
      onClickValue: ""
    })
  }

handleClick(term) {
    this.setState({ 
      onClickValue: term,
      inputValue:""
     })
  }
  renderInput() {
    const { dataCategory } = this.props;
    return (
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <Form.Group>
              <Form.Control onChange={this.handleChange} size="md" type="text" placeholder="Buscar" />
            </Form.Group>
            </Col>
            <Col xs={12} lg={6}>
              <div className="categoryWrapper">
            {
              dataCategory.data.map((item, i) => {
                return (
                  <div className="categoryItem"
                  onClick={()=>this.handleClick(item.name)}
                  key={i}
                >{item.name}</div>
                )
              })
            }
            </div>
          </Col>
        </Row>
      </Container>
    )
  }

  searchFilter(e) {
    this.setState({
      inputValue: e.target.value,
    })
  }

  renderItem() {
    const { inputValue, onClickValue } = this.state;
    const { dataMenu } = this.props;
    let Term =  onClickValue !== "" ? onClickValue : inputValue;

    let Item = dataMenu.data.filter(this.searchingFor(Term)).map((item, i) => {
      return (
        <Col xs={12} sm={12} md={6} lg={4} xl={3} key={i}>
          <Card className={"cardItem"}>
            <Card.Img src={item.image} alt={"no img"} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.description}
                <br />
                <span>{item.category}</span>
                <span>{item.price}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    }
    )
    return (
      <Container>
        <Row className={"rowWrapper"}>
          {Item}
        </Row>
      </Container>
    );
  }

  render() {
    return (
      <div>
        {this.renderInput()}
        {this.renderItem()}
      </div>

    )
  }
}
ItemMenu.propTypes = {
  dataMenu: PropTypes.object,
  dataCategory: PropTypes.object,
};
export default ItemMenu;