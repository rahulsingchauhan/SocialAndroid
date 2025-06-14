import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const ModalScreen = ({ visible, onClose, onImagePicked }) => {
  const openCamera = async () => {
    try {
      const image = await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      });
      onImagePicked(image);
      onClose();
    } catch (error) {
      console.log('Camera Error:', error);
      onClose();
    }
  };

  const openGallery = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      onImagePicked(image);
      onClose();
    } catch (error) {
      console.log('Gallery Error:', error);
      onClose();
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.overlay} onPress={onClose}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.option} onPress={openCamera}>
            <Text style={styles.optionText}>📷 Open Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={openGallery}>
            <Text style={styles.optionText}>🖼️ Choose from Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.option, styles.cancel]} onPress={onClose}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  option: {
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
  },
  cancel: {
    borderBottomWidth: 0,
    marginTop: 10,
  },
  cancelText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default ModalScreen;
