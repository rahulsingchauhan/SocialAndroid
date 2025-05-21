import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const EditProfileScreen = () => {
  const [name, setName] = useState('Rahul Singh Chauhan');
  const [email, setEmail] = useState('rahul@example.com');
  const [bio, setBio] = useState('React Developer | UI Enthusiast');

  const handleSave = () => {
    // Save logic (can integrate with API or storage)
    alert('Profile updated!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>Edit Profile</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Bio</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Write something about yourself..."
          multiline
          numberOfLines={4}
          value={bio}
          onChangeText={setBio}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Icon name="save-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.saveText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#F9FAFB',
    flexGrow: 1,
  },
  header: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 28,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#374151',
  },
  input: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    fontSize: 15,
    color: '#111827',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#4F46E5',
    paddingVertical: 16,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  saveText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
