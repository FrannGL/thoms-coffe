import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ProductCard = ({ item }) => {
	return (
		<View style={styles.productContainer}>
			<View style={styles.productImage_container}>
				<Image source={{ uri: item.img }} style={styles.productImage} />
			</View>
			<View style={styles.productDetail_container}>
				<Text style={styles.productTitle}>{item.title}</Text>
				<Text style={styles.productDescription}>{item.description}</Text>
				<Text style={styles.productPrice}>$ {`${item.price}`}.-</Text>
			</View>
			<Pressable>
				<MaterialIcons name='add-business' size={24} color='black' />
			</Pressable>
		</View>
	);
};

export default ProductCard;

const styles = StyleSheet.create({
	productContainer: {
		flexDirection: "row",
		borderWidth: 1,
		borderColor: "#ddd",
		borderRadius: 8,
		padding: 10,
		marginBottom: 15,
		backgroundColor: "#F0F8F9",
	},
	productTitle: {
		fontSize: 18,
		fontWeight: "bold",
	},
	productImage_container: {
		width: 120,
		height: 120,
		borderRadius: 50,
		marginRight: 15,
	},
	productImage: {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		borderRadius: 30,
	},
	productDetail_container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	productDescription: {
		fontSize: 16,
		color: "#555",
		marginTop: 5, // Margen superior para separación
	},
	productPrice: {
		fontSize: 16,
		fontWeight: "bold",
		color: "green",
		marginTop: 5, // Margen superior para separación
	},
});
