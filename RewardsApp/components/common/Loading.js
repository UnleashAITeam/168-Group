import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { COLORS } from '../../constants/colors';

export function Loading() {
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size="large" color={COLORS.SECONDARY} />
    </View>
  );
}