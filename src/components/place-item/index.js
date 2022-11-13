import React from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";
import { styles } from "./styles";

const PlaceItem = ({ title, image, onSelect, address, date, category }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.info}>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;
