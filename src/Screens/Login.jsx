import { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import InputForm from "../Components/InputForm";
import url from "../../public/assets/home_background.jpg";
import logo from "../../public/assets/logo.png";
import { useLoginMutation } from "../app/services/authServices.js";

const Login = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [triggerLogin, { isError, error, isSuccess, data }] = useLoginMutation();

	useEffect(() => {
		if (isSuccess) {
			console.log(data);
		}
		if (isError) {
			console.log(error);
		}
	}, [data, isError, isSuccess]);

	const handleLogin = async () => {
		try {
			const response = await triggerLogin({ user: { email, password } });
			if (response.error) {
				console.error("Error en la respuesta:", response.error);
				return;
			}
		} catch (error) {
			console.error("Error de la API:", error);
		}
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
						isSecure={false}
						enableValidation={false}
					/>
					<InputForm
						label='Contraseña'
						value={password}
						onChangeText={text => setPassword(text)}
						isSecure={true}
						enableValidation={false}
					/>
					<TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
						<Text style={styles.loginButtonText}>Registrarse</Text>
					</TouchableOpacity>
					<View style={styles.registerContainer}>
						<Text style={styles.registerText}>¿No tienes una cuenta?</Text>
						<TouchableOpacity onPress={() => navigation.navigate("Register")}>
							<Text style={styles.registerLink}>Registrate</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Login;

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
