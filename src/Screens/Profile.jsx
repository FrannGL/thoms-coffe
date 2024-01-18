import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from "react-native";
import LocationSelector from "./LocationSelector.jsx";
import profileDefault from "../../public/assets/default_profile.webp";
import url from "../../public/assets/home_background.jpg";
import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { usePostProfileMutation } from "../app/services/shopServices.js";
import { useGetProfileQuery } from "../app/services/shopServices.js";
import { useSelector } from "react-redux";
import Modal from "../Components/Modal.jsx";
import Toast from "react-native-toast-message";

const Profile = () => {
	const [newProfileImage, setNewProfileImage] = useState("");
	const [showConfirmButton, setShowConfirmButton] = useState(true);
	const [modal, setModal] = useState(false);
	const [triggerProfileImage, { isError, error, isSuccess }] = usePostProfileMutation();
	const localId = useSelector(state => state.auth.value.localId);
	const user = useSelector(state => state.auth.value);
	const { data } = useGetProfileQuery(localId);

	useEffect(() => {
		if (isSuccess) {
			showToast("success", "Foto actualizada con exito! 😎", "A seguir comprando 🍰 🥞");
			setShowConfirmButton(false);
		}

		if (isError) {
			showToast("error", "La foto no se pudo actualizar 📵", "Por favor intenta nuevamente 😑");
			console.error("Error al actualizar la imagen de perfil", error);
		}
	}, [isSuccess, isError, error]);

	const handleChoosePhoto = async () => {
		const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (granted) {
			let result = await ImagePicker.launchCameraAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [4, 3],
				quality: 0.5,
				base64: true,
			});
			if (!result.canceled) {
				setNewProfileImage("data:image/jpeg;base64," + result.assets[0].base64);
			}
		}
	};

	const handleConfirmPhoto = () => {
		triggerProfileImage({ localId, image: newProfileImage });
	};

	const showToast = (type, text1, text2) => {
		Toast.show({
			type,
			text1,
			text2,
			visibilityTime: 5000,
		});
	};

	const showModal = () => {
		setModal(!modal);
	};

	return (
		<View style={styles.container}>
			<View style={styles.backgroundContainer}>
				<Image source={url} style={styles.backgroundImage} />
			</View>
			<View style={styles.contentContainer}>
				<View style={styles.profileInfoContainer}>
					<Image
						source={data ? { uri: data.image } : newProfileImage ? { uri: newProfileImage } : profileDefault}
						style={styles.profileImage}
					/>
					<View style={styles.detailsContainer}>
						<Text style={styles.emailText}>{user.email}</Text>
						<Text style={styles.lastConnectionText}>Última Conexión: Hoy</Text>
						<Text style={styles.lastConnectionText}>Ubicación: {""}</Text>
						<TouchableOpacity onPress={showModal}>
							<Text style={styles.locationText}>Actualizar ubicación</Text>
						</TouchableOpacity>
					</View>
				</View>
				<TouchableOpacity onPress={handleChoosePhoto}>
					<View style={styles.uploadButton}>
						<Text style={styles.uploadButtonText}>Subir Nueva Foto</Text>
					</View>
				</TouchableOpacity>
				{showConfirmButton && newProfileImage && (
					<TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPhoto}>
						<View style={styles.confirm}>
							<Text style={styles.uploadButtonText}>Confirmar Foto</Text>
						</View>
					</TouchableOpacity>
				)}
				{modal && <Modal onClose={() => setModal(false)} />}
			</View>
			{/* <LocationSelector /> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	backgroundContainer: {
		...StyleSheet.absoluteFillObject,
		justifyContent: "center",
		alignItems: "center",
	},
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
		width: "100%",
		height: "100%",
		position: "absolute",
	},
	contentContainer: {
		flex: 1,
		justifyContent: "center",
	},
	profileInfoContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 20,
	},
	profileImage: {
		width: 150,
		height: 150,
		borderRadius: 75,
		marginRight: 20,
	},
	detailsContainer: {
		flex: 1,
	},
	emailText: {
		fontSize: 14,
		color: "#fff",
		marginBottom: 5,
	},
	lastConnectionText: {
		fontSize: 14,
		color: "#fff",
	},
	uploadButton: {
		backgroundColor: "#3498db",
		padding: 10,
		borderRadius: 8,
		marginTop: 10,
	},
	confirmButton: {
		backgroundColor: "green",
		padding: 10,
		borderRadius: 8,
		marginTop: 10,
	},
	uploadButtonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
	locationText: {
		fontSize: 14,
		color: "#4D61DE",
		textDecorationLine: "underline",
	},
});

export default Profile;
