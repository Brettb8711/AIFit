import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import { Card } from '../components/Card';

const Dashboard: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="AIFit Dashboard" />
      <ScrollView contentContainerStyle={styles.content}>
        <Card title="Daily Plan" subtitle="Personalized workouts based on goals" />
        <Card title="Progress" subtitle="View recent performance and trends" />
        <Card title="Nutrition" subtitle="Track macros and meals" />
        <Card title="Research" subtitle="View peer-reviewed suggestions" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
});

export default Dashboard;
