import React from 'react';
import { View } from 'react-native';

export function Card({ children, className = '' }) {
  return (
    <View className={`bg-white rounded-lg shadow-md mb-4 overflow-hidden ${className}`}>
      {children}
    </View>
  );
}