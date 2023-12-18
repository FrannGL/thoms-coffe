import { Dimensions, StyleSheet } from "react-native";

let deviceWidth = Dimensions.get("window").width * 0.95;

export const theme = {
	// Colores
	primaryColor: "#F0F8F9",
	secondaryColor: "green",
	backgroundColor: "#fff",
	textColor: "#555",
	closeButtonColor: "red",

	// Tamaños de fuente
	titleFontSize: 20,
	productTitleFontSize: 18,
	productDescriptionFontSize: 16,
	productPriceFontSize: 16,

	// Margenes y padding
	containerPadding: 20,
	productContainerPadding: 10,
	productContainerMarginBottom: 15,
	closeButtonMarginTop: 20,

	// Otros estilos
	borderRadius: 8,
	productImageContainerWidth: 120,
	productImageContainerHeight: 120,
	productImageBorderRadius: 50,
	productImageMarginRight: 15,
	productImageWidth: "100%",
	productImageHeight: "100%",
	productImageBorderRadius: 30,
	productImageResizeMode: "cover",
	productDetailContainerFlex: 1,
	productDetailContainerJustifyContent: "center",
	productDetailContainerAlignItems: "flex-start",
	closeButtonPadding: 10,
	closeButtonBorderRadius: 5,

	// Categorías
	cardWidth: deviceWidth,
	cardHeight: 250,
	cardBorderColor: "white",
	cardMarginVertical: 2,
	cardPosition: "relative",
	cardOverflow: "hidden",
	thumbnailPosition: "absolute",
	thumbnailTop: 0,
	thumbnailWidth: "100%",
	thumbnailHeight: "100%",
	thumbnailResizeMode: "cover",
	overlayAbsoluteFillObject: { ...StyleSheet.absoluteFillObject },
	overlayBackgroundColor: "rgba(0, 0, 0, 0.1)",
	overlayJustifyContent: "flex-end",
	overlayAlignItems: "center",
	titleFontSizeCard: 25,
	titleFontWeightCard: "bold",
	titleColorCard: "white",
	titleTextShadowColorCard: "rgba(0, 0, 0, 0.75)",
	titleTextShadowOffsetCard: { width: 2, height: 2 },
	titleTextShadowRadiusCard: 20,
	titleBorderTopWidthCard: 0.5,
	titleBorderTopColorCard: "white",
	titlePaddingTopCard: 5,
	titleMarginVerticalCard: 20,
};
