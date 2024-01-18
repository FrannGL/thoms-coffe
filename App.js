import MainNavigator from "./src/Navigation/MainNavigator";
import { StatusBar } from "expo-status-bar";
import { store } from "./src/app/store";
import { Provider } from "react-redux";
import Toast from "react-native-toast-message";
import { init } from "./src/db";

init()
	.then(() => console.log("Database initialized"))
	.catch(err => console.log(err));

export default function App() {
	return (
		<>
			<StatusBar />
			<Provider store={store}>
				<MainNavigator />
			</Provider>
			<Toast />
		</>
	);
}
