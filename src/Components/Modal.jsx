import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import LocationSelector from "../Screens/LocationSelector";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const Modal = ({ onClose }) => {
	return (
		<View style={styles.container}>
			<View style={styles.background}></View>
			<View style={styles.content}>
				<LocationSelector />
				<View style={styles.close}>
					<TouchableOpacity onPress={onClose}>
						<Text style={styles.text}>x</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0, 0, 0, 0.7)",
		justifyContent: "center",
		alignItems: "center",
		zIndex: 999,
	},
	background: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0, 0, 0, 0.2)",
		zIndex: 998,
	},
	content: {
		zIndex: 999,
		position: "absolute",
		top: "50%",
		left: "50%",
		width: screenWidth * 0.8,
		height: screenHeight * 0.2,
		marginLeft: -(screenWidth * 0.4),
		marginTop: -(screenHeight * 0.1),
		justifyContent: "center",
		alignItems: "center",
	},
	close: {
		position: "absolute",
		top: -250,
		right: 0,
	},
	text: {
		fontSize: 30,
		color: "white",
	},
});

export default Modal;
