import React, { useState } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
import { BusinessCard } from '../../components/businesses/BusinessCard';
import { useBusinesses } from '../../hooks/useBusinesses';
import { COLORS } from '../../constants/colors';

export default function BusinessesScreen() {
  const { businesses } = useBusinesses();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBusinesses = businesses.filter(business => 
    business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    business.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View className="flex-1 bg-primary p-4">
      <Text className="text-2xl font-bold text-secondary mb-4">168Group Businesses</Text>
      <TextInput
        placeholder="Search businesses..."
        value={searchTerm}
        onChangeText={setSearchTerm}
        className="bg-white border border-secondary rounded-md p-2 mb-4"
      />
      <FlatList
        data={filteredBusinesses}
        renderItem={({ item }) => <BusinessCard business={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}