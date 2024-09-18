import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNotifications } from '../hooks/useNotifications';
import { COLORS } from '../constants/colors';

function NotificationItem({ notification }) {
  return (
    <View className={`p-4 mb-2 rounded-lg ${notification.read ? 'bg-white' : 'bg-secondary bg-opacity-10'}`}>
      <Text className="font-semibold text-secondary">{notification.title}</Text>
      <Text className="text-gray-600">{notification.message}</Text>
      <Text className="text-xs text-gray-400 mt-1">{new Date(notification.timestamp).toLocaleString()}</Text>
    </View>
  );
}

export default function NotificationsScreen() {
  const { notifications, markAsRead } = useNotifications();

  return (
    <View className="flex-1 bg-primary p-4">
      <Text className="text-2xl font-bold text-secondary mb-4">Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={({ item }) => <NotificationItem notification={item} />}
        keyExtractor={(item) => item.id.toString()}
        onViewableItemsChanged={({ viewableItems }) => {
          viewableItems.forEach((viewableItem) => {
            if (!viewableItem.item.read) {
              markAsRead(viewableItem.item.id);
            }
          });
        }}
        viewabilityConfig={{ itemVisiblePercentThreshold: 100 }}
      />
    </View>
  );
}