import { TouchableOpacity, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteSessions } from "../db";
import { clearUser } from "../features/authSlice/authSlice";
import { useEffect } from "react";

const LogoutButton = () => {
	const localId = useSelector(state => state.auth.value.localId);
	const dispatch = useDispatch();

	const onLogout = () => {
		deleteSessions(localId);
		dispatch(clearUser());
	};

	return localId ? (
		<View style={{ alignItems: "center", marginRight: 12 }}>
			<TouchableOpacity onPress={onLogout}>
				<MaterialIcons style={{ color: "black" }} name='logout' size={24} color='blue' />
			</TouchableOpacity>
			<Text>Logout</Text>
		</View>
	) : null;
};

export default LogoutButton;
