import * as actionTypes from './actionTypes';

function getProductSuccess(products){
    return {type:actionTypes.GET_PRODUCTS_SUCCESS, payload:products}
}

export function getProducts(category){
    return function(dispatch){
        let url = 'http://localhost:4000/products';
        if(category.id)
        {
            url += '/?categoryId=' + category.id;
        }
        return fetch(url)
            .then(response => response.json())
            .then(categories => dispatch(getProductSuccess(categories)));
    }
}