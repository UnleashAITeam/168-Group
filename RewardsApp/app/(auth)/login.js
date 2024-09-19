import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Login() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>
      <Link href="/(main)/rewards" asChild>
        <TouchableOpacity style={{ padding: 10, backgroundColor: '#007AFF', borderRadius: 5 }}>
          <Text style={{ color: 'white' }}>Login (Demo)</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}