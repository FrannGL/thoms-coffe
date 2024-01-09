import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: {
		user: "Franco",
		items: [],
		total: null,
		updated_at: null,
	},
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action) => {
			const foundItemIndex = state.value.items.findIndex(item => item.id === action.payload.id);

			if (foundItemIndex !== -1) {
				state.value.items[foundItemIndex].quantity += 1;
			} else {
				state.value.items.push({ ...action.payload, quantity: 1 });
			}

			state.value.total = state.value.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
			state.value.updated_at = new Date().toLocaleString();
		},
		removeItem: (state, action) => {
			state.value.items = state.value.items.filter(item => item.id !== action.payload.id);
		},
	},
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
