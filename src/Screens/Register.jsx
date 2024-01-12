import { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import InputForm from "../Components/InputForm";
import url from "../../public/assets/home_background.jpg";
import logo from "../../public/assets/logo.png";
import { useSignupMutation } from "../app/services/authServices.js";

const Register = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [isValidEmail, setIsValidEmail] = useState(true);
	const [password, setPassword] = useState("");
	const [isValidPassword, setIsValidPassword] = useState(true);
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);
	const [triggerSignup, { isError, error, isSuccess, data }] = useSignupMutation();

	useEffect(() => {
		if (isSuccess) {
			console.log(data);
		}
		if (isError) {
			console.log(error);
		}
	}, [data, isError, isSuccess]);

	const validateEmail = () => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const isValid = emailRegex.test(email.trim());
		setIsValidEmail(isValid && email.trim() !== "");
		return isValid && email.trim() !== "";
	};

	const validatePassword = password => {
		const isValid = password.length >= 6;
		setIsValidPassword(isValid);
		return isValid;
	};

	const handleRegister = async () => {
		// Validación de correo electrónico
		if (!validateEmail()) {
			return;
		}

		// Validación de contraseña
		if (!validatePassword(password)) {
			return;
		}

		try {
			const response = await triggerSignup(email, password);
			if (response.error) {
				console.error("Error en la respuesta:", response.error);
				return;
			}
		} catch (error) {
			console.error("Error de la API:", error);
		}
		clearErrors();
	};

	const clearErrors = () => {
		setIsValidEmail(true);
		setIsValidPassword(true);
		setIsValidConfirmPassword(true);
	};

	return (
		<View style={styles.container}>
			<View style={styles.backgroundContainer}>
				<Image source={url} style={styles.backgroundImage} />
			</View>
			<View style={styles.inner_container}>
				<Image source={logo} style={styles.logo} />
				<View style={styles.loginContainer}>
					<InputForm
						label='Correo electrónico'
						value={email}
						onChangeText={text => setEmail(text)}
						isValid={isValidEmail}
						error={isValidEmail ? "" : "Ingrese un correo electrónico válido"}
						isSecure={false}
						enableValidation={true}
					/>
					<InputForm
						label='Contraseña'
						value={password}
						onChangeText={text => setPassword(text)}
						isValid={isValidPassword}
						error={isValidPassword ? "" : "La contraseña debe tener al menos 6 caracteres"}
						isSecure={true}
						enableValidation={true}
					/>
					<InputForm
						label='Confirmar Contraseña'
						value={confirmPassword}
						onChangeText={text => setConfirmPassword(text)}
						isValid={isValidConfirmPassword}
						error={isValidConfirmPassword ? "" : "Las contraseñas no coinciden"}
						isSecure={true}
						enableValidation={true}
					/>
					<TouchableOpacity style={styles.loginButton} onPress={() => handleRegister()}>
						<Text style={styles.loginButtonText}>Registrarse</Text>
					</TouchableOpacity>
					<View style={styles.registerContainer}>
						<Text style={styles.registerText}>¿Ya tienes una cuenta?</Text>
						<TouchableOpacity onPress={() => navigation.navigate("Login")}>
							<Text style={styles.registerLink}>Inicia sesión</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Register;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#2F2F2E",
	},
	backgroundContainer: {
		...StyleSheet.absoluteFillObject,
		justifyContent: "center",
		alignItems: "center",
	},
	inner_container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 100,
	},
	logo: {
		width: 200,
		height: 200,
		resizeMode: "cover",
	},
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
		width: "100%",
		height: "100%",
	},
	loginContainer: {
		flex: 1,
		width: "80%",
		alignSelf: "center",
		justifyContent: "center",
	},
	loginButton: {
		backgroundColor: "#3498db",
		padding: 15,
		borderRadius: 8,
		alignItems: "center",
	},
	loginButtonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
	registerContainer: {
		marginTop: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	registerText: {
		color: "white",
	},
	registerLink: {
		color: "#3498db",
		marginLeft: 5,
		fontWeight: "bold",
	},
});
