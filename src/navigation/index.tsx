import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard';

// Debug: inspect imported navigation objects to catch interop issues
// eslint-disable-next-line no-console
console.log('DEBUG: NavigationContainer =>', NavigationContainer);
// eslint-disable-next-line no-console
console.log('DEBUG: createNativeStackNavigator =>', createNativeStackNavigator);

const Stack = createNativeStackNavigator();

// Need to change to a Function
// App is not expecting an object
export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
