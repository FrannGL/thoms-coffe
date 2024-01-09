import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import OrderCard from "../Components/OrderCard";
import url from "../../public/assets/home_background.jpg";
import { useSelector, useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { onDelete, setOrderTotal } from "../features/shop/shopSlice.js";
import { useState, useEffect } from "react";
import Toast from "react-native-toast-message";
import { Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const Orders = ({ navigation }) => {
	const order = useSelector(state => state.cart.value.items);
	const orderTotal = useSelector(state => state.cart.value.total);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

	const showToast = () => {
		Toast.show({
			type: "success",
			text1: "Orden enviada exitosamente",
			text2: "Para visualizar tu orden ingresa a Mi Orden ☕🍰",
			visibilityTime: 5000,
		});
	};

	const handleSend = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			showToast();
		}, 5000);
	};

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
					<TouchableOpacity style={styles.btn} onPress={handleSend}>
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
			{loading && (
				<View style={styles.sendContainer}>
					<View style={styles.sendBackground}></View>
					<View style={styles.sendContent}>
						<Text style={styles.sendText}>Enviando orden...</Text>
						<ActivityIndicator size='large' color='#00ff00' />
					</View>
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
	sendBackground: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0, 0, 0, 0.2)",
		zIndex: 998, // Coloca el fondo oscuro detrás del contenido
	},
	sendContent: {
		zIndex: 999,
		position: "absolute",
		top: "50%",
		left: "50%",
		width: screenWidth * 0.8, // Ajusta el ancho según tus necesidades
		height: screenHeight * 0.2, // Ajusta la altura según tus necesidades
		marginLeft: -(screenWidth * 0.4), // Mitad del ancho negativo
		marginTop: -(screenHeight * 0.1), // Mitad de la altura negativa
		justifyContent: "center",
		alignItems: "center",
	},
	sendContainer: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro
		justifyContent: "center",
		alignItems: "center",
		zIndex: 999, // Asegura que esté por encima de otros elementos
	},
	sendText: {
		color: "white",
		fontSize: 30,
	},
});
