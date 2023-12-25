import TabNavigator from "./src/Navigation/TabNavigator";
import { StatusBar } from "expo-status-bar";
import { store } from "./src/app/store";
import { Provider } from "react-redux";
import Toast from "react-native-toast-message";

export default function App() {
	return (
		<>
			<Provider store={store}>
				<StatusBar />
				<TabNavigator />
			</Provider>
			<Toast />
		</>
	);
}
