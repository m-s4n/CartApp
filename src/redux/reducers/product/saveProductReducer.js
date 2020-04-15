import * as actionTypes from '../../actions/product/actionTypes';
import initialState from './initialState';


export function saveProductReducer(state = initialState.savedProduct, action){
    switch (action.type) {
        case actionTypes.UPDATE_PRODUCT_SUCCESS:
            return action.payload;
        case actionTypes.CREATE_PRODUCT_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
