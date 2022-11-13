import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { PlaceItem } from "../../components";
import { loadRecords } from "../../store/record.slice";
import { styles } from "./styles";

const RecordList = ({ navigation }) => {

  const dispatch = useDispatch()
  const records = useSelector((state) => state.record.records);
  const user_id = useSelector((state) => state.auth.auth?.userId)

  const renderItem = ({ item }) => (
    <PlaceItem
      {...item}
      onSelect={() => navigation.navigate("RecordDetail", { recordId: item.id })}
    />
  );

  const ListEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.empty}>Aún no hay registros cargados</Text>
    </View>
  );

  useEffect(() => {
    dispatch(loadRecords(user_id));
  }, [dispatch]);

  return (
    <FlatList
      data={records}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.container}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

export default RecordList;