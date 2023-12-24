import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import OrderCard from "../Components/OrderCard";
import url from "../../public/assets/home_background.jpg";
import { useSelector } from "react-redux";

const Orders = () => {
	const order = useSelector(state => state.shop.value.orderDetail);

	const prodsInCart = order.length > 0 ? true : false;

	return (
		<View style={styles.container}>
			<View style={styles.backgroundContainer}>
				<Image source={url} style={styles.backgroundImage} />
			</View>
			{prodsInCart ? (
				<FlatList data={order} keyExtractor={prod => prod.id} renderItem={({ item }) => <OrderCard item={item} />} />
			) : (
				<View style={styles.text_container}>
					<View style={styles.border_container}>
						<Text style={styles.text}>Todavia no seleccionaste productos</Text>
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
		backgroundColor: "#2F2F2E",
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
	text_container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	border_container: {
		width: "60%",
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
});
