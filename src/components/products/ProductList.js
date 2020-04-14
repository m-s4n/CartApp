import React, { Component } from "react";
import { connect } from "react-redux";
import {Badge} from 'reactstrap';
import { bindActionCreators } from "redux";
import {getProducts} from '../../redux/actions/product/productActions';
import {Table} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-regular-svg-icons';


class ProductList extends Component {
  renderSelectedCategory() {
    return <h3><Badge color="warning">Products</Badge> - <Badge color="success">{this.props.currentCategory.categoryName}</Badge></h3>;
  }
  renderUnSelectedCategory() {
    return <h3><Badge color="warning">Products</Badge></h3>;
  }

  componentDidMount(){
    this.props.actions.getProducts(this.props.currentCategory);
  }
  render() {
    return (
      <div>
        {this.props.currentCategory.id === undefined
          ? this.renderUnSelectedCategory()
          : this.renderSelectedCategory()}
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Units in Stock</th>
              <th>Add To Cart </th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.products.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.productName}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.unitsInStock}</td>
                  <td><FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon></td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions:{
      getProducts:bindActionCreators(getProducts,dispatch),
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);
