import React from 'react';
import { View, Text } from 'react-native';
import { usePoints } from '../../hooks/usePoints';
import { COLORS } from '../../constants/colors';

export function PointsBalance() {
  const { points } = usePoints();

  return (
    <View className="bg-white rounded-lg p-4 mb-4 shadow-md">
      <Text className="text-lg font-semibold text-secondary mb-2">Your Points Balance</Text>
      <Text className="text-3xl font-bold text-secondary">{points}</Text>
    </View>
  );
}