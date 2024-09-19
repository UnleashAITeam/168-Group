import React from 'react';
import { View, Text } from 'react-native';

export default function QRCodeScreen() {
  const qrValue = '168group-user-123'; // Dummy user ID

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Your Unique QR Code</Text>
      <View style={{ backgroundColor: '#f0f0f0', padding: 20, borderRadius: 10 }}>
        <Text>QR Code Placeholder</Text>
        <Text style={{ fontSize: 12, color: '#666', marginTop: 10 }}>{qrValue}</Text>
      </View>
      <Text style={{ textAlign: 'center', marginTop: 20 }}>
        Present this QR code to earn or redeem points at any 168Group business.
      </Text>
    </View>
  );
}