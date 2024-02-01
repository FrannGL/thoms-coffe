import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const OrderItem = ({ order }) => {
	return (
		<>
			<View style={styles.container}>
				<View style={styles.date_container}>
					<Text style={styles.date}>{order.date}</Text>
				</View>
				<FlatList
					data={order.items}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({ item }) => (
						<View style={styles.item_container}>
							<Text style={styles.item_title}>{item.title}</Text>
							<View style={styles.item_description}>
								<Text style={styles.description}>{item.description}</Text>
								<Image source={{ uri: item.img }} style={styles.item_image} />
							</View>
							<View style={styles.item_numbers}>
								<Text style={styles.price}>$ {item.price}</Text>
								<Text style={styles.quantity}>  x{item.quantity}</Text>
							</View>
						</View>
					)}
				/>
				<Text style={styles.total}>Total: ${order.total}</Text>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#fff",
		backgroundColor: "rgba(255, 255, 255, 0.7)",
		borderRadius: 10,
		marginVertical: 10,
	},
	date_container: {
		flexDirection: "row",
		marginBottom: 10,
	},
	item_container: {
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "flex-start",
		marginVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: "rgba(255, 255, 255, 0.4)",
	},
	item_title: {
		fontSize: 16,
		fontWeight: "bold",
	},
	item_description: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		fontSize: 14,
	},
	item_numbers: {
		flexDirection: "row",
	},
	price: {
		fontSize: 14,
		fontWeight: "bold",
	},
	item_image: {
		width: 50,
		height: 50,
		marginBottom: 5,
		borderRadius: 10,
	},
	description: {
		width: "80%",
	},
	date: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 5,
	},
	total: {
		fontSize: 20,
		fontWeight: "bold",
		color: "green",
	},
});

export default OrderItem;
