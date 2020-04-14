import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getCategories,
  changeCategory,
} from "../../redux/actions/category/categoryActions";
import {getProducts} from '../../redux/actions/product/productActions';
import { ListGroup, ListGroupItem, Badge} from "reactstrap";
class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category);
  };
  render() {
    return (
      <div>
        <h3><Badge color="warning">Categories</Badge></h3>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem
              key={category.id}
              onClick={() => this.selectCategory(category)}
              active={
                category.id === this.props.currentCategory.id ? true : false
              }
            >
              {" "}
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(getCategories, dispatch),
      changeCategory: bindActionCreators(changeCategory, dispatch),
      getProducts:bindActionCreators(getProducts,dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
