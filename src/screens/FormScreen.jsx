import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Yup validation
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'At least 3 characters')
    .required('Name is required'),
});

const FormScreen = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ name: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert(`Hello, ${values.name}`);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              placeholderTextColor="#888"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            {touched.name && errors.name && (
              <Text style={styles.error}>{errors.name}</Text>
            )}

            <Button onPress={handleSubmit} title="Submit" color="#1E90FF" />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // black background
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#444',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  error: {
    color: '#ff4d4d',
    marginBottom: 10,
  },
});

export default FormScreen;




