import React, { useState } from "react";
import { View, Text, Button } from "react-native"
import colors from "../../utils/colors";
import { styles } from "./styles";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const DateSelector = ({ onDate }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(null);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    onDate(currentDate.toISOString().split('T')[0]);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
    setShow(1)
  };


  return (
    <View style={styles.dateContainer}><Text style={styles.dateText}></Text>
      <Button color={colors.tertiary} onPress={showDatepicker} title="Elegir fecha" />
      {!show? <Text style={styles.dateText}>Seleccione fecha</Text> : <Text style={styles.dateText}>{date.toISOString().split('T')[0]}</Text>}
    </View>
  );
};
export default DateSelector;