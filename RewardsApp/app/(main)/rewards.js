import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Link } from 'expo-router';

const dummyRewards = [
  { id: '1', name: 'Free Coffee', description: 'Get a free coffee', pointsCost: 100 },
  { id: '2', name: '10% Discount', description: '10% off your next purchase', pointsCost: 200 },
];

function RewardItem({ reward }) {
  return (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text style={{ fontWeight: 'bold' }}>{reward.name}</Text>
      <Text>{reward.description}</Text>
      <Text>Points: {reward.pointsCost}</Text>
    </View>
  );
}

export default function RewardsScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{ width: 150, height: 150, marginBottom: 20 }}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>168Group Rewards</Text>
        
        <Link href="/(main)/qr-code" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>QR Code</Text>
          </TouchableOpacity>
        </Link>
        
        <Link href="/(main)/profile" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Profile</Text>
          </TouchableOpacity>
        </Link>
        
        <Link href="/(main)/settings" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Settings</Text>
          </TouchableOpacity>
        </Link>
        
        <Link href="/notifications" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Notifications</Text>
          </TouchableOpacity>
        </Link>
        
        <Link href="/(main)/businesses" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Businesses</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <FlatList
        data={dummyRewards}
        renderItem={({ item }) => <RewardItem reward={item} />}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}

const styles = {
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
};