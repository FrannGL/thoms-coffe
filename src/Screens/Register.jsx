import { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import InputForm from "../Components/InputForm";
import url from "../../public/assets/home_background.jpg";
import logo from "../../public/assets/logo.png";
import { useSignupMutation } from "../app/services/authServices.js";
import { setUser } from "../features/authSlice/authSlice.js";
import { useDispatch } from "react-redux";
import { signUpSchema } from "../validations/signupSchema.js";
import Toast from "react-native-toast-message";

const Register = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [confirmPasswordError, setConfirmPasswordError] = useState("");
	const dispatch = useDispatch();
	const [triggerSignup, { isError, isSuccess, data }] = useSignupMutation();

	useEffect(() => {
		if (isSuccess) {
			dispatch(setUser(data));
			showToast("success", "¡Bienvenido! 😎", "Ahora puedes visitar nuestras Tienda 🍰 🥞");
		}
		if (isError) {
			showToast("error", "Ya existe un usuario con el email ingresado 📵", "Por favor intenta nuevamente 😑");
		}
	}, [data, isError, isSuccess]);

	const showToast = (type, text1, text2) => {
		Toast.show({
			type,
			text1,
			text2,
			visibilityTime: 5000,
		});
	};

	const handleRegister = async () => {
		try {
			signUpSchema.validateSync({ email, password, confirmPassword });
			const response = await triggerSignup({ email, password });

			if (response.error) {
				console.error("Error en la respuesta:", response.error);
				clearErrors();

				const errorMap = {
					email: setEmailError,
					password: setPasswordError,
					confirmPassword: setConfirmPasswordError,
				};

				const setError = errorMap[response.error.path];
				setError(response.error.message);

				return;
			}
		} catch (error) {
			console.log("Error en el input", error.path);
			console.log(error.message);
			clearErrors();

			const errorMap = {
				email: setEmailError,
				password: setPasswordError,
				confirmPassword: setConfirmPasswordError,
			};

			const setError = errorMap[error.path];
			setError(error.message);
		}
	};

	const clearErrors = () => {
		setEmailError("");
		setPasswordError("");
		setConfirmPasswordError("");
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
						error={emailError}
						isSecure={false}
						enableValidation={true}
					/>
					<InputForm
						label='Contraseña'
						value={password}
						onChangeText={text => setPassword(text)}
						error={passwordError}
						isSecure={true}
						enableValidation={true}
					/>
					<InputForm
						label='Confirmar Contraseña'
						value={confirmPassword}
						onChangeText={text => setConfirmPassword(text)}
						error={confirmPasswordError}
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
		backgroundColor: "rgba(0, 0, 0, 0.6)",
		borderRadius: 8,
		padding: 10,
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
