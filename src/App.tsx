import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppNavigator, { AppNavigator as NamedAppNavigator } from './navigation';

// Debug: ensure AppNavigator import resolves to a component
// eslint-disable-next-line no-console
console.log('DEBUG: AppNavigator default =>', AppNavigator);
// eslint-disable-next-line no-console
console.log('DEBUG: AppNavigator named =>', NamedAppNavigator);

// App was expecting a Function component
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NamedAppNavigator />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fb',
  },
});
