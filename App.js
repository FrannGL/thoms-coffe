import TabNavigator from "./src/Navigation/TabNavigator";
import { StatusBar } from "expo-status-bar";

export default function App() {
	return (
		<>
			<StatusBar />
			<TabNavigator />
		</>
	);
}
