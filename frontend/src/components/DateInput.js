import * as React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  View,
} from "react-native";
import globalStyles from "../styles/GlobalStyles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import Button from "./Button/Button";

const DateInput = ({ placeholder, onChangeDate }) => {
  const [date, setDate] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const onChange = (_, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    if (onChangeDate) {
      onChangeDate(currentDate);
    }
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setModalOpen(true);
        }}
        activeOpacity={1}
      >
        <TextInput
          style={globalStyles.input}
          value={date?.toISOString().split("T")[0]}
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={modalOpen}
        transparent={true}
        onRequestClose={() => {
          setModalOpen(false);
        }}
      >
        <View style={styles.modalView}>
          <DateTimePicker
            minimumDate={new Date(1900, 0, 1)}
            display={"spinner"}
            value={date || new Date()}
            onChange={onChange}
          />
          <Button
            title="Submit"
            style="largeButton"
            onPress={() => {
              if (!date) {
                console.log(new Date());
                setDate(new Date());
                onChangeDate(new Date());
              }
              setModalOpen(false);
            }}
          ></Button>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default DateInput;
