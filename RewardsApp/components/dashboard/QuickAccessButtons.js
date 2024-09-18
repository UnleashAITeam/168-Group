import React from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '../common/Button';

export function QuickAccessButtons() {
  const router = useRouter();

  return (
    <View className="flex-row justify-between mb-4">
      <Button
        title="My QR Code"
        onPress={() => router.push('/qr-code')}
        className="flex-1 mr-2"
      />
      <Button
        title="Rewards"
        onPress={() => router.push('/rewards')}
        className="flex-1 ml-2"
      />
    </View>
  );
}