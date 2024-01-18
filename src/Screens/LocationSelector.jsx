import { useEffect, useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import url from "../../public/assets/home_background.jpg";
import * as Location from "expo-location";
import MapPreview from "../Components/MapPreview";
import { googleApi } from "../firebase/googleApi";
import { usePostUserLocationMutation } from "../app/services/shopServices";
import { useDispatch, useSelector } from "react-redux";

const LocationSelector = ({ navigation }) => {
	const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
	const [address, setAddress] = useState("");
	const [triggerPostUserLocation, { data, isSuccess, error, isError }] = usePostUserLocationMutation();
	const localId = useSelector(state => state.auth.value.localId);
	const dispatch = useDispatch();

	const onConfirmAddress = async () => {
		try {
			const locationFormatted = {
				address,
				...location,
			};
			const data = await triggerPostUserLocation({
				localId,
				locationFormatted,
			});
			console.log(data);
			navigation.navigate("Perfil");
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		if (isSuccess) {
			console.log(data);
		}
		if (error) {
			console.log(error);
		}
	}, [data, isSuccess, isError, error]);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				alert("Permission to access location was denied");
				return;
			}
			let location = await Location.getCurrentPositionAsync({});
			setLocation({ latitude: location.coords.latitude, longitude: location.coords.longitude });
		})();
	});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleApi.mapStatic}`
				);
				const data = await response.json();
				console.log(data);
			} catch (e) {
				console.log(e);
			}
		})();
	}, [location]);

	return (
		<View style={styles.container}>
			<View style={styles.backgroundContainer}>
				<Image source={url} style={styles.backgroundImage} />
			</View>
			<View style={styles.content}>
				<Text style={styles.buttonText}>Dirección: {location.latitude && location.longitude}</Text>
				<MapPreview latitud={location.latitude} longitud={location.longitude} />
				<TouchableOpacity style={styles.btn}>
					<View style={styles.uploadButton}>
						<Text style={styles.uploadButtonText}>Confirmar Ubicacion</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default LocationSelector;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
	},
	backgroundContainer: {
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
		width: "100%",
		height: "100%",
	},
	content: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 20,
	},
	logo: {
		marginBottom: 100,
	},
	buttonContainer: {
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
		bottom: 150,
		padding: 15,
		borderRadius: 10,
		marginTop: 20,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		borderWidth: 1,
		borderColor: "white",
	},
	buttonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
		marginVertical: 20,
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
	btn: {
		marginVertical: 20,
	},
});
