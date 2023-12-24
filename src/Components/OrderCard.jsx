import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import PopupDelete from "./PopupDelete";

const OrderCard = ({ item, onDelete }) => {
	const [quantity, setQuantity] = useState(1);
	const [showDeletePopup, setShowDeletePopup] = useState(false);

	const increaseQuantity = () => {
		setQuantity(prevQuantity => prevQuantity + 1);
	};

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(prevQuantity => prevQuantity - 1);
		}
	};

	const handleDeletePress = () => {
		setShowDeletePopup(true);
	};

	const handleDeleteCancel = () => {
		setShowDeletePopup(false);
	};

	const handleDeleteConfirm = () => {
		onDelete(item);
		setShowDeletePopup(false);
	};

	return (
		<View style={styles.container}>
			<View style={styles.productContainer}>
				<View style={styles.productImage_container}>
					<Image source={{ uri: item.img }} style={styles.productImage} />
				</View>
				<View style={styles.productDetail_container}>
					<Text style={styles.productTitle}>{item.title}</Text>
					<View style={styles.priceContainer}>
						<Text style={styles.priceText}>Precio: </Text>
						<Text style={styles.price}>${item.price}.-</Text>
					</View>
					<Text>Cantidad x{quantity}</Text>
				</View>
				<Pressable onPress={handleDeletePress}>
					<AntDesign name='delete' size={24} color='red' />
				</Pressable>
				{showDeletePopup && (
					<PopupDelete
						isVisible={showDeletePopup}
						onCancel={handleDeleteCancel}
						onConfirm={handleDeleteConfirm}
						item={item}
					/>
				)}
			</View>
		</View>
	);
};

export default OrderCard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	productContainer: {
		width: "80%",
		alignItems: "center",
		height: 100,
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
		width: 70,
		height: 70,
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
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	priceContainer: {
		width: "100%",
		flexDirection: "row",
	},
	priceText: {
		fontSize: 16,
	},
	price: {
		fontSize: 16,
		fontWeight: "bold",
		color: "green",
	},
});
