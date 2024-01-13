import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Profile from "../Screens/Profile";
import ImageSelector from "../Screens/ImageSelector";

const Tab = createBottomTabNavigator();

const ShopStack = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				activeTintColor: "blue",
				inactiveTintColor: "gray",
				labelStyle: {
					fontSize: 12,
				},
			}}
		>
			<Tab.Screen
				name='Perfil'
				component={Profile}
				options={{
					tabBarIcon: ({ color, size }) => <FontAwesome name='user-circle' size={size} color={color} />,
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name='Seleccionar Imagen'
				component={ImageSelector}
				options={{
					tabBarIcon: ({ color, size }) => <MaterialIcons name='image-search' size={size} color={color} />,
					headerShown: false,
				}}
			/>
		</Tab.Navigator>
	);
};

export default ShopStack;
