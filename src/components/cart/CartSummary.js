import React, { Component } from "react";
import {connect} from 'react-redux';
import {reduceFromCart, removeFromCart} from '../../redux/actions/cart/cartActions';
import {
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  NavbarText,
  Badge
} from "reactstrap";
import { bindActionCreators } from "redux";
import {Link} from 'react-router-dom';

 class CartSummary extends Component {

  renderCartFilled(){
    return(
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
        {
          this.props.cart.map(product => (
            <DropdownItem key={product.id}>{product.productName} - <Badge color="success">{product.quantity}</Badge></DropdownItem>
          ))
        }
          <DropdownItem divider />
          <DropdownItem><Link to="/sepet">Go To Cart</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
  renderCartEmpty(){
    return(
      <NavbarText>Cart Empty</NavbarText>
    )
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderCartFilled() : this.renderCartEmpty()}
      </div>
    );
  }
}


function mapDispatchToProps(dispatch){
  return {
    actions:{
      removeFromCart:bindActionCreators(removeFromCart,dispatch),
      reduceFromCart:bindActionCreators(reduceFromCart,dispatch)
    }
  }
}

function mapStateToProps(state){
  return {
    cart:state.cartReducer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
