import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator.js";
import AuthStack from "./AuthStack.js";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSession } from "../db/index.js";
import { setUser } from "../features/authSlice/authSlice.js";

const MainNavigator = () => {
	const dispatch = useDispatch();

	const idToken = useSelector(state => state.auth.value.idToken);

	useEffect(() => {
		(async () => {
			try {
				const session = await getSession();
				if (session.rows.length) {
					const user = session.rows._array[0];
					dispatch(setUser(user));
				}
			} catch (e) {
				console.log(e);
			}
		})();
	}, []);

	return <NavigationContainer>{idToken ? <TabNavigator /> : <AuthStack />}</NavigationContainer>;
};

export default MainNavigator;
