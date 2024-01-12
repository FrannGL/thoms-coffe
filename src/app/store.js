import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import { shopApi } from "./services/shopServices";
import { authApi } from "./services/authServices";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
	reducer: {
		cart: cartSlice,
		[shopApi.reducerPath]: shopApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);
