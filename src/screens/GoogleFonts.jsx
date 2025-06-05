import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const GoogleFonts = () => {
  return (
    <View style={styles.container}>
      {/* Poppins */}
      <Text style={styles.poppinsRegular}>Poppins Regular</Text>
      <Text style={styles.poppinsThin}>Poppins Thin</Text>
      <Text style={styles.poppinsSemiBold}>Poppins SemiBold</Text>
      <Text style={styles.poppinsLight}>Poppins Light</Text>
      <Text style={styles.poppinsItalic}>Poppins Italic</Text>

      {/* Roboto */}
      <Text style={styles.robotoRegular}>Roboto Regular</Text>
      <Text style={styles.robotoBold}>Roboto Bold</Text>
      <Text style={styles.robotoLight}>Roboto Light</Text>
      <Text style={styles.robotoItalic}>Roboto Italic</Text>
      <Text style={styles.robotoThin}>Roboto Thin</Text>
    </View>
  );
};

export default GoogleFonts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  // Poppins
  poppinsRegular: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: '#333',
    marginBottom: 10,
  },
  poppinsThin: {
    fontFamily: 'Poppins-Thin',
    fontSize: 20,
    color: '#D7263D',
    marginBottom: 10,
  },
  poppinsSemiBold: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#1E90FF',
    marginBottom: 10,
  },
  poppinsLight: {
    fontFamily: 'Poppins-Light',
    fontSize: 20,
    color: '#20C997',
    marginBottom: 10,
  },
  poppinsItalic: {
    fontFamily: 'Poppins-Italic',
    fontSize: 20,
    color: '#FF8C00',
    marginBottom: 10,
  },

  // Roboto
  robotoRegular: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    color: '#4B0082',
    marginBottom: 10,
  },
  robotoBold: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: '#008000',
    marginBottom: 10,
  },
  robotoLight: {
    fontFamily: 'Roboto-Light',
    fontSize: 20,
    color: '#008B8B',
    marginBottom: 10,
  },
  robotoItalic: {
    fontFamily: 'Roboto-Italic',
    fontSize: 20,
    color: '#DC143C',
    marginBottom: 10,
  },
  robotoThin: {
    fontFamily: 'Roboto-Thin',
    fontSize: 20,
    color: '#6A5ACD',
    marginBottom: 10,
  },
});
