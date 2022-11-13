import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { View, Image, Text, Alert, Button } from "react-native"
import colors from "../../utils/colors";
import { styles } from "./styles";

const ImageSelector = ({ onImage }) => {
  const [pickedUrl, setPickedUrl] = useState(null);

  const verifyPermissionsCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permiso denegado", "La app necesita permisos para usar la cámara", [{ text: "Aceptar" }]);
      return false;
    }
    return true;
  };

  const verifyPermissionsGal = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permiso denegado", "La app necesita permisos para usar la galería", [{ text: "Aceptar" }]);
      return false;
    }
    return true;
  };

  const onHandleTakeImage = async () => {
    const isCameraPermission = await verifyPermissionsCamera();
    if (!isCameraPermission) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [5, 4],
      quality: 0.7,
    });

    setPickedUrl(image.uri);
    onImage(image.uri);
  };
  const onHandlePickImage = async () => {
    const isGalPermission = await verifyPermissionsGal();
    if (!isGalPermission) return;

    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [5, 4],
      quality: 0.7,
    });

    setPickedUrl(image.uri);
    onImage(image.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUrl ? (
          <Text style={styles.text}>No hay imagen seleccionada</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>
      <View style={styles.containerActions}>
        <View style={{marginBottom: "10%", width: "75%"}}>
        <Button title="Utilizar cámara" color={colors.primary} onPress={onHandleTakeImage} />
        </View>
        <View style={{width: "75%"}}>
        <Button title="Elegir desde galería" color={colors.tertiary} onPress={onHandlePickImage} />
        </View>
      </View>
    </View>
  );
};

export default ImageSelector;
