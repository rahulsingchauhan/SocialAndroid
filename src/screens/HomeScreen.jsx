import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity , ScrollView} from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  // List of buttons/screens
  const buttons = [
       { title: 'BigForm', screen:'BigForm'},
    { title: 'Google Fonts', screen:'GoogleFonts'},
     { title: 'Go to Login', screen: 'FormScreen' },
    { title: 'BigForm', screen:'BigForm'},
    { title: 'SignupForm', screen:'SignupForm'},
     { title: 'GetApiData', screen:'GetApiData'},
     { title: 'PostLoginApi', screen:'PostLoginApi'},
      { title: 'ImagePickerScreen', screen: 'ImagePickerScreen' },
        { title: 'AsyncStorage', screen:'AsyncStorage'},
  ];

  return (
    <ScrollView>
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
    </ScrollView>
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
