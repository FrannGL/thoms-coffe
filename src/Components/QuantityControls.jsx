import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const QuantityControls = ({ quantity, onIncrease, onDecrease, minQuantity }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.quantityText}>{quantity}</Text>
			<View style={styles.controls}>
				{quantity > minQuantity && (
					<TouchableOpacity style={[styles.button, styles.decreaseButton]} onPress={onDecrease}>
						<AntDesign name='minuscircleo' size={25} color='black' />
					</TouchableOpacity>
				)}

				<TouchableOpacity style={styles.button} onPress={onIncrease}>
					<AntDesign name='pluscircleo' size={25} color='black' />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	controls: {
		flexDirection: "row",
		marginHorizontal: 10,
	},
	button: {
		marginHorizontal: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	quantityText: {
		fontSize: 16,
		marginHorizontal: 5,
	},
});

export default QuantityControls;
