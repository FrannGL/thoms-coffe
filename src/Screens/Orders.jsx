import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import OrderCard from "../Components/OrderCard";
import url from "../../public/assets/home_background.jpg";
import { useSelector, useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { onDelete, setOrderTotal } from "../features/shop/shopSlice.js";
import { useEffect } from "react";

const Orders = ({ navigation }) => {
	const order = useSelector(state => state.shop.value.orderDetail);
	const orderTotal = useSelector(state => state.shop.value.orderTotal);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setOrderTotal());
	}, [order, dispatch]);

	const prodsInCart = order.length > 0 ? true : false;

	const handleDelete = item => {
		dispatch(onDelete(item));
	};

	return (
		<View style={styles.container}>
			<View style={styles.backgroundContainer}>
				<Image source={url} style={styles.backgroundImage} />
			</View>
			{prodsInCart ? (
				<View style={styles.orderContainer}>
					<FlatList
						data={order}
						keyExtractor={prod => prod.id}
						renderItem={({ item }) => <OrderCard item={item} onDelete={handleDelete} />}
					/>
					<View style={styles.wrapper}>
						<View style={styles.orderTotal}>
							<Text style={styles.total}>Total: ${orderTotal}</Text>
						</View>
					</View>
					<TouchableOpacity style={styles.btn}>
						<Text style={styles.btnText}>ENVIAR ORDEN</Text>
					</TouchableOpacity>
				</View>
			) : (
				<View style={styles.text_container}>
					<View style={styles.border_container}>
						<MaterialIcons name='error' size={24} color='red' />
						<Text style={styles.text}>Todavia no seleccionaste productos</Text>
					</View>
					<TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Categorias")}>
						<Text style={styles.buttonText}>IR A CATEGORIAS</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};

export default Orders;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: "100%",
		backgroundColor: "#2F2F2E",
		paddingVertical: 20,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	title: {
		position: "relative",
		textAlign: "center",
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
		color: "#fff",
		textShadowColor: "#000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 2,
	},
	backgroundContainer: {
		...StyleSheet.absoluteFillObject,
		justifyContent: "center",
		alignItems: "center",
	},
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
		width: "100%",
		height: "100%",
	},
	orderContainer: {
		width: "90%",
		maxHeight: "95%",
		paddingVertical: 10,
	},
	wrapper: {
		justifyContent: "flex-end",
		alignItems: "flex-end",
		paddingVertical: 10,
	},
	orderTotal: {
		width: "38%",
		borderWidth: 2,
		borderColor: "white",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		borderRadius: 10,
		padding: 8,
	},
	total: {
		color: "#fff",
		fontWeight: "bold",
		textShadowColor: "#000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 2,
		fontSize: 20,
		textAlign: "center",
	},
	btn: {
		backgroundColor: "green",
		padding: 10,
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center",
	},
	btnText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
		textShadowColor: "#000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 2,
	},
	text_container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	border_container: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		width: "70%",
		borderWidth: 2,
		borderColor: "white",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		borderRadius: 10,
		padding: 10,
	},
	text: {
		color: "#fff",
		fontWeight: "bold",
		textShadowColor: "#000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 2,
		fontSize: 20,
		textAlign: "center",
	},
	orderItem: {
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
		paddingVertical: 10,
	},
	orderItemTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#fff",
	},
	noOrderContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	noOrderText: {
		fontSize: 16,
		textAlign: "center",
	},
	buttonContainer: {
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
		bottom: 150,
		padding: 15,
		borderRadius: 10,
		marginTop: 20,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		borderWidth: 1,
		borderColor: "white",
	},
	buttonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
});
