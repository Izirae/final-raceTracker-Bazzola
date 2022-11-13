import React, { useState } from "react";
import { View, ScrollView, TextInput, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ImageSelector, LocationSelector, DateSelector, TimeSelector } from "../../components";
import { saveRecord } from "../../store/record.slice";
import colors from "../../utils/colors";
import { styles } from "./styles";

const NewRecord = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(null);
  const [category, setCategory] = useState(null);
  const [image, setImage] = useState(null);
  const [time, setTime] = useState(null);
  const [location, setLocation] = useState(null);
  const [date, setDate] = useState(null);
  const user_id = useSelector((state) => state.auth.auth?.userId)

  const onHandleTitleChange = (text) => {
    setTitle(text);
  };

  const onHandleCategoryChange = (textCat) => {
    setCategory(textCat);
  };

  const onHandleSubmit = () => {
    dispatch(saveRecord(title, image, location, date, category, time, user_id));
    navigation.navigate("Records");
  };

  const onHandleImageSelect = (imageUrl) => {
    setImage(imageUrl);
  };

  const onHandleLocationSelect = (location) => {
    setLocation(location);
  };

  const onHandleDateSelect = (date) => {
    setDate(date);
  };

  const onHandleTimeSelect = (time) => {
    setTime(time);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el nombre del circuito..."
          placeholderTextColor={colors.placeholder}
          onChangeText={onHandleTitleChange}
          value={title}
        />
        <TextInput
          style={styles.input}
          placeholder="Ingrese la categoría del vehículo..."
          placeholderTextColor={colors.placeholder}
          onChangeText={onHandleCategoryChange}
          value={category}
        />
        <DateSelector onDate={onHandleDateSelect}/>
        <TimeSelector onTime={onHandleTimeSelect}/>
        <ImageSelector onImage={onHandleImageSelect} />
        <LocationSelector onLocation={onHandleLocationSelect} />
        <Button title="Guardar registro" color={"#39393a"} onPress={onHandleSubmit} />
      </View>
    </ScrollView>
  );
};

export default NewRecord;
