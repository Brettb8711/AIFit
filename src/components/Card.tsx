import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Card: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      {subtitle ? <Text style={styles.cardSubtitle}>{subtitle}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#666',
  },
});

export default Card;
