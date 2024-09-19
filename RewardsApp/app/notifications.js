import React from 'react';
import { View, Text, FlatList } from 'react-native';

const dummyNotifications = [
  { id: '1', title: 'Welcome!', message: 'Welcome to 168Group Rewards!', timestamp: new Date() },
  { id: '2', title: 'New Reward', message: 'Check out our new reward!', timestamp: new Date() },
];

function NotificationItem({ notification }) {
  return (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text style={{ fontWeight: 'bold' }}>{notification.title}</Text>
      <Text>{notification.message}</Text>
      <Text style={{ fontSize: 12, color: '#666' }}>{notification.timestamp.toLocaleString()}</Text>
    </View>
  );
}

export default function NotificationsScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Notifications</Text>
      <FlatList
        data={dummyNotifications}
        renderItem={({ item }) => <NotificationItem notification={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}