import { View, Text, StyleSheet } from "react-native";

const Header = ({ title }) => {
	return (
		<>
			<Text style={styles.title}>Lista de productos de la categoría:</Text>
			<View style={styles.categorieContainer}>
				<View style={styles.borderContainer}>
					<Text style={styles.focus}>{title}</Text>
				</View>
			</View>
		</>
	);
};

export default Header;

const styles = StyleSheet.create({
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
});
