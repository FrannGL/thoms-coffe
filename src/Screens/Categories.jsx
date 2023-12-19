import { StyleSheet, View, FlatList, Image } from "react-native";
import { categories } from "../Data/categories.json";
import CategorieCard from "../Components/CategorieCard.jsx";
import url from "../../public/assets/home_background.jpg";
import Footer from "../Components/Footer.jsx";

const Categories = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.backgroundContainer}>
				<Image source={url} style={styles.backgroundImage} />
			</View>
			<View style={styles.categories_container}>
				<FlatList
					data={categories}
					keyExtractor={item => item.id}
					renderItem={({ item }) => (
						<CategorieCard item={item} onPress={() => navigation.navigate("Productos", { category: item.title })} />
					)}
				/>
			</View>
			{/* <Footer /> */}
		</View>
	);
};

export default Categories;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#2F2F2E",
	},
	backgroundContainer: {
		...StyleSheet.absoluteFillObject,
		justifyContent: "center",
		alignItems: "center",
	},
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
		width: "100%",
		height: "100%",
	},
	categories_container: {
		flex: 1,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
});
