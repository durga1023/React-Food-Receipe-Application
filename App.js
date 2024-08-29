import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './SignIn';
import AppScreen from './AppScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: 'Sign In' }}
        />
        <Stack.Screen
          name="AppScreen"
          component={AppScreen}
          options={{ title: 'App Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
