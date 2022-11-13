import { View, Text, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";
import { MapPreview } from "../../components/index";
import { styles } from "./styles";

const RecordDetail = ({ route }) => {

  const { recordId } = route.params || {};
  const record = useSelector((state) => state.record.records.find((record) => record.id === recordId));

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{record.title}</Text>
      <Text style={styles.subtitle}>{record.date}</Text>
      <Image source={{ uri: record.image }} style={styles.image} />
      <Text style={styles.title}>{record.category}</Text>
      <Text style={styles.title}>{record.time}</Text>
      <View style={styles.location}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{record.address}</Text>
        </View>
        <MapPreview style={styles.map} location={{ lat: record.coords.lat, lng: record.coords.lng }}>
          <Text style={styles.notFound}>Location not available</Text>
        </MapPreview>
      </View>
    </ScrollView>
  );
};
export default RecordDetail;