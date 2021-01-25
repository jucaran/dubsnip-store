import axios from "axios";

export function loading() {
  return { type: "PRODUCT_STATUS_LOADING" };
}
//
export function succeeded() {
  return { type: "PRODUCT_STATUS_SUCCEEDED" };
}

export function failed() {
  return { type: "PRODUCT_STATUS_FAILED" };
}

export function getProducts(category) {
  return async (dispatch) => {
    dispatch(loading());
    try {
      if (category) {
        const { data } = await axios.get(
          `http://localhost:1337/products/category/${category}`
        );
        dispatch({ type: "GET_PRODUCTS", payload: data });
      } else {
        const { data } = await axios.get(`http://localhost:1337/products/`);
        dispatch({ type: "GET_PRODUCTS", payload: data });
      }
    } catch (err) {
      dispatch(failed());
      console.error(err);
    }
  };
}

export function addProduct(product) {
  return async (dispatch) => {
    dispatch(loading());
    try {
      //POST request
      const { data } = await axios.post(
        "http://localhost:1337/products",
        product
      );
      //POST request to add category to the product created
      if (product.category) {
        await axios.post(
          `http://localhost:1337/products/${data.id}/category/${product.category}`
        );
      }

      dispatch({ type: "ADD_PRODUCT", payload: data });
    } catch (err) {
      dispatch(failed());
      console.error(err);
    }
  };
}

export function getProductById(id) {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const { data } = await axios.get(`http://localhost:1337/products/${id}`);
      dispatch({ type: "GET_PRODUCT_BY_ID", payload: data });
    } catch (err) {
      dispatch(failed());
      console.error(err);
    }
  };
}

export function deleteProduct(id) {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:1337/products/${id}`);
      dispatch({ type: "DELETE_PRODUCT", payload: id });
    } catch (err) {
      dispatch(failed());
      console.error(err);
    }
  };
}

export function searchProducts(keyword) {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const { data } = await axios.get(
        `http://localhost:1337/products/search?keyword=${keyword}`
      );
      dispatch({ type: "SEARCH_PRODUCTS", payload: data });
    } catch (err) {
      dispatch(failed());
      console.error(err);
    }
  };
}

export function editCategoriesFromProduct(payload) {
  return async (dispatch) => {
    try {
      const product = await axios.put(
        `http://localhost:1337/products/category`,
        payload
      );
      dispatch({ type: "EDIT_CATEGORIES_FROM_PRODUCT", payload: product });
    } catch (err) {
      console.error(err);
    }
  };
}

export function getLastProductsAdded() {
  return async () => {
    try {
      const { data: lastProducts } = await axios.get(
        `http://localhost:1337/products/lastproducts`
      );
      return lastProducts;
    } catch (err) {
      return err;
    }
  };
}
