import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Login.jsx";
import Register from "../Screens/Register.jsx";

const Stack = createStackNavigator();

const AuthStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Login'
				component={Login}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='Register'
				component={Register}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default AuthStack;
