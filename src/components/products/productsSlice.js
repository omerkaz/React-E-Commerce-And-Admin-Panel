import { createSlice } from "@reduxjs/toolkit";
import { productsApiCallBegan } from "../../redux/actions/index";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    status: "loading",
    errorMessage: "",
  },
  reducers: {
    productsReceived: (state, action) => {
      state.status = "loading";
      state.errorMessage = "";
    },
    productsSuccess: (state, action) => {
      state.list = action.payload;
      state.status = "idle";
    },
    productsError: (state, action) => {
      state.errorMessage = action.payload;
      state.status = "idle";
    },
    productAdd: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    productRemove: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

const method = "get";
export const loadProducts = () => (dispatch) => {
  return dispatch(
    productsApiCallBegan({
      method,
      onStart: productsReceived.type,
      onSuccess: productsSuccess.type,
      onError: productsError.type,
    })
  );
};

export const productsList = (state) => state.products;
export default productsSlice.reducer;
export const {
  productsReceived,
  productsSuccess,
  productsError,
  productAdd,
  productRemove,
} = productsSlice.actions;
