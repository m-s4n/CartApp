import * as actionTypes from "./actionTypes";

function getProductSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function getProducts(category) {
  return function (dispatch) {
    let url = "http://localhost:4000/products";
    if (category.id) {
      url += "/?categoryId=" + category.id;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((categories) => dispatch(getProductSuccess(categories)));
  };
}
export function createProductSuccess(product) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product };
}

export function updateProductSuccess(product) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product };
}

export function saveProductApi(product) {
  return fetch("http://localhost:4000/products/" + (product.id || ""), {
    method: product.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveProduct(product) {
  return function (dispatch) {
    return saveProductApi(product)
      .then((savedProduct) => {
        product.id
          ? dispatch(updateProductSuccess(savedProduct))
          : dispatch(createProductSuccess(savedProduct));
      })
      .catch((error) => {
        throw error;
      });
  };
}


export async function handleResponse(response){
    if(response.ok){
        return response.json()
    }

    const error = await response.text();
    throw new Error(error);
}
export async function handleError(error){
    throw error;
}
