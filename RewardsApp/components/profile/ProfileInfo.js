import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { usePoints } from '../../hooks/usePoints';

export function ProfileInfo({ user }) {
  const { points } = usePoints();

  return (
    <Card>
      <View className="items-center p-4">
        <Image
          source={{ uri: user.avatar_url || '/placeholder.svg?height=100&width=100' }}
          className="w-24 h-24 rounded-full mb-4"
        />
        <Text className="text-xl font-bold text-secondary mb-2">{user.full_name}</Text>
        <Text className="text-gray-600 mb-4">{user.email}</Text>
        <Text className="text-lg font-semibold text-secondary mb-2">Total Points</Text>
        <Text className="text-3xl font-bold text-secondary mb-4">{points}</Text>
        <Button title="Edit Profile" onPress={() => {/* Navigate to edit profile */}} />
      </View>
    </Card>
  );
}