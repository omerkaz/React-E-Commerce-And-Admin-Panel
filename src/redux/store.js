import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import productsSlice from "../components/products/productsSlice";
import cartSlice from "../components/cart/cartSlice";
import adminSlice from "../components/admin/adminSlice"
import api from "./middleware/index"

import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key : "root",
    storage
}
const rootReducers = combineReducers({
    products : productsSlice,
    cart : cartSlice,
    admin : adminSlice
})

const persistedReducer = persistReducer(persistConfig,rootReducers)




export const store = configureStore({
    reducer: persistedReducer,
    middleware: [...getDefaultMiddleware({
        serializableCheck: false,
      }), api]
})

export const persistor = persistStore(store)