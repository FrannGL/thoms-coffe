import { NavigationContainer } from "@react-navigation/native";
import ShopStack from "./ShopStack";

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <ShopStack />
    </NavigationContainer>
  );
};

export default TabNavigator;
