import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Popup from "./Popup";
import Toast from "react-native-toast-message";
import QuantityControls from "./QuantityControls";
import { useDispatch } from "react-redux";
import { setTotal, updateQuantity } from "../features/cart/cartSlice.js";

const OrderCard = ({ item, onDelete }) => {
	const [showDeletePopup, setShowDeletePopup] = useState(false);
	const dispatch = useDispatch();

	const showToast = () => {
		Toast.show({
			type: "success",
			text1: "Producto eliminado de tu orden",
			text2: "Para agregar más productos ingresa a Categorias 🛍️",
			visibilityTime: 5000,
		});
	};

	const increaseQuantity = () => {
		dispatch(updateQuantity({ productId: item.id, quantity: 1 }));
		dispatch(setTotal());
	};

	const decreaseQuantity = () => {
		dispatch(updateQuantity({ productId: item.id, quantity: -1 }));
		dispatch(setTotal());
	};

	const handleDeletePress = () => {
		setShowDeletePopup(true);
	};

	const handleDeleteCancel = () => {
		setShowDeletePopup(false);
	};

	const handleDeleteConfirm = () => {
		onDelete(item);
		showToast();
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
					<View style={styles.quantityContainer}>
						<Text>Cantidad x</Text>
						<QuantityControls
							quantity={item.quantity}
							onIncrease={increaseQuantity}
							onDecrease={decreaseQuantity}
							minQuantity={1}
						/>
					</View>
				</View>
				<Pressable onPress={handleDeletePress}>
					<AntDesign name='delete' size={24} color='red' />
				</Pressable>
				{showDeletePopup && (
					<Popup
						type={"delete"}
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
	quantityContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
});
