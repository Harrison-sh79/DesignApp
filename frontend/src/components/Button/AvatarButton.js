import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";

const AvatarButton = ({ size, source }) => {
  return (
    <TouchableOpacity style={styles.avatarContainer}>
      <View style={[styles.maskContainer, { width: size, height: size }]}>
        <View style={styles.mask}></View>
        <Icon name="create" size={25} color="#FFF" />
      </View>
      <Avatar rounded source={source} size={size} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    position: "relative",
  },
  maskContainer: {
    position: "absolute",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mask: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    opacity: 0.2,
    borderRadius: "100%",
  },
});

export default AvatarButton;
