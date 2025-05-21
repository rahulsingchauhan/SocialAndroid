import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const notifications = [
  'You have a new follower 🎉',
  'Profile updated successfully ✅',
  'Your password was changed 🔐',
  'New message from Admin 💬',
];

const NotificationsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Notifications 🔔</Text>

      {notifications.map((note, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardText}>{note}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default NotificationsScreen;

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
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    color: '#374151',
  },
});
