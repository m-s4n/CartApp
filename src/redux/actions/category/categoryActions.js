import * as actionTypes from './actionTypes';

export function changeCategory(category){
    return {type:actionTypes.CHANGE_CATEGORY, payload:category}
}

function getCategoriesSuccess(categories){
    return {type:actionTypes.GET_CATEGORİES_SUCCESS, payload:categories}
}

export function getCategories(){
    return function(dispatch){
        debugger;
        let url = 'http://localhost:4000/categories';
        return fetch(url)
            .then(response => response.json())
            .then(categories => dispatch(getCategoriesSuccess(categories)));
    }
}