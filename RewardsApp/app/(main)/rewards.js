import React, { useState } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
import { RewardCard } from '../../components/rewards/RewardCard';
import { useRewards } from '../../hooks/useRewards';
import { COLORS } from '../../constants/colors';

export default function RewardsScreen() {
  const { rewards } = useRewards();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRewards = rewards.filter(reward => 
    reward.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View className="flex-1 bg-primary p-4">
      <Text className="text-2xl font-bold text-secondary mb-4">Rewards Catalog</Text>
      <TextInput
        placeholder="Search rewards..."
        value={searchTerm}
        onChangeText={setSearchTerm}
        className="bg-white border border-secondary rounded-md p-2 mb-4"
      />
      <FlatList
        data={filteredRewards}
        renderItem={({ item }) => <RewardCard reward={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}