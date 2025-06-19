// navigation/MyDrawer.js

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from '../bottomNavigation/BottomTabs';
import ProfileScreen from '../../screens/ProfileScreen';
import CustomDrawer from '../../components/CustomDrawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();

// Icons
const DashboardIcon = ({ color, size }) => (
  <Icon name="view-dashboard-outline" color={color} size={size} />
);
const ProfileIcon = ({ color, size }) => (
  <Icon name="account-circle-outline" color={color} size={size} />
);

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#1e1e1e',
          width: 250,
        },
        headerStyle: {
          backgroundColor: '#121212',
        },
        headerTintColor: '#fff',
        drawerActiveBackgroundColor: '#292929',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#aaa',
        drawerLabelStyle: {
          fontSize: 16,
          marginLeft: -12,
          fontWeight: '500',
        },
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={BottomTabs}
        options={{ drawerIcon: DashboardIcon }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ drawerIcon: ProfileIcon }}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
