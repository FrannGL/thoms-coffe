import { Image } from "react-native";
import { googleApi } from "../firebase/googleApi";

const MapPreview = ({ latitud, longitud }) => {
	const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitud},${longitud}zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:C%7C${latitud},${longitud}&key=${googleApi.mapStatic}`;
	const defaultMap =
		"https://previews.123rf.com/images/abscent/abscent1604/abscent160400043/55003049-resumen-mapa-gen%C3%A9rico-de-la-ciudad-con-las-carreteras-edificios-parques-r%C3%ADo-ilustraci%C3%B3n.jpg";

	return <Image source={latitud ? { uri: mapPreviewUrl } : { uri: defaultMap }} style={{ width: 300, height: 300 }} />;
};

export default MapPreview;
