import React from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Settings</Text>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Notifications</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text>Promotions</Text>
          <Switch value={true} />
        </View>
      </View>
      <TouchableOpacity style={{ padding: 10, backgroundColor: '#007AFF', borderRadius: 5 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}