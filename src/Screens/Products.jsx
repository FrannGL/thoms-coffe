import { View, FlatList, StyleSheet, Image } from "react-native";
import { useState, useEffect } from "react";
import allProds from "../Data/products.json";
import ProductCard from "../Components/ProductCard.jsx";
import url from "../../public/assets/home_background.jpg";
import { theme } from "../utils/theme.js";
import Header from "../Components/Header.jsx";
import { useGetProductsQuery, useGetProductsByCategoryQuery } from "../app/services/shopServices.js";

const Products = ({ route }) => {
	const category = route.params?.item?.title;
	const { data, isLoading, error } = useGetProductsByCategoryQuery(category);
	const { data: allData } = useGetProductsQuery();
	const [products, setProducts] = useState([]);
	const [allProducts, setAllProducts] = useState(allProds);

	useEffect(() => {
		try {
			if (!isLoading) {
				const dataArray = Object.values(data);
				setProducts(dataArray);
			}
		} catch {
			console.log(error);
		}
	}, [data]);

	useEffect(() => {
		try {
			if (allData) {
				const allDataArray = Object.values(allData);
				setAllProducts(allDataArray);
			}
		} catch {
			console.log("Error fetching all products");
		}
	}, [allData]);

	const dataToRender = products.length > 0 ? products : allProducts;

	return (
		<>
			<View style={styles.container}>
				<View style={styles.backgroundContainer}>
					<Image source={url} style={styles.backgroundImage} />
				</View>
				<Header title={products.length > 0 ? products[0].category.toUpperCase() : "Todos los productos"} />
				<FlatList
					data={dataToRender}
					keyExtractor={item => item.id}
					renderItem={({ item }) => <ProductCard item={item} />}
				/>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: theme.containerPadding,
		backgroundColor: theme.backgroundColor,
	},
	backgroundContainer: {
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
		width: "100%",
		height: "100%",
	},
	closeButton: {
		backgroundColor: theme.closeButtonColor,
		padding: theme.closeButtonPadding,
		borderRadius: theme.closeButtonBorderRadius,
		marginTop: theme.closeButtonMarginTop,
	},
	closeButtonText: {
		color: "#fff",
		textAlign: "center",
		fontSize: theme.titleFontSize,
		fontWeight: "bold",
	},
});

export default Products;
