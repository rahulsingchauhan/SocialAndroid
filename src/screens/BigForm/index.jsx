import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { Formik } from 'formik';
import { styles } from './style';
import { SignupValidationSchema } from '../Schema/Schema';

// ✅ Yup Validation Schema

const BigForm = () => {
  const loginSubmit =(values)=>{
console.log(values.fullName)
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          password: '',
          confirmPassword: '',
          phone: '',
        }}
        validationSchema={SignupValidationSchema}
        onSubmit={(values) => loginSubmit(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            {/* Full Name */}
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#888"
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              value={values.fullName}
            />
            {touched.fullName && errors.fullName && (
              <Text style={styles.error}>{errors.fullName}</Text>
            )}

            {/* Email */}
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#888"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            {/* Password */}
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            {/* Confirm Password */}
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#888"
              secureTextEntry
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword}</Text>
            )}

            {/* Phone Number */}
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="#888"
              keyboardType="numeric"
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
            />
            {touched.phone && errors.phone && (
              <Text style={styles.error}>{errors.phone}</Text>
            )}

            <Button title="Register" onPress={handleSubmit} color="#1E90FF" />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};
export default BigForm;
