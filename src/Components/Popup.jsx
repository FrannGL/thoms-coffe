import React from "react";
import { View, Text, StyleSheet, Modal, Pressable } from "react-native";

const Popup = ({ type, isVisible, onCancel, onConfirm, onAdd, item }) => {
	const isDeletePopup = type === "delete";

	return (
		<Modal animationType='slide' transparent={true} visible={isVisible} onRequestClose={onCancel}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text>{`¿Quieres ${isDeletePopup ? "eliminar" : "agregar"} `}</Text>
					<Text style={{ fontWeight: "bold" }}>{`${item.title}`}</Text>
					<Text>{` ${isDeletePopup ? "de tu orden" : "a tu orden"}?`}</Text>

					<View style={styles.buttonContainer}>
						<Pressable style={[styles.button, styles.cancelButton]} onPress={onCancel}>
							<Text style={styles.buttonText}>Cancelar</Text>
						</Pressable>

						<Pressable
							style={[styles.button, isDeletePopup ? styles.addButton : styles.deleteButton]}
							onPress={() => {
								if (isDeletePopup) {
									onConfirm && onConfirm(item);
								} else {
									onAdd && onAdd(item);
								}
								onCancel && onCancel();
							}}
						>
							<Text style={styles.buttonText}>{isDeletePopup ? "Eliminar" : "Agregar"}</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	buttonContainer: {
		flexDirection: "row",
		marginTop: 20,
	},
	button: {
		borderRadius: 10,
		padding: 10,
		marginHorizontal: 10,
	},
	cancelButton: {
		backgroundColor: "#DA0303",
	},
	addButton: {
		backgroundColor: "#03AF60",
	},
	deleteButton: {
		backgroundColor: "#03AF60",
	},
	buttonText: {
		color: "white",
		fontWeight: "bold",
	},
});

export default Popup;
