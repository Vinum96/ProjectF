import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productApi } from "./api/productApi";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import CartSlice from "./slices/CartSlice";
import ProductSlice from "./slices/ProductSlice";
import CategoryProductsSlice from "./slices/CategoryProductsSlice";

const rootReducer = combineReducers({
  cartProducts: CartSlice,
  products: ProductSlice,
  categoryProducts: CategoryProductsSlice,
  [productApi.reducerPath]: productApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productApi.middleware),
});

export const persistor = persistStore(store);

export default store;
