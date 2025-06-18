import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const PostLoginApi = () => {


  
  const navigation = useNavigation();
  const handleLogin = async (values, {setSubmitting}) => {
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username: values.username,
        password: values.password,
      });

      //here we are going to save userLogin token to asyncStorage

      try {
        await AsyncStorage.setItem('myKey', '1');
        Alert.alert('Success', 'Value saved successfully!');
      } catch (e) {
        Alert.alert('Error', 'Failed to save the data.');
      }

      // On success, navigate to Profile screen with user data
      // if(response?.data){
      navigation.navigate('MyDrawer');
      // }
    } catch (error) {
      Alert.alert(
        'Login Failed',
        error.response?.data?.message || 'Something went wrong',
      );
    } finally {
      setSubmitting(false);
    }
    
  };


  
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{username: '', password: ''}}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter username"
              placeholderTextColor="#777"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            />
            {touched.username && errors.username && (
              <Text style={styles.error}>{errors.username}</Text>
            )}

            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter password"
              placeholderTextColor="#777"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
              disabled={isSubmitting}>
              {isSubmitting ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Login</Text>
              )}
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    color: '#fff',
    marginBottom: 6,
    fontSize: 16,
  },
  input: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#333',
  },
  button: {
    backgroundColor: '#333',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  error: {
    color: '#ff4d4d',
    marginBottom: 8,
    fontSize: 13,
  },
});

export default PostLoginApi;
