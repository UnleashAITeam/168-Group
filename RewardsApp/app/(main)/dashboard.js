import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { PointsBalance } from '../../components/dashboard/PointsBalance';
import { RecentActivity } from '../../components/dashboard/RecentActivity';
import { QuickAccessButtons } from '../../components/dashboard/QuickAccessButtons';
import { useAuth } from '../../hooks/useAuth';
import { COLORS } from '../../constants/colors';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <ScrollView className="flex-1 bg-primary">
      <View className="p-4">
        <Text className="text-2xl font-bold text-secondary mb-4">
          Welcome, {user?.user_metadata.full_name}
        </Text>
        <PointsBalance />
        <QuickAccessButtons />
        <RecentActivity />
      </View>
    </ScrollView>
  );
}