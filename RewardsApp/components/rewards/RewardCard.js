import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from '../common/Button';
import { COLORS } from '../../constants/colors';

export function RewardCard({ reward }) {
  return (
    <View className="bg-white rounded-lg p-4 mb-4 shadow-md">
      <Image source={{ uri: reward.image }} className="w-full h-40 rounded-md mb-2" />
      <Text className="text-lg font-semibold text-secondary mb-1">{reward.name}</Text>
      <Text className="text-gray-600 mb-2">{reward.description}</Text>
      <Text className="font-bold text-secondary mb-2">{reward.pointsCost} Points</Text>
      <Button title="Redeem" onPress={() => {/* Handle redemption */}} />
    </View>
  );
}