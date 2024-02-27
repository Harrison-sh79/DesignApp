import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/Ionicons";

const UploadLicenseScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [frontImage, setFrontImage] = useState(null);
  const [error, setError] = useState("");

  const pickImage = async (setSelectedImage) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      if (result.type === "image" && result.fileSize <= 5 * 1024 * 1024) {
        setSelectedImage(result.uri);
        setError(""); // Clear any previous errors
      } else {
        setError("Photo exceeds maximum size (5MB)");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Driver’s License</Text>
      <Text style={styles.label}>Front Side (Photo Side)</Text>
      <Icon name="add-circle-outline" size={TEXT_MEDIUM} />
      <TouchableOpacity
        style={styles.uploadArea}
        onPress={() => pickImage(setFrontImage)}
      >
        {frontImage ? (
          <Image source={{ uri: frontImage }} style={styles.imagePreview} />
        ) : (
          <Text style={styles.uploadText}>Upload</Text>
        )}
      </TouchableOpacity>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      {/* ... other components for the back side ... */}
      <TouchableOpacity style={styles.reviewButton}>
        <Text>Review Application</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff", // your background color
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  uploadArea: {
    borderWidth: 1,
    borderColor: "grey",
    borderStyle: "dashed",
    borderRadius: 10,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  imagePreview: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  uploadText: {
    fontSize: 16,
    color: "blue",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  reviewButton: {
    backgroundColor: "blue", // your button color
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default UploadLicenseScreen;
