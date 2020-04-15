import React, { Component } from "react";
import { Table } from "reactstrap";
import { connect } from "react-redux";
import {
  reduceFromCart,
  removeFromCart,
} from "../../redux/actions/cart/cartActions";
import { bindActionCreators } from "redux";
import { Button } from "reactstrap";
import alertify from 'alertifyjs';
class CartDetailList extends Component {

  removeFromCart = (product) => {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + ' deleted from cart',3);
  }

  reduceFromCart = (product) => {
    this.props.actions.reduceFromCart(product);
    alertify.warning(product.productName + ' reduced from cart',3);
  }
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Reduce</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.unitPrice}</td>
              <td>{product.quantity}</td>
              <td>
                <Button color="warning" onClick={() => this.reduceFromCart(product)}>
                  Reduce
                </Button>
              </td>
              <td><Button color="danger" onClick={() => this.removeFromCart(product)}>
              Delete
            </Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return { cart: state.cartReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(removeFromCart, dispatch),
      reduceFromCart: bindActionCreators(reduceFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetailList);
