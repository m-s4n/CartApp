import {changeCategoryReducer} from './category/changeCategoryReducer';
import {categoryListReducer} from './category/categoryListReducer';
import {productListReducer} from './product/productListReducer';
import {combineReducers} from 'redux';

export const reducers = combineReducers({
    changeCategoryReducer:changeCategoryReducer,
    categoryListReducer:categoryListReducer,
    productListReducer:productListReducer,
})