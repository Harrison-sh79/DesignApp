import { StyleSheet, View } from "react-native";

const ListItem = ({ children, extraStyles }) => {
  return <View style={[styles.item, extraStyles]}>{children}</View>;
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ListItem;
