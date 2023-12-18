import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home.jsx";
import Categories from "../Screens/Categories.jsx";
import Products from "../Screens/Products.jsx";

const Stack = createNativeStackNavigator();
const Navigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Inicio' component={Home} />
				<Stack.Screen name='Categorias' component={Categories} />
				<Stack.Screen name='Productos' component={Products} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigator;
