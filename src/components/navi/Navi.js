import React, { Component } from "react";
import CartSummary from "../cart/CartSummary";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

export default class Navi extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarText>
            <Link to="/">Home Page</Link>
          </NavbarText>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
             
              <NavItem>
                <NavLink href="#">
                  GitHub
                </NavLink>
              </NavItem>
              <CartSummary />
            </Nav>
            <NavbarText>Seymen</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
