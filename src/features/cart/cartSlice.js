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
			state.value.items.push({ ...action.payload, quantity: 1 });
		},
		removeItem: (state, action) => {
			state.value.items = state.value.items.filter(item => item.id !== action.payload.id);
		},
	},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
