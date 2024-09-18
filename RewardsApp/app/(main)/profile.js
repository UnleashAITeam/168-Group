import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ProfileInfo } from '../../components/profile/ProfileInfo';
import { PointsHistory } from '../../components/profile/PointsHistory';
import { useAuth } from '../../hooks/useAuth';
import { COLORS } from '../../constants/colors';

export default function ProfileScreen() {
  const { user } = useAuth();

  return (
    <ScrollView className="flex-1 bg-primary">
      <View className="p-4">
        <Text className="text-2xl font-bold text-secondary mb-4">Your Profile</Text>
        <ProfileInfo user={user} />
        <PointsHistory />
      </View>
    </ScrollView>
  );
}