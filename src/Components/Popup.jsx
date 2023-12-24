import { View, Text, StyleSheet, Modal, Pressable } from "react-native";

const Popup = ({ item, isVisible, onAdd, onCancel }) => {
	return (
		<Modal animationType='slide' transparent={true} visible={isVisible} onRequestClose={onCancel}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text>{`¿Quieres agregar `}</Text>
					<Text style={{ fontWeight: "bold" }}>{`${item.title}`}</Text>
					<Text>{` a tu orden?`}</Text>

					<View style={styles.buttonContainer}>
						<Pressable style={[styles.button, styles.cancelButton]} onPress={onCancel}>
							<Text style={styles.buttonText}>Cancelar</Text>
						</Pressable>

						<Pressable
							style={[styles.button, styles.addButton]}
							onPress={() => {
								console.log(item);
								onAdd && onAdd(item);
								onCancel && onCancel();
							}}
						>
							<Text style={styles.buttonText}>Agregar</Text>
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
	buttonText: {
		color: "white",
		fontWeight: "bold",
	},
});

export default Popup;
