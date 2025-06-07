import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const ImagePickerScreen = () => {
  const [image, setImage] = useState(null); // Stores selected or captured image

  // Function to pick image from gallery
  const pickImage = async () => {
    try {
      const selectedImage = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      console.log('Gallery Image:', selectedImage);
      setImage(selectedImage);
    } catch (error) {
      console.log('User cancelled or error:', error);
    }
  };

  // Function to open camera and capture image
  const openCamera = async () => {
    try {
      const capturedImage = await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: false,
      });
      console.log('Camera Image:', capturedImage);
      setImage(capturedImage);
    } catch (error) {
      console.log('User cancelled or error:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Show the image preview if image exists */}
      {image?.path && (
        <Image
          source={{ uri: image.path }}
          style={styles.previewImage}
          resizeMode="cover"
        />
      )}

      {/* Button to pick image from gallery */}
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Select Image from Gallery</Text>
      </TouchableOpacity>

      {/* Button to capture image from camera */}
      <TouchableOpacity style={[styles.button, styles.cameraButton]} onPress={openCamera}>
        <Text style={styles.buttonText}>Capture Image from Camera</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImagePickerScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  previewImage: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#444',
  },
  button: {
    marginTop: 40,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
  },
  cameraButton: {
    marginTop: 20,
  },
  buttonText: {
    color: '#FFD700', // gold/yellow text for dark contrast
    fontSize: 16,
    fontWeight: 'bold',
  },
});
