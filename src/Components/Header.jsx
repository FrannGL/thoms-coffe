import { View, Text, StyleSheet } from "react-native";

const Header = ({ title }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{title}</Text>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#ededed",
		marginTop: 25,
		height: 40,
		padding: 10,
	},
	text: {
		color: "#000",
	},
});
