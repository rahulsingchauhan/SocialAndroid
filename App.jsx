// App.js

import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import StackNavigator from './src/navigation/stackNavigation/StackNavigator';

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
