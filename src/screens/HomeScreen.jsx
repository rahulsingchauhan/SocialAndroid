import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome, Rahul 🏠</Text>
      <Text style={styles.subText}>Choose where you want to go</Text>

      <View style={styles.buttonsContainer}>
        <HomeButton
          icon="person-circle-outline"
          label="Profile"
          onPress={() => navigation.navigate('BottomTabs')}
        />
        <HomeButton
          icon="search-outline"
          label="Search"
          onPress={() => navigation.navigate('SearchScreen')}
        />
        <HomeButton
          icon="settings-outline"
          label="Settings"
          onPress={() => navigation.navigate('SettingsScreen')}
        />

        <HomeButton
          icon="notifications-outline"
          label="Notifications"
          onPress={() => navigation.navigate('Notifications')}
        />
      </View>
    </View>
  );
};

const HomeButton = ({icon, label, onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Icon name={icon} size={24} color="#FFFFFF" style={styles.icon} />
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 6,
  },
  subText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonsContainer: {
    gap: 16,
  },
  button: {
    backgroundColor: '#4F46E5',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 14,
    elevation: 2,
  },
  icon: {
    marginRight: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
});
