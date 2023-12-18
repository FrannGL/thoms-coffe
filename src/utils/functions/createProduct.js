// createProduct.js
import uuid from "react-native-uuid";
import { products } from "../../data/products.js";

export const createProduct = ({ title, description, price, thumbnail, stock, category }) => {
	const newProduct = {
		id: uuid.v4(),
		title,
		description,
		price,
		thumbnail,
		stock,
		category,
	};

	products.push(newProduct);

	return newProduct;
};
