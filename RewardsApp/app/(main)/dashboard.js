import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Dashboard() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome to 168Group Rewards</Text>
      <Link href="/rewards" asChild>
        <TouchableOpacity style={{ padding: 10, backgroundColor: '#007AFF', borderRadius: 5 }}>
          <Text style={{ color: 'white' }}>View Rewards</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}