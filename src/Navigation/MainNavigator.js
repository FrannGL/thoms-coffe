import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator.js";
import AuthStack from "./AuthStack.js";
import { useState } from "react";

const MainNavigator = () => {
	const [idToken, setIdToken] = useState(null);

	return (
		<NavigationContainer>{idToken ? <TabNavigator /> : <AuthStack setIdToken={setIdToken} />}</NavigationContainer>
	);
};

export default MainNavigator;
