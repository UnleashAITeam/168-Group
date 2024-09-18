import React from 'react';
import { FlatList } from 'react-native';
import { BusinessCard } from './BusinessCard';

export function BusinessList({ businesses }) {
  return (
    <FlatList
      data={businesses}
      renderItem={({ item }) => <BusinessCard business={item} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
}