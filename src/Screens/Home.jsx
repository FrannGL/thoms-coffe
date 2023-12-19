import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import url from "../../public/assets/home_background.jpg";
import logo from "../../public/assets/logo.png";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image source={url} style={styles.backgroundImage} />
      </View>
      <View style={styles.inner_container}>
        <Image source={logo} style={styles.logo} />
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Categorias")}
      >
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  backgroundContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  inner_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: 100,
  },
  buttonContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 150,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderWidth: 1,
    borderColor: "white",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
