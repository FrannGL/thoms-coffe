import { View, TextInput, Text, StyleSheet } from "react-native";

const InputForm = ({ label, value, onChangeText, error, isSecure, enableValidation = true }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<TextInput
				style={[styles.input, enableValidation && error && styles.inputError]}
				value={value}
				onChangeText={onChangeText}
				secureTextEntry={isSecure}
				placeholderTextColor='white'
			/>
			{enableValidation && error && <Text style={styles.errorText}>{error}</Text>}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
	},
	label: {
		color: "white",
		marginBottom: 5,
	},
	input: {
		backgroundColor: "transparent",
		borderRadius: 8,
		padding: 5,
		borderBottomWidth: 1,
		borderBottomColor: "white",
		color: "white",
	},
	inputError: {
		borderBottomColor: "red",
	},
	errorText: {
		color: "red",
		marginTop: 5,
	},
});

export default InputForm;
