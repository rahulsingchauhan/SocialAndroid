import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  // List of buttons/screens
  const buttons = [
    { title: 'Go to Profile', screen: 'Profile' },
    { title: 'Go to Settings', screen: 'SettingsScreen' },
    { title: 'Go to Notifications', screen: 'NotificationsScreen' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      {buttons.map((btn, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => navigation.navigate(btn.screen)}
        >
          <Text style={styles.buttonText}>{btn.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HomeScreen;
