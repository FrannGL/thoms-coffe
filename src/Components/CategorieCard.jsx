import { Dimensions } from "react-native";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

let deviceWidth = Dimensions.get("window").width * 0.95;

const CategorieCard = ({ item, onPress }) => {
	const setTitle = () => {
		if (item.title === "todos") {
			return "TODOS LOS PRODUCTOS";
		} else {
			return item.title.toUpperCase();
		}
	};

	return (
		<Pressable style={styles.card} onPress={() => onPress(item.title)}>
			<Image source={{ uri: item.img }} style={styles.thumbnail} />
			<View style={styles.overlay}>
				<Text style={styles.title}>{setTitle()}</Text>
			</View>
		</Pressable>
	);
};

export default CategorieCard;

const styles = StyleSheet.create({
	card: {
		width: deviceWidth,
		height: 250,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderColor: "white",
		marginVertical: 2,
		position: "relative",
		overflow: "hidden",
	},
	thumbnail: {
		position: "absolute",
		top: 0,
		width: "100%",
		height: "100%",
		resizeMode: "cover",
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0, 0, 0, 0.1)",
		justifyContent: "flex-end",
		alignItems: "center",
	},
	title: {
		fontSize: 25,
		fontWeight: "bold",
		color: "white",
		textShadowColor: "rgba(0, 0, 0, 0.75)",
		textShadowOffset: { width: 2, height: 2 },
		textShadowRadius: 20,
		borderTopWidth: 0.5,
		borderTopColor: "white",
		paddingTop: 5,
		marginVertical: 20,
	},
});
