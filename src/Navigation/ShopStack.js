import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Categories from "../Screens/Categories.jsx";
import Products from "../Screens/Products.jsx";
import Orders from "../Screens/Orders.jsx";
import Profile from "../Screens/Profile.jsx";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import LogoutButton from "../Components/Logout.jsx";

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
				name='Categorias'
				component={Categories}
				options={{
					tabBarIcon: ({ color, size }) => <AntDesign name='bars' size={size} color={color} />,
					headerRight: () => <LogoutButton />,
				}}
			/>
			<Tab.Screen
				name='Productos'
				component={Products}
				options={{
					tabBarIcon: ({ color, size }) => <AntDesign name='isv' size={size} color={color} />,
					headerRight: () => <LogoutButton />,
				}}
			/>
			<Tab.Screen
				name='Mi orden'
				component={Orders}
				options={{
					tabBarIcon: ({ color, size }) => <AntDesign name='shoppingcart' size={size} color={color} />,
					headerRight: () => <LogoutButton />,
				}}
			/>
			<Tab.Screen
				name='Mi Perfil'
				component={Profile}
				options={{
					tabBarIcon: ({ color, size }) => <FontAwesome name='user-circle' size={size} color={color} />,
					headerRight: () => <LogoutButton />,
				}}
			/>
		</Tab.Navigator>
	);
};

export default ShopStack;
