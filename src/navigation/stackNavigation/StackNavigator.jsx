// src/navigation/stackNavigation/StackNavigator.jsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SettingsScreen from '../../screens/SettingsScreen';
import EditProfileScreen from '../../screens/EditProfileScreen';
import BottomTabs from '../bottomNavigation/BottomTabs';
import NotificationsScreen from '../../screens/NotificationsScreen';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
