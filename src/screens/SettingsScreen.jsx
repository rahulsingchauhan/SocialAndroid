import React from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import { useState } from 'react';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotifications, setIsNotifications] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Settings ⚙️</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch
          value={isNotifications}
          onValueChange={setIsNotifications}
          trackColor={{ false: '#D1D5DB', true: '#4F46E5' }}
          thumbColor={isNotifications ? '#FFFFFF' : '#9CA3AF'}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={setIsDarkMode}
          trackColor={{ false: '#D1D5DB', true: '#4F46E5' }}
          thumbColor={isDarkMode ? '#FFFFFF' : '#9CA3AF'}
        />
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 20,
  },
  settingItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  settingText: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '500',
  },
});
