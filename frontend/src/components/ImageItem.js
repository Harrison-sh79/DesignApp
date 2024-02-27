import React, { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";

const ImageItem = ({
  source,
  width = "100%",
  height = undefined,
  extraStyles,
}) => {
  const [aspectRatio, setAspectRatio] = useState(1); // Default aspect ratio
  const styles = StyleSheet.create({
    image: {
      aspectRatio: aspectRatio,
      width: width,
      height: height,
    },
  });

  useEffect(() => {
    const imageSource = Image.resolveAssetSource(source);
    setAspectRatio(imageSource.width / imageSource.height);
  }, []);

  return (
    <Image
      source={source}
      style={[styles.image, extraStyles]}
      resizeMode="contain"
    />
  );
};

export default ImageItem;
