// components/CustomDrawer.js

import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, CommonActions } from '@react-navigation/native';

// Logout icon
const LogoutIcon = ({ color = '#f66', size = 22 }) => (
  <Icon name="logout" color={color} size={size} />
);

const CustomDrawer = props => {
  const navigation = useNavigation();
  const profileScale = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.spring(profileScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, [profileScale]);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('myKey');
    } catch (e) {
      // Handle error if needed
    }

    console.log('Done.');

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'PostLoginApi' }],
      })
    );
  };

  return (
    <View style={styles.drawerContainer}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ flexGrow: 1 }}>
        <Animated.View
          style={[
            styles.profileContainer,
            { transform: [{ scale: profileScale }] },
          ]}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/300' }}
            style={styles.profileImage}
          />
          <Text style={styles.userName}>Rahul Chauhan</Text>
          <Text style={styles.userEmail}>rahulsinghchauhanrj@gmail.com</Text>
          <Text style={styles.userInfo}>📍 Bhopal (M.P.) - 462016</Text>
          <Text style={styles.userInfo}>📞 +91 8602399308</Text>
        </Animated.View>

        <View style={{ flex: 1, paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={styles.logoutSection}>
        <DrawerItem
          label="Logout"
          onPress={handleLogout}
          icon={LogoutIcon}
          labelStyle={{ color: '#f66', fontWeight: 'bold' }}
        />
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#121212',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
  },
  userName: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
    fontWeight: '600',
  },
  userEmail: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 4,
  },
  userInfo: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 2,
  },
  logoutSection: {
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingBottom: 20,
  },
});
