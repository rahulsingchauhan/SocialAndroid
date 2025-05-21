import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

const SearchScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>Search 🔍</Text>

      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Search topics, tools, resources..."
          placeholderTextColor="#9CA3AF"
        />
      </View>

      <Text style={styles.sectionTitle}>Suggested</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>• React Native Tips</Text>
        <Text style={styles.cardText}>• Modern UI Designs</Text>
        <Text style={styles.cardText}>• Developer Resources</Text>
      </View>
    </ScrollView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 24,
  },
  searchWrapper: {
    backgroundColor: '#fff',
    borderRadius: 14,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 28,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#111827',
    borderRadius: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4F46E5',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 4,
  },
  cardText: {
    fontSize: 15,
    color: '#374151',
    marginBottom: 10,
  },
});
