import TabNavigator from "./src/Navigation/TabNavigator";
import { StatusBar } from "expo-status-bar";
import { store } from "./src/Store/store";
import { Provider } from "react-redux";

export default function App() {
	return (
		<>
			<Provider store={store}>
				<StatusBar />
				<TabNavigator />
			</Provider>
		</>
	);
}
