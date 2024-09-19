import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function ProfileScreen() {
  const user = {
    full_name: 'John Doe',
    email: 'john.doe@example.com',
    points: 500
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Your Profile</Text>
      <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Name: {user.full_name}</Text>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Email: {user.email}</Text>
        <Text style={{ fontSize: 18 }}>Points: {user.points}</Text>
      </View>
    </ScrollView>
  );
}