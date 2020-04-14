import * as actionTypes from '../../actions/category/actionTypes';
import initialState from './initialState';

export function changeCategoryReducer(state = initialState.currentCategory, action){
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            return action.payload;
        default:
            return state;
    }
}