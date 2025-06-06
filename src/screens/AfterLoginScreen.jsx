import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AfterLoginScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.image }} style={styles.avatar} />
      <Text style={styles.name}>{user.firstName} {user.lastName}</Text>
      <Text style={styles.username}>@{user.username}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.gender}>{user.gender.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    color: '#aaa',
    fontSize: 16,
    marginBottom: 10,
  },
  email: {
    color: '#ccc',
    fontSize: 14,
  },
  gender: {
    color: '#888',
    fontSize: 13,
    marginTop: 10,
  },
});

export default AfterLoginScreen;
