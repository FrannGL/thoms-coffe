import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Linking } from "react-native";
const Footer = () => {
	const handleIconPress = url => {
		Linking.openURL(url);
	};

	return (
		<View style={styles.footerContainer}>
			<View style={styles.iconsContainer}>
				<TouchableOpacity onPress={() => handleIconPress("https://www.instagram.com/fraaaangl/")}>
					<Ionicons name='logo-instagram' size={30} color='#C13584' style={styles.icon} />
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => handleIconPress("https://www.linkedin.com/in/franco-ivan-galluccio-553b1224a/")}
				>
					<FontAwesome name='linkedin-square' size={30} color='#0077B5' style={styles.icon} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => handleIconPress("https://www.github.com/FrannGL")}>
					<AntDesign name='github' size={30} color='#dadada' style={styles.icon} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	footerContainer: {
		width: "100%",
		height: 50,
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		paddingVertical: 5,
		borderTopColor: "#ddd",
	},
	iconsContainer: {
		flex: 1,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	icon: {
		padding: 5,
	},
});

export default Footer;
