import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Modal,
  TouchableOpacity,
  View,
} from "react-native";
import ModalItem from "./ModalItem";

const ModalList = ({ data, isModalVisible, setModalVisible, navigation }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const handlePress = (item) => {
    if (item.items && item.items.length > 0) {
      setSelectedItem(item);
    } else {
      setModalVisible(false);
      navigation.navigate(item.title);
    }
  };
  const renderItem = ({ item }) => {
    return <ModalItem item={item} onPress={() => handlePress(item)} />;
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <TouchableOpacity
        style={styles.modalContainer}
        onPressOut={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modal}>
          <FlatList
            data={selectedItem ? selectedItem.items : data}
            renderItem={renderItem}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
    maxHeight: "50%",
  },
});

export default ModalList;
