import React from 'react';
import { FlatList } from 'react-native';
import { RewardCard } from './RewardCard';

export function RewardsList({ rewards }) {
  return (
    <FlatList
      data={rewards}
      renderItem={({ item }) => <RewardCard reward={item} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
}