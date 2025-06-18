import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageExample = () => {
  const [inputValue, setInputValue] = useState('');

  // ✅ Function to SAVE value
  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem('myKey', inputValue);
      Alert.alert('Success', 'Value saved successfully!');
    } catch (e) {
      Alert.alert('Error', 'Failed to save the data.');
    }
  };

  // ✅ useEffect: Automatically run once when screen loads
  useEffect(() => {
    const getValueOnLoad = async () => {
      try {
        const storedValue = await AsyncStorage.getItem('myKey'); // 🔹 Get data from storage
        console.log(storedValue)
        if (storedValue !== null) {
          setInputValue(storedValue); // 🔸 Set to state if value exists
        }
      } catch (e) {
        console.log('Failed to load data:', e);
      }
    };

    getValueOnLoad(); // 🔁 Call function after mount
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AsyncStorage - useEffect Auto Load</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter something..."
        placeholderTextColor="#888"
        value={inputValue}
        onChangeText={setInputValue}
      />

      <Button title="Save to Storage" onPress={handleSubmit} color="#FF6B00" />

      {/* 
        🔽 Manual Get Button - This part is commented so you can compare with useEffect
        <View style={{ marginTop: 10 }}>
          <Button title="Get from Storage" onPress={handleGetValue} color="#00C896" />
        </View>

        🔁 Manual Get Function - Also commented
        const handleGetValue = async () => {
          try {
            const storedValue = await AsyncStorage.getItem('myKey');
            if (storedValue !== null) {
              setInputValue(storedValue);
              Alert.alert('Retrieved Value', storedValue);
            } else {
              Alert.alert('Info', 'No value found!');
            }
          } catch (e) {
            Alert.alert('Error', 'Failed to retrieve data.');
          }
        };
      */}
    </View>
  );
};

export default AsyncStorageExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#444',
    backgroundColor: '#1E1E1E',
    color: '#fff',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});
