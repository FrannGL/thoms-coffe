import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home.jsx";
import Categories from "../Screens/Categories.jsx";
import Products from "../Screens/Products.jsx";
import Orders from "../Screens/Orders.jsx";
import { AntDesign } from "@expo/vector-icons";

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
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Categorias"
        component={Categories}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="bars" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Productos"
        component={Products}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="isv" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Mi orden"
        component={Orders}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ShopStack;
