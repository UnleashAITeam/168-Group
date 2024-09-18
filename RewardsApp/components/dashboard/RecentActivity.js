import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card } from '../common/Card';
import { usePoints } from '../../hooks/usePoints';

function ActivityItem({ activity }) {
  return (
    <View className="flex-row justify-between items-center mb-2">
      <Text className="text-secondary">{activity.description}</Text>
      <Text className={activity.points > 0 ? 'text-green-600' : 'text-red-600'}>
        {activity.points > 0 ? '+' : ''}{activity.points} pts
      </Text>
    </View>
  );
}

export function RecentActivity() {
  const { recentActivity } = usePoints();

  return (
    <Card>
      <View className="p-4">
        <Text className="text-lg font-semibold text-secondary mb-2">Recent Activity</Text>
        <FlatList
          data={recentActivity}
          renderItem={({ item }) => <ActivityItem activity={item} />}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
        />
      </View>
    </Card>
  );
}