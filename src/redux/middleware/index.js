import axios from "axios";
import * as actions from "../actions/index";
const baseURL = "https://fakestoreapi.com/products";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.productsApiCallBegan.type) return next(action);

    const { url, method, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const response = await axios.request({
        baseURL,
        url,
        method,
      });
      dispatch(actions.productsApiCallSuccess(response.data));

      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch(actions.productsApiCallFailed(error.message));

      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };

export default api;
