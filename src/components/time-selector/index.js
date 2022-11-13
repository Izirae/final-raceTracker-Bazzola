import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native"
import colors from "../../utils/colors";
import { styles } from "./styles";

const TimeSelector = ({ onTime }) => {
  const [time, setTime] = useState(null);

  const onHandleSetTime = (textTime) => {
    setTime(textTime)
    onTime(textTime)
  }

  return (
    <View style={styles.dateContainer}>
      <TextInput style={styles.input}
        onChangeText={onHandleSetTime}
        value={time}
        placeholder="Ingrese el tiempo total y las vueltas de carrera..."
        placeholderTextColor={colors.placeholder}
      />
    </View>
  );
};
export default TimeSelector;