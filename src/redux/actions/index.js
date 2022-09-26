import { createAction } from "@reduxjs/toolkit";

export const productsApiCallBegan = createAction("products/ApiCallBegan")
export const productsApiCallSuccess = createAction("products/ApiCallSuccess")
export const productsApiCallFailed = createAction("products/ApiCallBegan")

export const addItem = createAction("cart/addItem")
export const deleteItem = createAction("cart/deleteItem")

export const productAdd = createAction("productAdd")
export const productRemove = createAction("productRemove")
