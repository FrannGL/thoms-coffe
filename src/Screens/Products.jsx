import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../Components/ProductCard.jsx";
import url from "../../public/assets/home_background.jpg";
import { theme } from "../utils/theme.js";
import Footer from "../Components/Footer.jsx";
import { useState, useEffect } from "react";

const Products = () => {
	const categorieSelected = useSelector(state => state.shop.value.prodFilteredByCategory);
	const products = useSelector(state => state.shop.value.products.products);

	const dataToRender = categorieSelected.length > 0 ? categorieSelected : products;

	return (
		<>
			<View style={styles.container}>
				<View style={styles.backgroundContainer}>
					<Image source={url} style={styles.backgroundImage} />
				</View>
				<Text style={styles.title}>Lista de productos de la categoría:</Text>
				<View style={styles.categorieContainer}>
					<View style={styles.borderContainer}>
						<Text style={styles.focus}>
							{categorieSelected.length > 0 ? categorieSelected[0].category.toUpperCase() : "Todos los productos"}
						</Text>
					</View>
				</View>
				<FlatList
					data={dataToRender}
					keyExtractor={item => item.id}
					renderItem={({ item }) => <ProductCard item={item} />}
				/>
			</View>
			{/* <Footer /> */}
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
	title: {
		position: "relative",
		textAlign: "center",
		fontSize: theme.titleFontSize,
		fontWeight: "bold",
		marginBottom: theme.containerPadding,
		color: "#fff",
		textShadowColor: "#000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 2,
	},
	categorieContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 20,
	},
	borderContainer: {
		width: "40%",
		borderWidth: 2,
		borderColor: "white",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		borderRadius: 10,
		padding: 8,
	},
	focus: {
		color: "#fff",
		fontWeight: "bold",
		textShadowColor: "#000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 2,
		fontSize: 20,
		textAlign: "center",
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
