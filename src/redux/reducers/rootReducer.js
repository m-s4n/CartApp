import {changeCategoryReducer} from './category/changeCategoryReducer';
import {combineReducers} from 'redux';

export const reducers = combineReducers({
    changeCategoryReducer:changeCategoryReducer,
})