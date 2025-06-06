// src/navigation/stackNavigation/StackNavigator.jsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SettingsScreen from '../../screens/SettingsScreen';
import EditProfileScreen from '../../screens/EditProfileScreen';
import BottomTabs from '../bottomNavigation/BottomTabs';
import NotificationsScreen from '../../screens/NotificationsScreen';
import FormScreen from '../../screens/FormScreen';
import GoogleFonts from '../../screens/GoogleFonts';
import BigForm from '../../screens/BigForm';
import SignupForm from '../../screens/SignupForm';
import GetApiData from '../../screens/GetApiData';



const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
       <Stack.Screen name="FormScreen" component={FormScreen} />
          <Stack.Screen name="GoogleFonts" component={GoogleFonts} />
          <Stack.Screen name="BigForm" component={BigForm}/>
          <Stack.Screen name="SignupForm" component={SignupForm}/>
          <Stack.Screen name="GetApiData" component={GetApiData}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
