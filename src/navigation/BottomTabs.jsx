import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import TabScreenHome from './bottomNavigation/HomeScreen';

const Tab = createBottomTabNavigator();

// 🔁 Icon rendering function - OUTSIDE the component
const getTabBarIcon = (routeName, focused, color, size) => {
  let iconName;

  switch (routeName) {
    case 'Home':
      iconName = focused ? 'home' : 'home-outline';
      break;

    default:
      iconName = 'alert-circle-outline';
  }

  return <Icon name={iconName} size={size} color={color} />;
};

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) =>
          getTabBarIcon(route.name, focused, color, size),
        tabBarActiveTintColor: '#0a84ff',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={TabScreenHome} />
    </Tab.Navigator>
  );
}
