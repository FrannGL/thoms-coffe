import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../Screens/Login.jsx";
import Register from "../Screens/Register.jsx";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const AuthStack = () => {
	return (
		<Tab.Navigator
			initialRouteName='Login'
			screenOptions={{
				activeTintColor: "blue",
				inactiveTintColor: "gray",
				labelStyle: {
					fontSize: 12,
				},
			}}
		>
			<Tab.Screen
				name='Login'
				component={Login}
				options={{
					tabBarIcon: ({ color, size }) => <MaterialIcons name='login' size={size} color={color} />,
				}}
			/>
			<Tab.Screen
				name='Register'
				component={Register}
				options={{
					tabBarIcon: ({ color, size }) => <MaterialIcons name='supervised-user-circle' size={size} color={color} />,
				}}
			/>
		</Tab.Navigator>
	);
};

export default AuthStack;
