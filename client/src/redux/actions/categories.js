import axios from "axios";

export function loading() {
  return { type: "CATEGORIES_STATUS_LOADING" };
}

export function succeeded() {
  return { type: "CATEGORIES_STATUS_SUCCEEDED" };
}

export function failed() {
  return { type: "CATEGORIES_STATUS_FAILED" };
}

export function getCategories() {
  return async (dispatch) => {
    try {
      dispatch(loading());
      const { data } = await axios.get(
        "http://localhost:1337/products/category"
      );
      dispatch({ type: "GET_CATEGORIES", payload: data });
    } catch (err) {
      dispatch(failed());
      console.log(err);
    }
  };
}

export function addCategory(category) {
  return async (dispatch) => {
    try {
      dispatch(loading());
      const { data } = await axios.post(
        "http://localhost:1337/products/category",
        category
      );
      dispatch({ type: "ADD_CATEGORY", payload: data });
    } catch (err) {
      dispatch(failed());
      console.log(err);
    }
  };
}

export function getCategoryById(id) {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const { data } = await axios.get(
        `http://localhost:1337/products/category/detail/${id}`
      );

      dispatch({ type: "GET_CATEGORY_BY_ID", payload: data });
    } catch (err) {
      dispatch(failed());
      console.log(err);
    }
  };
}

export function deleteCategory(id) {
  return async (dispatch) => {
    try {
      dispatch(loading());
      await axios.delete(`http://localhost:1337/products/category/${id}`);
      dispatch({ type: "DELETE_CATEGORY", payload: id });
    } catch (err) {
      dispatch(failed());
      console.log(err);
    }
  };
}

/**
 * funcion para editar categoria
 * @param {number} id
 * @param {*} category
 */
export function editCategory(id, category) {
  return async (dispatch) => {
    try {
      dispatch(loading());
      const { data } = await axios.put(
        `http://localhost:1337/products/category/${id}`,
        category
      );
      dispatch({ type: "EDIT_CATEGORY", payload: { id, data } });
    } catch (err) {
      dispatch(failed());
      console.log(err);
    }
  };
}
