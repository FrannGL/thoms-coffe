import { createSlice } from "@reduxjs/toolkit";
import allProducts from "../../../Data/products.json";
import allCategories from "../../../Data/categories.json";

const initialState = {
	value: {
		products: allProducts,
		categories: allCategories,
		prodFilteredByCategory: [],
		orderDetail: [],
		orderTotal: 0,
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
			const { id } = action.payload;
			const existingProduct = state.value.orderDetail.find(prod => prod.id === id);

			if (existingProduct) {
				existingProduct.quantity += 1;
			} else {
				state.value.orderDetail = [...state.value.orderDetail, { ...action.payload, quantity: 1 }];
			}
		},
		setOrderTotal: state => {
			state.value.orderTotal = state.value.orderDetail.reduce((total, item) => {
				return total + item.price * item.quantity;
			}, 0);
		},
		onDelete: (state, action) => {
			state.value.orderDetail = state.value.orderDetail.filter(item => item.id !== action.payload.id);
		},
		updateQuantity: (state, action) => {
			const { productId, quantity } = action.payload;
			const existingProduct = state.value.orderDetail.find(item => item.id === productId);

			if (existingProduct) {
				existingProduct.quantity += quantity;
			}
		},
	},
});

export const { setProdFilteredByCategory, setOrderDetail, onDelete, updateQuantity, setOrderTotal } = shopSlice.actions;

export default shopSlice.reducer;
