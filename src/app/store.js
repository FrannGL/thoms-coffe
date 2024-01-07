import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "../features/shop/shopSlice";
import cartSlice from "../features/cart/cartSlice";
import { shopApi } from "./services/shopServices";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
	reducer: {
		shop: shopSlice,
		cart: cartSlice,
		[shopApi.reducerPath]: shopApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(shopApi.middleware),
});

setupListeners(store.dispatch);
