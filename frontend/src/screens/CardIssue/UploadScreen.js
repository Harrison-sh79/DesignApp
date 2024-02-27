import { View, Text, Image } from "react-native";
import globalStyles from "../../styles/GlobalStyles";
import Button from "../../components/Button/Button";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useRef, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { documentListData } from "./data/documentListData";
import ModalList from "../../components/Modal/ModalList";

const UploadScreen = ({ navigation }) => {
  // const [image, setImage] = useState(null);
  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   if (!result.canceled) {
  //     setImage(result.assets[0].uri);
  //   }
  // };
  // const [cameraImage, setCameraImage] = useState(null);
  // const [type, setType] = useState(CameraType.back);
  // const [permission, requestPermission] = ImagePicker.useCameraPermissions();
  // const cameraRef = useRef(null);
  // const [isCameraActive, setIsCameraActive] = useState(false);
  // const [isCameraReady, setIsCameraReady] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     if (!permission) {
  //       await requestPermission();
  //     }
  //   })();
  // }, []);

  // const takePhoto = async () => {
  //   if (!permission) {
  //     alert("Requesting permission...");
  //     return;
  //   }

  //   if (!permission.granted) {
  //     alert("Camera permission is required to take photos.");
  //     return;
  //   }
  //   setIsCameraActive(true);
  //   if (cameraRef.current && isCameraReady) {
  //     const photo = await cameraRef.current.takePictureAsync();
  //     setCameraImage(photo.uri);
  //     setIsCameraActive(false);
  //   } else {
  //     console.log("Camera is not ready.");
  //   }
  // };
  const [isModalVisible, setModalVisible] = useState(false);
  const uploadFromAlbum = () => {
    setModalVisible(true);
  };
  const uploadFromCamera = () => {
    setModalVisible(true);
  };

  return (
    <View style={[globalStyles.formWrapper]}>
      <View style={{ flex: 1 }}>
        <Text style={globalStyles.formTitle}>Upload your document</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Button
          title="Upload from album"
          style="largeButton"
          onPress={uploadFromAlbum}
        />
        {/* {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )} */}
      </View>
      <View style={{ flex: 4 }}>
        <Button title="Camera" style="largeButton" onPress={uploadFromCamera} />
      </View>
      {/* {isCameraActive && (
          <Camera
            type={type}
            ref={cameraRef}
            style={{ width: "100%", height: "50%" }}
            onCameraReady={() => {
              console.log("Camera is now ready");
              setIsCameraReady(true);
            }}
          ></Camera>
        )}
        {cameraImage && (
          <Image
            source={{ uri: cameraImage }}
            style={{ width: 200, height: 200 }}
          />
        )} */}
      {isModalVisible && (
        <ModalList
          data={documentListData}
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
          navigation={navigation}
        />
      )}
    </View>
  );
};

export default UploadScreen;
