import { createSlice } from "@reduxjs/toolkit";
import allProducts from "../../../Data/products.json";
import allCategories from "../../../Data/categories.json";

const initialState = {
	value: {
		products: allProducts,
		categories: allCategories,
		productSelected: {},
		prodFilteredByCategory: [],
		orderDetail: [],
	},
};

export const shopSlice = createSlice({
	name: "shop",
	initialState,
	reducers: {
		setProdFilteredByCategory: (state, action) => {
			state.value.prodFilteredByCategory = state.value.products.products.filter(
				prod => prod.category === action.payload
			);
		},
		setOrderDetail: (state, action) => {
			state.value.orderDetail = [...state.value.orderDetail, action.payload];
		},
		onDelete: (state, action) => {
			state.value.orderDetail = state.value.orderDetail.filter(item => item.id !== action.payload.id);
		},
	},
});

export const { setProdFilteredByCategory, setOrderDetail, onDelete } = shopSlice.actions;

export default shopSlice.reducer;
