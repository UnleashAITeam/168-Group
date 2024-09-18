import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Card } from '../common/Card';
import { COLORS } from '../../constants/colors';

export function BusinessCard({ business }) {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/business/${business.id}`);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Card>
        <Image source={{ uri: business.image }} className="w-full h-40 rounded-t-lg" />
        <View className="p-4">
          <Text className="text-lg font-semibold text-secondary">{business.name}</Text>
          <Text className="text-gray-600">{business.category}</Text>
          <Text className="text-gray-600 mt-2">{business.address}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
}