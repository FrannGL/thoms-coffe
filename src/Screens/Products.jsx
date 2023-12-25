import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard.jsx";
import url from "../../public/assets/home_background.jpg";
import { theme } from "../utils/theme.js";
import Header from "../Components/Header.jsx";

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
				<Header
					title={categorieSelected.length > 0 ? categorieSelected[0].category.toUpperCase() : "Todos los productos"}
				/>
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
