import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Header: React.FC<{ title?: string }> = ({ title = 'AIFit' }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default Header;
