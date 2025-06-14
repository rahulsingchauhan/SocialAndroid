import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const AfterLoginScreen = ({ route }) => {

  const { user } = route.params;

  const handleEditImage = () => {
    console.log('Edit Image Pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: user.image }} style={styles.avatar} />
        <TouchableOpacity style={styles.editIcon} onPress={handleEditImage}>
          <Text style={styles.editIconText}>✏️</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.name}>
        {user.firstName} {user.lastName}
      </Text>

      <Text style={styles.username}>@{user.username}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user.email}</Text>

        <Text style={styles.label}>Gender</Text>
        <Text style={styles.value}>{user.gender.toUpperCase()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 2,
    borderColor: '#444',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#222',
    borderRadius: 20,
    padding: 5,
    borderWidth: 1,
    borderColor: '#888',
  },
  editIconText: {
    fontSize: 14,
    color: '#fff',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  username: {
    fontSize: 16,
    color: '#999',
    marginBottom: 30,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 13,
    color: '#777',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 16,
  },
});

export default AfterLoginScreen;
