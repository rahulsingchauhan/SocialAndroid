import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
} from 'react-native';

export default function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [education, setEducation] = useState('');
  const [isStudent, setIsStudent] = useState(false);
  const [ageGroup, setAgeGroup] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const educationLevels = ['High School', 'Undergraduate', 'Postgraduate'];

  const handleReset = () => {
    setName('');
    setEmail('');
    setPassword('');
    setEducation('');
    setIsStudent(false);
    setAgeGroup('');
    setTermsAccepted(false);
  };

  const handleSignUp = () => {
    console.log('Form submitted:', {
      name, email, password, education, isStudent, ageGroup, termsAccepted
    });
    alert('Sign Up Done!');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        placeholderTextColor="#BBBBBB"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="#BBBBBB"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#BBBBBB"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Custom Picker */}
      <TouchableOpacity style={styles.pickerBox} onPress={() => setModalVisible(true)}>
        <Text style={{ color: education ? '#FFFFFF' : '#BBBBBB' }}>
          {education || 'Select Education Level'}
        </Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            {educationLevels.map(level => (
              <Pressable key={level} style={styles.modalItem} onPress={() => {
                setEducation(level);
                setModalVisible(false);
              }}>
                <Text style={{ color: '#FFFFFF' }}>{level}</Text>
              </Pressable>
            ))}
            <Pressable onPress={() => setModalVisible(false)} style={{ marginTop: 10 }}>
              <Text style={{ color: '#F44336', textAlign: 'center' }}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Student Toggle */}
      <TouchableOpacity style={styles.switchRow} onPress={() => setIsStudent(!isStudent)}>
        <Text style={styles.label}>Are you a Student?</Text>
        <View style={[styles.toggleSwitch, isStudent && styles.toggleActive]}>
          <View style={[styles.toggleCircle, isStudent && { marginLeft: 20 }]} />
        </View>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Select Age Group</Text>
      {['18-25', '26-35', '36+'].map(group => (
        <TouchableOpacity key={group} style={styles.radioRow} onPress={() => setAgeGroup(group)}>
          <View style={[styles.radioCircle, ageGroup === group && styles.selectedRadio]} />
          <Text style={styles.radioLabel}>{group}</Text>
        </TouchableOpacity>
      ))}

      {/* Custom Checkbox */}
      <TouchableOpacity style={styles.checkboxRow} onPress={() => setTermsAccepted(!termsAccepted)}>
        <View style={[styles.checkbox, termsAccepted && styles.checkedBox]}>
          {termsAccepted && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <Text style={styles.label}>I accept the Terms & Conditions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  input: {
    backgroundColor: '#1E1E1E',
    color: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#333333',
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
  },
  pickerBox: {
    backgroundColor: '#1E1E1E',
    borderWidth: 1,
    borderColor: '#333333',
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
  },
  label: {
    color: '#FFFFFF',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  toggleSwitch: {
    width: 40,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#333',
    justifyContent: 'center',
  },
  toggleActive: {
    backgroundColor: '#4CAF50',
  },
  toggleCircle: {
    width: 18,
    height: 18,
    backgroundColor: '#FFF',
    borderRadius: 9,
    marginLeft: 2,
  },
  sectionTitle: {
    color: '#FFFFFF',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#888',
    marginRight: 10,
  },
  selectedRadio: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  radioLabel: {
    color: '#FFFFFF',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  checkbox: {
    height: 22,
    width: 22,
    borderWidth: 1,
    borderColor: '#888',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  checkmark: {
    color: '#fff',
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    alignItems: 'center',
    borderRadius: 6,
    marginBottom: 10,
  },
  resetButton: {
    backgroundColor: '#F44336',
    padding: 15,
    alignItems: 'center',
    borderRadius: 6,
  },
  signupText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  resetText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  modalBox: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 20,
  },
  modalItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#333',
  },
});
