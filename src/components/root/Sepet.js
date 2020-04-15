import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import CategoryList from "../categories/CategoryList";
import CartDetailList from "../cart/CartDetailList";

class Sepet extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="3">
            <CategoryList />
          </Col>
          <Col xs="9">
            <CartDetailList />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Sepet;
