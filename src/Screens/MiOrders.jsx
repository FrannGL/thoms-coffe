import { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import url from "../../public/assets/home_background.jpg";
import { useGetOrdersQuery } from "../app/services/shopServices.js";
import { useSelector } from "react-redux";
import OrderItem from "../Components/OrderItem.jsx";
import { MaterialIcons } from "@expo/vector-icons";

const MiOrders = ({ navigation }) => {
	const [userOrders, setUserOrders] = useState([]);
	const localId = useSelector(state => state.auth.value.localId);
	const { data } = useGetOrdersQuery(localId);

	useEffect(() => {
		if (data) {
			const ordersArray = Object.values(data);
			const filteredOrders = ordersArray.filter(order => order.user === localId);
			setUserOrders(filteredOrders);
		}
	}, [data, localId]);

	const hasUserData = data && Object.values(data).some(order => order.user === localId);

	return (
		<View style={styles.container}>
			<View style={styles.backgroundContainer}>
				<Image source={url} style={styles.backgroundImage} />
			</View>
			{hasUserData ? (
				<FlatList
					data={userOrders}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({ item }) => <OrderItem order={item} />}
				/>
			) : (
				<View style={styles.text_container}>
					<View style={styles.border_container}>
						<MaterialIcons name='error' size={24} color='red' />
						<Text style={styles.text}>Todavía no realizaste ninguna orden</Text>
					</View>
					<TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Categorias")}>
						<Text style={styles.buttonText}>IR A CATEGORÍAS</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: "100%",
		backgroundColor: "#2F2F2E",
		paddingVertical: 20,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	backgroundContainer: {
		...StyleSheet.absoluteFillObject,
		justifyContent: "center",
		alignItems: "center",
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

export default MiOrders;
