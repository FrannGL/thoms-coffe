import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import authSlice from "../features/authSlice/authSlice";
import { shopApi } from "./services/shopServices";
import { authApi } from "./services/authServices";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
	reducer: {
		cart: cartSlice,
		auth: authSlice,
		[shopApi.reducerPath]: shopApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);
